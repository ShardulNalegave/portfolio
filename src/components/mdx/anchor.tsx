import { ReactNode } from 'react';

export function Anchor(props: {
  href?: string,
  children?: ReactNode,
}) {
  console.log(props);
  return (
    <a href={props.href} className="text-teal-900 underline">
      {props.children}
    </a>
  );
}