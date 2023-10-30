import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { ReactElement } from 'react';
import { IMessageProps } from '@/utils/types';

function Message({
  img,
  alt,
  content,
  bgColor,
}: IMessageProps): ReactElement {
  return (
    <section
      className={`w-full min-h-[5rem] h-fit p-6 flex flex-row justify-center items-center ${bgColor}`}
    >
      <div className="w-[326px] lg:w-[826px] flex flex-row justify-center items-start gap-4 lg:gap-6">
        <Image className="w-[50px] h-[50px]" width={50} height={50} src={img} alt={alt} />
        <div className="max-w-[250px] lg:max-w-full w-full">
          {content.split('\n').map((item) => (
            <p
              key={uuidv4()}
              className="text-t-light text-base max-w-full break-words text-left"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Message;
