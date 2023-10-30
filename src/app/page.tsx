'use client';

import {
  ReactElement, useCallback, useEffect, useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IChatList, IResponse } from '@/utils/types';
import { modelResponse } from '@/utils/helper';
import requestApi from '@/utils/requestApi';
import Title from '@/components/Title';
import ChatBot from '@/components/ChatBot';
import SearchField from '@/components/SearchField';
import Guide from '@/components/Guide';
import Aside from '@/components/Aside';

export default function Home(): ReactElement {
  const [key, setKey] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [questions, setQuestions] = useState<IResponse[]>([]);
  const [answers, setAnswers] = useState<IResponse[]>([]);
  const [idCurrentChat, setIdCurrentChat] = useState<string>('');
  const [chatList, setChatList] = useState<IChatList[]>([]);
  const [showGuide, setShowGuide] = useState<boolean>(true);
  const [showAside, setShowAside] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const handleRequestIA = async (): Promise<void> => {
    try {
      setLoading(true);
      setQuestions([...questions, modelResponse('user', message)]);
      const response = await requestApi(key, message);
      if (response) {
        setAnswers([...answers, modelResponse('bot', response.content)]);
        setLoading(false);
      }
    } catch (error) {
      if (error instanceof Error) {
        setAnswers([...answers, modelResponse('bot', error.message)]);
      }
    } finally {
      setMessage('');
      setLoading(false);
    }
  };

  const deleteChat = (id: string): void => {
    const chatListFiltered = chatList.filter((item) => item.id !== id);
    if (chatListFiltered.length > 0) {
      setChatList(chatListFiltered);
      localStorage.setItem('chat', JSON.stringify(chatListFiltered));
      setQuestions(chatListFiltered[0]?.questions ?? []);
      setAnswers(chatListFiltered[0]?.answers ?? []);
      setIdCurrentChat(chatListFiltered[0]?.id);
    } else {
      setChatList([]);
      setQuestions([]);
      setAnswers([]);
      setIdCurrentChat(uuidv4());
      localStorage.removeItem('chat');
    }
  };

  const updateIdCurrentChat = useCallback(
    (id: string): void => {
      setIdCurrentChat(id);
      const currentChat = chatList.find((item) => item.id === id);
      if (currentChat) {
        setQuestions(currentChat?.questions ?? []);
        setAnswers(currentChat?.answers ?? []);
      }
    },
    [chatList],
  );

  const updateChatList = useCallback(() => {
    if (idCurrentChat && questions.length > 0 && answers.length > 0) {
      setChatList((prevChatList) => {
        const list = [...prevChatList];

        if (list.some(({ id }) => id === idCurrentChat)) {
          const newList = list
            .map((i) => (i.id === idCurrentChat ? { ...i, questions, answers } : i));
          localStorage.setItem('chat', JSON.stringify(newList));
          return newList;
        }
        list.push({ id: idCurrentChat, questions, answers });
        localStorage.setItem('chat', JSON.stringify(list));
        return list;
      });
    }
  }, [answers, idCurrentChat, questions]);

  useEffect(updateChatList, [updateChatList]);

  useEffect(() => {
    setIdCurrentChat(uuidv4());
    const chatStorage = localStorage.getItem('chat');
    if (chatStorage) {
      setChatList(JSON.parse(chatStorage));
    }
  }, []);

  return (
    <main className="px-6 lg:px-0 py-16 lg:py-20 w-screen h-screen max-h-screen flex flex-row justify-between items-center">
      {!showGuide && (
      <Aside
        chatList={chatList}
        updateIdCurrentChat={updateIdCurrentChat}
        deleteChat={deleteChat}
        showAside={showAside}
        setShowAside={setShowAside}
      />
      )}
      <section className="w-full h-full flex flex-col justify-between items-center">
        <Title />
        {showGuide ? (
          <Guide />
        ) : (
          <ChatBot
            questions={questions}
            answers={answers}
            loading={loading}
          />
        )}
        <SearchField
          message={message}
          setMessage={setMessage}
          handleRequestIA={handleRequestIA}
          showGuide={showGuide}
          setShowGuide={setShowGuide}
          keyAPI={key}
          setKey={setKey}
        />
      </section>
    </main>
  );
}
