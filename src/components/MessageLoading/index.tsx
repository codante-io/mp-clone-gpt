import Image from 'next/image';
import { ReactElement } from 'react';
import { IMessageLoadingProps } from '@/utils/types';
import Loading from '../Loading';

function MessageLoading({
  img,
  alt,
  bgColor,
}: IMessageLoadingProps): ReactElement {
  return (
    <section
      className={`w-full min-h-[5rem] h-fit p-6 flex flex-row justify-center items-center ${bgColor}`}
    >
      <div className="w-[326px] lg:w-[826px] flex flex-row justify-center items-start gap-4 lg:gap-6">
        <Image className="w-[50px] h-[50px]" width={50} height={50} src={img} alt={alt} />
        <div className="max-w-[250px] lg:max-w-full w-full">
          <Loading />
        </div>
      </div>
    </section>
  );
}

export default MessageLoading;
