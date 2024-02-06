import { ReactNode } from 'react';

export default function Page({ children } : { children: ReactNode }) {
  return (
    <div className="h-screen overflow-y-scroll p-[30px] lg:p-[50px]">
      <div className='h-[80px] lg:h-[0px]'></div>
      { children }
    </div>
  );
}