import { Outlet } from 'react-router';
import Header from '@/components/Header';

const DefaultLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="h-[calc(100vh-60px)] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
