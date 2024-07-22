import { Outlet } from "react-router-dom";

import { Logo } from "@/components/shared/logo";

export const AuthLayout = () => {
  return (
    <div className="w-full min-h-screen flex flex-row">
      <div
        className="relative flex-[0.8] hidden md:block shrink-0 w-[53%] bg-no-repeat bg-center bg-cover bg-black"
        style={{ backgroundImage: `url(/images/login.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-950/30 to-purple-900/20" />
      </div>
      <div className="">
       <div className="py-10 px-6 sm:px-12">
        <div className="flex items-center justify-center sm:justify-end p-8">
          <Logo />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
    </div>
  );
};
