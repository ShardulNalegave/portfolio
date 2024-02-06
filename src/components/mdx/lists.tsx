import { DetailedHTMLProps } from 'react';

export function UnorderedList(props: DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>) {
  return (
    <ul className='list-disc list-inside pl-[20px]'>
      {props.children}
    </ul>
  );
}

export function OrderedList(props: DetailedHTMLProps<React.HTMLAttributes<HTMLOListElement>, HTMLOListElement>) {
  return (
    <ul className='list-decimal list-inside pl-[20px]'>
      {props.children}
    </ul>
  );
}