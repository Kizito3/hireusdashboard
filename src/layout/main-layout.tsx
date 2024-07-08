import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Collapse the sidebar when the route changes
    setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#f9fffc]">
      {/* TopBar */}
      <div className="h-16 font-body bg-white fixed z-30 top-0 left-0 w-full shadow-lg pr-4 md:pr-20 lg:pr-40 flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          {/* <div className="pl-2">Logo</div> */}
          {/* Hamburger/Close Icon for Mobile and Tablets */}
          <div className="2xl:hidden pl-2 relative">
            <button onClick={toggleSidebar} className="text-white bg-tertiary p-2 rounded">
              {isSidebarOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        <TopBar />
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300 ease-in-out lg:col-span-3 lg:h-screen lg:inset-y-0 font-body py-8 overflow-x-hidden bg-tertiary text-white`}>
        <SideBar />
      </div>

      {/* Close Icon - Only shown when sidebar is open on mobile/tablet */}
      {isSidebarOpen && (
        <button onClick={toggleSidebar} className="fixed z-50 top-4 left-52 text-white bg-tertiary p-2 rounded lg:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      )}

      {/* Main Content */}
      <div className="lg:pl-64 pt-[15px] h-full w-full mt-16 lg:mt-0">
        <Outlet />
      </div>

      {/* Overlay for Sidebar on Mobile and Tablets */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-30 2xl:hidden" onClick={toggleSidebar}></div>
      )}
    </div>
  );
}
