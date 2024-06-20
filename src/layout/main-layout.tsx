import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

export default function DashboardLayout() {
  return (
    <div>
    <div className="grid grid-cols-12">
        <div className="h-screen col-span-3 inset-y-0 font-body py-8 overflow-x-hidden fixed bg-tertiary text-white">
            <SideBar />
        </div>
        <div className="h-16 font-body bg-white fixed z-50 top-0 left-[15.7rem] w-11/12 col-span-9 shadow-lg pr-40">
            <TopBar />
        </div>
    </div>
    <div className="md:pl-72 pt-[64px] h-full">
      <Outlet />
    </div>
    </div>
  );
}
