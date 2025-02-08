import { NavItems } from "../Data/Data";
import { Link } from "react-router-dom";
import logo from "/images/logo.png";
import { useLogout } from "@/library/hooks/use-logout";
// import { useLogout } from "../hooks/useLogout"; // Import useLogout

type Active = {
  setActiveNav: (navName: string) => void;
};

export default function SideBar({ setActiveNav }: Active) {
  const { signOut } = useLogout(); // Get signOut function

  return (
    <div className="px-8 font-[500]">
      <div>
        <img src={logo} alt="hireUs Logistics logo" />
      </div>
      <div className="flex flex-col items-center justify-center mt-14">
        <div className="space-y-12">
          {NavItems.map((nav, index) => {
            const Icon = nav.icon;
            return (
              <ul
                key={index}
                className="flex py-2 items-center space-x-4 cursor-pointer"
                onClick={() => {
                  setActiveNav(nav.navName);
                  if (nav.navName === "Log Out") {
                    signOut(); // Call logout function
                  }
                }}
              >
                <li className="text-2xl font-extrabold">
                  <Icon />
                </li>
                <li>
                  {nav.navName === "Logout" ? (
                    <button type="button" className="focus:outline-none">
                      {nav.navName}
                    </button>
                  ) : (
                    <Link to={nav.link}>{nav.navName}</Link>
                  )}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}
