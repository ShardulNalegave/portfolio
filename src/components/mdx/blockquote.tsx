
import React, { DetailedHTMLProps } from 'react';

export function Blockquote(props: DetailedHTMLProps<React.HTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>) {
  return (
    <div className='my-[15px] px-[30px] py-[20px] bg-zinc-200 border-zinc-900 border-solid border-l-[10px]'>
      {props.children}
    </div>
  );
}