import { DetailedHTMLProps } from 'react';

export function Paragraph(props : DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) {
  return (
    <p className={`my-[15px] ${props.className ? props.className : ''}`} id={props.id}>
      {props.children}
    </p>
  );
}