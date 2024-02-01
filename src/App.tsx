import { Outlet } from 'react-router-dom';
import Sidebar from './components/sidebar';

export default function App() {
  return (
    <div className='h-screen w-screen overflow-y-hidden flex'>
      <div className="flex-non">
        <Sidebar />
      </div>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}
