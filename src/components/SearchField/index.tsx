import Image from 'next/image';
import { ReactElement, useState } from 'react';
import { ISearchProps } from '@/utils/types';

function SearchField({
  message,
  setMessage,
  handleRequestIA,
  showGuide,
  setShowGuide,
  keyAPI,
  setKey,
}: ISearchProps): ReactElement {
  const [isBtnActived, setIsBtnActived] = useState<boolean>(false);

  return (
    <form
      className="w-full lg:w-fit mx-auto pt-5 flex flex-row justify-center items-center relative"
      onSubmit={async (e) => {
        e.preventDefault();
        if (showGuide) setShowGuide(false);
        else await handleRequestIA();
      }}
    >
      <input
        className="p-5 lg:p-8 pr-12 lg:pr-16 w-full lg:w-[826px] h-[64px] rounded-lg bg-b-light border-2 border-t-border outline-none focus:border-t-light transition-all duration-300 ease-in-out text-t-light"
        type="text"
        placeholder={showGuide ? '🔑  Digite sua chave de API' : '😁  Digite um "Oi"'}
        value={showGuide ? keyAPI : message}
        onChange={(e) => {
          if (showGuide) setKey(e.target.value);
          else setMessage(e.target.value);
        }}
        onFocus={() => {
          setIsBtnActived(true);
        }}
        onBlur={() => {
          setIsBtnActived(false);
        }}
      />

      <button type="submit" className="absolute right-0 h-full mr-6">
        <Image
          className="w-[20px] h-[20px] hover:cursor-pointer hover:scale-110 transition-all hover:brightness-[.8]"
          width={20}
          height={20}
          src={isBtnActived
            ? '/images/send-actived-icon.svg'
            : '/images/send-icon.svg'}
          alt="Icone de seta"
        />
      </button>
    </form>
  );
}

export default SearchField;
