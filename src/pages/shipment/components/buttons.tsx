import { CiSearch } from "react-icons/ci";

export default function Buttons() {
  return (
    <div className="mb-6">
       <div className="flex justify-between flex-wrap md:gap-0 gap-4">
       <div className="flex md:gap-10 gap-4 flex-wrap">
            <button className="w-[70px] bg-tertiary h-[40px] rounded-full text-white">All</button>
            <button className="w-[120px] border border-[#e9deff] h-[40px] rounded-full text-[#9876ba]">Delivered</button>
            <button className="w-[120px] border border-[#e9deff] h-[40px] rounded-full text-[#9876ba]">Pending</button>
            <button className="w-[120px] border border-[#e9deff] h-[40px] rounded-full text-[#9876ba]">Ongoing</button>
            <button className="w-[120px] border border-[#e9deff] h-[40px] rounded-full text-[#9876ba]">Accepted</button>
            <button className="w-[120px] border border-[#e9deff] h-[40px] rounded-full text-[#9876ba]">Rejected</button>
        </div>

        <div className="flex items-center gap-4">
        <CiSearch /><span>Search</span>
        </div>
       </div>
    </div>
  )
}