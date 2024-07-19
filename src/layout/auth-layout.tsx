import { Outlet } from "react-router-dom";

import { Logo } from "@/components/shared/logo";

export const AuthLayout = () => {
  return (
    <div className="w-full min-h-[80%] flex justify-center items-center">
      <div className=" py-10 px-6 sm:px-12">
        <div className="flex items-center justify-center sm:justify-end p-8">
          <Logo />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
