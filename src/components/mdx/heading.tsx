import { DetailedHTMLProps } from 'react';

export function Heading1(props : DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadElement>) {
  return (
    <h1 className={`text-4xl font-display mb-[20px] mt-[25px] ${props.className ? props.className : ''}`} id={props.id}>
      <span className='text-3xl text-zinc-950 inline-block'>#</span> {props.children}
    </h1>
  );
}

export function Heading2(props : DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadElement>) {
  return (
    <h1 className={`text-2xl font-display mb-[10px] mt-[30px] ${props.className ? props.className : ''}`} id={props.id}>
      <span className='text-xl text-zinc-950 inline-block'>##</span> {props.children}
    </h1>
  );
}

export function Heading3(props : DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadElement>) {
  return (
    <h1 className={`text-xl font-display mb-[8px] ${props.className ? props.className : ''}`} id={props.id}>
      <span className='text-xl text-zinc-950 inline-block'>###</span> {props.children}
    </h1>
  );
}

export function Heading4(props : DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadElement>) {
  return (
    <h1 className={`text-xl text-teal-800 font-['Staatliches'] ${props.className ? props.className : ''}`} id={props.id}>{props.children}</h1>
  );
}

export function Heading5(props : DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadElement>) {
  return (
    <h1 className={`text-lg font-bold font-mono ${props.className ? props.className : ''}`} id={props.id}>{props.children}</h1>
  );
}

export function Heading6(props : DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadElement>) {
  return (
    <h1 className={`text-md font-mono ${props.className ? props.className : ''}`} id={props.id}>{props.children}</h1>
  );
}
