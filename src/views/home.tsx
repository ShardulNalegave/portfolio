
import { TypeAnimation } from 'react-type-animation';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconBrandTwitter,
} from '@tabler/icons-react';

export default function HomeView() {
  return (
    <div className='h-screen overflow-y-hidden flex flex-col p-[30px]'>
      <div className="grow"></div>
      <div className="flex-none">
        <h1 className="font-mono text-xl">Hey! I&apos;m,</h1>
        <div className="h-[5px]"></div>
        <h1 className="font-['Staatliches'] text-5xl">Shardul Nalegave</h1>
        <div className="h-[25px]"></div>
        <h1 className="font-mono text-xl">And I&apos;m a/an,</h1>
        <TypeAnimation
          sequence={[
            'Avid Learner',
            1500,
            'Creative Developer',
            1500,
            'Tech Enthusiast',
            1500,
          ]}
          wrapper='h1'
          speed={5}
          repeat={Infinity}
          className='font-mono text-xl text-teal-800 font-bold'
        />
        <div className='h-[30px]'></div>
        <div>
          <a href='mailto:shardul.nalegave.2005@gmail.com'>
            <div className='inline-block bg-zinc-100 border-dashed border-[2px] border-zinc-950 rounded-md p-[8px]'>
              <IconMail />
            </div>
          </a>
          <div className='w-[10px] inline-block'></div>
          <a href="https://github.com/ShardulNalegave" target='_blank' rel="noopener noreferrer">
            <div className='inline-block bg-zinc-100 border-dashed border-[2px] border-zinc-950 rounded-md p-[8px]'>
              <IconBrandGithub />
            </div>
          </a>
          <div className='w-[10px] inline-block'></div>
          <a href="https://www.linkedin.com/in/shardul-nalegave/" target='_blank' rel="noopener noreferrer">
            <div className='inline-block bg-zinc-100 border-dashed border-[2px] border-zinc-950 rounded-md p-[8px]'>
              <IconBrandLinkedin />
            </div>
          </a>
          <div className='w-[10px] inline-block'></div>
          <a href="https://twitter.com/ShardulNalegave" target='_blank' rel="noopener noreferrer">
            <div className='inline-block bg-zinc-100 border-dashed border-[2px] border-zinc-950 rounded-md p-[8px]'>
              <IconBrandTwitter />
            </div>
          </a>
        </div>
      </div>
      <div className="grow"></div>
    </div>
  );
}