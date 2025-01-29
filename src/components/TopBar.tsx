import { FaBell } from "react-icons/fa6";
import MyAvatar from "./Avatar";

interface ActiveNavProps {
  ActiveNav: string;
}
export default function TopBar({ ActiveNav }: ActiveNavProps) {
  return (
    <div className="">
      <div className="grid grid-cols-3 md:gap-7 items-center place-items-center pl-4 lg:pl-60">
        <div>
          <h1 className="text-tertiary font-semibold">{ActiveNav}</h1>
        </div>
        <div className="hidden md:block">
          <input
            type="search"
            placeholder="search"
            className="2xl:w-[474px] md:w-[300px] border-[2px] border-[#25436e] h-[37px] rounded-full outline-none px-6 placeholder:text-[#25436e]"
          />
        </div>
        <div className="ml-60">
          <div className="flex md:items-center justify-end gap-10 whitespace-nowrap">
            <div className="relative">
              <FaBell className="text-[#25436e]" size={36} />
              <div className="absolute -top-1 right-0 h-6 w-6 rounded-full flex justify-center items-center bg-[#fd591b]">
                <span className="text-sm text-white flex justify-center items-center">
                  1
                </span>
              </div>
            </div>
            <MyAvatar />
            <div className="font-semibold">
              <h2 className="hidden md:block text-[#25436e]">Hello Sonia</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
