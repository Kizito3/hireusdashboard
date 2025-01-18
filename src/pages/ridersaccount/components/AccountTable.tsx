import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../@/components/ui/table";
import { RiderEarnings } from "@/Data/Data";
import avatarM from "/images/avatarM.png";
import { PaginationDemo } from "@/pages/Home/components/Pagination";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import AccountSkeleton from "@/skeletons/AccountSkeleton";

export function AccountEarnings() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-body md:px-10 px-4 mb-14 mt-5">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <div className="md:mt-[70px] md:mb-10">
          <h1 className="font-bold text-[24px] text-[#230740]">
            Earnings History
          </h1>
        </div>

        <div className="flex items-center gap-4 mt-5">
          <div className="flex items-center gap-4">
            <CiSearch />
            <span>Search</span>
          </div>
          <div>
            <span className="text-tertiary font-medium">+ Add Rider</span>
          </div>
        </div>
      </div>

      <Table className="border border-gray-300 font-bold w-full">
        <TableHeader className="w-full bg-[#998bb6] border-gray-300 uppercase text-[17px]">
          <TableRow className="border-b border-gray-300 py-5">
            <TableHead className="py-8 text-white font-bold">Vendor</TableHead>
            <TableHead className="text-white font-bold">Date</TableHead>
            <TableHead className="text-white font-bold">Earnings</TableHead>
            <TableHead className="text-white font-bold">HireUs %</TableHead>
            <TableHead className="text-white font-bold">Time</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {loading
            ? Array.from({ length: 5 }).map((_, i) => (
                <AccountSkeleton key={i} />
              ))
            : RiderEarnings.map((rider) => (
                <TableRow
                  key={rider.id}
                  className="border-b border-gray-300 text-[16px]"
                >
                  <TableCell className="font-medium w-[200px] border-r border-gray-300 whitespace-nowrap ">
                    <div className="flex items-center gap-2 sm:w-[200px] w-[200px]">
                      <img src={avatarM} alt="" /> {rider.vendor}
                    </div>
                  </TableCell>
                  <TableCell className="border-r border-gray-300 whitespace-nowrap w-[200px]">
                    <div className="flex items-center gap-2">{rider.date}</div>
                  </TableCell>
                  <TableCell className="border-r border-gray-300 whitespace-nowrap md:w-[200px] w-[200px]">
                    {rider.earnings}
                  </TableCell>
                  <TableCell className="border-r border-gray-300 whitespace-nowrap">
                    {rider.percentage}
                  </TableCell>
                  <TableCell className="border-r border-gray-300 whitespace-nowrap">
                    {rider.time}
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>

        <TableFooter className="border-t border-gray-300">
          <TableRow>
            <TableCell colSpan={8} className=""></TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <div className="mt-14">
        <PaginationDemo />
      </div>
    </div>
  );
}
