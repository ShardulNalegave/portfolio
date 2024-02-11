
import moment from 'moment';
import { ReactNode, Suspense } from 'react';
import Page from '../components/page';
import { useLoaderData } from 'react-router-dom';
import { Heading3 } from '../components/mdx/heading';

export function PostView({ children } : {
  children: ReactNode,
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = useLoaderData() as any;
  document.title = `${data.title} - Shardul Nalegave`;

  return (
    <Page>
      <div className='rounded p-[25px] bg-zinc-100'>
        <Heading3>{data.title}</Heading3>
        <div className='h-[5px]'></div>
        <p className='text-sm'>{data.description}</p>
        <div className='h-[10px]'></div>
        <p className='text-sm text-zinc-700'><span className='font-bold'>Posted:</span> {moment(data.date, 'DD[/]MM[/]YYYY').format('Do MMMM[,] YYYY')}</p>
      </div>
      <div className='h-[50px]'></div>
      <Suspense fallback={<>Loading...</>}>
        {children}
      </Suspense>
    </Page>
  );
}