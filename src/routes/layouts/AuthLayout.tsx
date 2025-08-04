import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
