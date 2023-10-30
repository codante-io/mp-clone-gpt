import { Dispatch, SetStateAction } from 'react';

export interface IResponse {
  id: string;
  role: string;
  content: string;
}

export interface IChatList {
  id: string;
  questions: IResponse[];
  answers: IResponse[];
}

export interface IChatBot {
  questions: IResponse[];
  answers: IResponse[];
  loading: boolean;
}

export interface IMessageLoadingProps {
  img: string;
  alt: string;
  bgColor: string;
}

export interface IMessageProps extends IMessageLoadingProps {
  id: string;
  content: string;
}

export interface IAsideProps {
  chatList: IChatList[];
  updateIdCurrentChat: (id: string) => void;
  deleteChat: (id: string) => void;
  showAside: boolean;
  setShowAside: Dispatch<SetStateAction<boolean>>;
}

export interface ISearchProps {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  handleRequestIA: () => Promise<void>;
  showGuide: boolean;
  setShowGuide: Dispatch<SetStateAction<boolean>>;
  keyAPI: string;
  setKey: Dispatch<SetStateAction<string>>;
}

export interface IErrorOptions {
  status: number;
  error: { message: string };
}
