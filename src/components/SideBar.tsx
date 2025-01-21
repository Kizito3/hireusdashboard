import { NavItems } from "../Data/Data";
import { Link } from "react-router-dom";
import logo from "/images/logo.png";
// import { Logo } from "./shared/logo";

type Active = {
  setActiveNav: (navName: string) => void;
};

export default function SideBar({ setActiveNav }: Active) {
  return (
    <div className="px-8 font-[500]">
      <div className="">
        <img src={logo} alt="hireUs Logistics logo" />
        {/* <Logo /> */}
      </div>
      <div className="flex flex-col items-center justify-center mt-14">
        <div className="space-y-12">
          {NavItems.map((nav, index) => {
            const Icon = nav.icon;
            return (
              <ul
                key={index}
                className="flex py-2 items-center space-x-4 cursor-pointer"
                onClick={() => setActiveNav(nav.navName)}
              >
                <li className="text-2xl font-extrabold">
                  <Icon />
                </li>
                <li className="">
                  <Link to={nav.link}>{nav.navName}</Link>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}
