import { DetailedHTMLProps } from 'react';

export function Heading1(props : DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadElement>) {
  return (
    <h1 className={`text-2xl font-display ${props.className}`} id={props.id}>{props.children}</h1>
  );
}