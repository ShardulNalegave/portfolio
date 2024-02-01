import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='h-screen bg-zinc-900 text-white flex flex-col py-[30px] pl-[30px] pr-[75px]'>
      <div className="grow"></div>
      <div className="flex-none">
        <Link to='/' className="text-5xl font-display hover:underline cursor-pointer">Shardul<br />Nalegave</Link>
      </div>
    </div>
  );
}