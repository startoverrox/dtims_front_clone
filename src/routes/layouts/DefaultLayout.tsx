import { Outlet } from 'react-router';
import Header from '@/components/Header';

const DefaultLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
