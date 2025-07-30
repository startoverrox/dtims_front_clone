import { Outlet } from "react-router";
import Header from "@/components/Header";

const DefaultLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="h-[calc(100vh-60px)] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
