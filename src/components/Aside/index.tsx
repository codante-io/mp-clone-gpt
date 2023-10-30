import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { ReactElement, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { IAsideProps } from '@/utils/types';

function Aside({
  chatList,
  updateIdCurrentChat,
  deleteChat,
  showAside,
  setShowAside,
}: IAsideProps): ReactElement {
  const isMobile = useMediaQuery({ maxWidth: 700 });

  useEffect(() => {
    if (isMobile) {
      setShowAside(false);
    } else {
      setShowAside(true);
    }
  }, [isMobile, setShowAside]);

  return (
    <>
      {!showAside ? (
        <button
          type="button"
          className="absolute top-5 left-5 z-50 hover:brightness-75 transition-all duration-300 ease-in-out"
          onClick={() => {
            setShowAside(!showAside);
          }}
        >
          <Image
            className="w-[45px] h-[45px]"
            width={45}
            height={45}
            src="/images/menuBar.svg"
            alt="Icone do menu"
          />
        </button>
      ) : (
        <div className="absolute top-0 left-0 z-50 lg:static w-[20rem] h-screen py-5 bg-b-dark flex flex-col justify-start gap-5">
          <div className="w-full flex px-5 flex-row justify-center items-center">
            <h1 className="w-full text-t-dark font-bold text-center">
              Lista de Conversas
            </h1>
            <button
              type="button"
              className="hover:brightness-75 transition-all duration-300 ease-in-out"
              onClick={() => {
                setShowAside(!showAside);
              }}
            >
              <Image
                className="w-[50px] h-[50px]"
                width={50}
                height={50}
                src="/images/menuBar.svg"
                alt="Icone do menu"
              />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            {chatList.map(({ id, questions }) => (
              <div
                key={uuidv4()}
                className="w-5/6 h-fit m-auto p-3 rounded-lg bg-b-chat flex flex-row justify-between items-center gap-2"
              >
                <button
                  type="button"
                  className="flex flex-row justify-start items-center gap-2 hover:font-bold hover:brightness-200 transition-all duration-150 ease-in-out"
                  onClick={() => {
                    updateIdCurrentChat(id);
                  }}
                >
                  <Image
                    className="w-[15px] h-[15px]"
                    width={15}
                    height={15}
                    src="/images/balloon.svg"
                    alt="Icone de balão"
                  />
                  <p className="text-t-light text-left">
                    {`${questions[0]?.content.substring(
                      0,
                      17,
                    )}...`}
                  </p>
                </button>
                <button
                  type="button"
                  className="hover:brightness-200 transition-all duration-150 ease-in-out"
                  onClick={() => {
                    deleteChat(id);
                  }}
                >
                  <Image
                    className="w-[15px] h-[15px]"
                    width={15}
                    height={15}
                    src="/images/trash.svg"
                    alt="Icone de lixeira"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Aside;
