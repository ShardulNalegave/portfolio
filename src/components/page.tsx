import { ReactNode } from 'react';

export default function Page({ children } : { children: ReactNode }) {
  return (
    <div className="h-screen overflow-y-scroll p-[30px]">
      { children }
    </div>
  );
}