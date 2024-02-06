import { DetailedHTMLProps } from 'react';

export function Heading1(props : DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadElement>) {
  return (
    <h1 className={`text-4xl font-display ${props.className}`} id={props.id}>
      <span className='text-3xl text-zinc-950 inline-block'>#</span> {props.children}
    </h1>
  );
}

export function Heading2(props : DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadElement>) {
  return (
    <h1 className={`text-2xl font-display ${props.className}`} id={props.id}>
      <span className='text-xl text-zinc-950 inline-block'>##</span> {props.children}
    </h1>
  );
}

export function Heading3(props : DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadElement>) {
  return (
    <h1 className={`text-xl font-display ${props.className}`} id={props.id}>
      <span className='text-xl text-zinc-950 inline-block'>###</span> {props.children}
    </h1>
  );
}

export function Heading4(props : DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadElement>) {
  return (
    <h1 className={`text-2xl text-teal-800 underline font-['Staatliches'] ${props.className}`} id={props.id}>{props.children}</h1>
  );
}

export function Heading5(props : DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadElement>) {
  return (
    <h1 className={`text-2xl font-bold font-mono ${props.className}`} id={props.id}>{props.children}</h1>
  );
}

export function Heading6(props : DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadElement>) {
  return (
    <h1 className={`text-xl font-mono ${props.className}`} id={props.id}>{props.children}</h1>
  );
}
