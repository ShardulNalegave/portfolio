import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconMenu2, IconX } from '@tabler/icons-react';

export default function Sidebar() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <div className='hidden lg:block'>
        <div className='h-screen bg-zinc-900 text-white flex flex-col py-[30px] pl-[30px] pr-[75px]'>
          <div className="grow"></div>
          <div className="flex-none">
            <Link to='/' className="text-5xl font-display hover:underline cursor-pointer">Shardul<br />Nalegave</Link>
            <div className='h-[20px]'></div>
            <Link to='/about' className='font-mono hover:underline'>- About</Link>
            <br />
            <Link to='/posts' className='font-mono hover:underline'>- Posts</Link>
            <br />
            <div className='h-[15px]'></div>
            <div className='border-dashed border-zinc-100 border-t-[1px]'></div>
            <div className='h-[15px]'></div>
            <a href="https://github.com/ShardulNalegave" target='_blank' rel="noopener noreferrer" className='font-mono hover:underline' onClick={() => setShowDrawer(false)}>- GitHub</a>
            <br />
            <a href="https://www.linkedin.com/in/shardul-nalegave/" target='_blank' rel="noopener noreferrer" className='font-mono hover:underline' onClick={() => setShowDrawer(false)}>- LinkedIn</a>
            <br />
            <a href="https://twitter.com/ShardulNalegave" target='_blank' rel="noopener noreferrer" className='font-mono hover:underline' onClick={() => setShowDrawer(false)}>- Twitter</a>
          </div>
        </div>
      </div>

      <div className='block lg:hidden'>
        <div className='fixed top-0 left-0 right-0 p-[15px] bg-zinc-900 text-white'>
          <div className="flex items-center">
            <div className="flex-none">
              <Link to='/' className='font-display text-xl'>Shardul Nalegave</Link>
            </div>
            <div className="grow"></div>
            <div className="flex-none cursor-pointer" onClick={() => setShowDrawer(true)}>
              <IconMenu2 />
            </div>
          </div>
        </div>

        <div
          className={`fixed top-0 right-0 left-0 bottom-0 overflow-x-hidden overlow-y-scroll bg-zinc-900 text-white p-[30px] ${showDrawer ? 'block' : 'hidden'}`}
          style={{ zIndex: 5 }}
        >
          <div className='fixed top-0 right-0 p-[15px] cursor-pointer' onClick={() => setShowDrawer(false)}>
            <IconX />
          </div>
          <div className='h-[30px]'></div>
          <Link to='/' className="text-2xl font-display hover:underline cursor-pointer underline">Shardul Nalegave</Link>
          <div className='h-[20px]'></div>
          <Link to='/about' className='font-mono hover:underline' onClick={() => setShowDrawer(false)}>- About</Link>
          <br />
          <Link to='/posts' className='font-mono hover:underline' onClick={() => setShowDrawer(false)}>- Posts</Link>
          <br />
          <div className='h-[15px]'></div>
          <div className='border-dashed border-zinc-100 border-t-[1px]'></div>
          <div className='h-[15px]'></div>
          <a href="https://github.com/ShardulNalegave" target='_blank' rel="noopener noreferrer" className='font-mono hover:underline' onClick={() => setShowDrawer(false)}>- GitHub</a>
          <br />
          <a href="https://www.linkedin.com/in/shardul-nalegave/" target='_blank' rel="noopener noreferrer" className='font-mono hover:underline' onClick={() => setShowDrawer(false)}>- LinkedIn</a>
          <br />
          <a href="https://twitter.com/ShardulNalegave" target='_blank' rel="noopener noreferrer" className='font-mono hover:underline' onClick={() => setShowDrawer(false)}>- Twitter</a>
        </div>
      </div>
    </>
  );
}