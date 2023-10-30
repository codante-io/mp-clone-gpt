import Image from 'next/image';
import { ReactElement } from 'react';

function Loading(): ReactElement {
  return (
    <Image
      className="w-[40px] h-[40px]"
      width={40}
      height={40}
      src="/images/loading.svg"
      alt="Icone de loading"
    />
  );
}

export default Loading;
