import { ReactElement, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IChatBot } from '@/utils/types';
import Message from '../Message';
import MessageLoading from '../MessageLoading';

function ChatBot({ questions, answers, loading }: IChatBot): ReactElement {
  const questionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (questionsRef?.current) {
      const { current } = questionsRef;
      current.scrollTop = current.scrollHeight;
    }
  }, [questions, answers]);

  return (
    <div
      className="w-screen lg:w-full h-full max-h-full overflow-y-auto scroll-smooth flex flex-col justify-start items-center"
      ref={questionsRef}
    >
      {questions.map((question, index) => (
        <div key={uuidv4()} className="w-full">
          <div className="w-full">
            <Message
              id={question.id}
              img="/images/user.svg"
              alt="Icone do usuário"
              content={question.content}
              bgColor="bg-b-light"
            />
          </div>
          <div className="w-full">
            {loading && index === questions.length - 1 ? (
              <MessageLoading
                img="/images/bot.svg"
                alt="Icone do bot"
                bgColor="bg-b-chat"
              />
            ) : (
              <Message
                id={answers[index].id}
                img="/images/bot.svg"
                alt="Icone do bot"
                content={answers[index]?.content || ''}
                bgColor="bg-b-chat"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatBot;
