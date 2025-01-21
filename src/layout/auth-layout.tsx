import { Logo } from "@/components/shared/logo";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">
      <div
        className="relative hidden md:block md:w-[53%] w-full bg-no-repeat bg-center bg-cover bg-black"
        style={{ backgroundImage: `url(/images/login.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-950/30 to-purple-900/20" />
      </div>
      <div className="flex justify-center items-center w-full md:w-[47%]">
        <div className="py-10 px-6 md:px-12 w-full">
          <div className="flex items-center justify-center md:justify-end p-8">
            <Logo />
          </div>
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
