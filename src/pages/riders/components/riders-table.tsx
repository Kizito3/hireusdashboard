import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../@/components/ui/table";
import { riders } from "@/Data/Data";
import avatarM from "/images/avatarM.png";
import { PaginationDemo } from "@/pages/Home/components/Pagination";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import TableSkeleton from "@/skeletons/TableSkeleton";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

export function RidersTable() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(()=>{
      setLoading(false);
    }, 2000)
    return () => clearTimeout(timer);
  },[])

  return (
    <div className="font-body md:px-10 px-4 mb-14 mt-5">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <div className="md:mt-[70px] md:mb-10">
          <h1 className="font-bold text-[24px] text-[#230740]">
            Total Riders (200)
          </h1>
        </div>

        <div className="flex items-center gap-4 mt-5">
          <div className="flex items-center gap-1">
            <CiSearch className="font-bold text-xl" size={25}/>
            <span className="font-bold text-xl">Search</span>
          </div>
          <div>
            <Link to="/dashboard/rider-registration">
            <span className="text-tertiary font-bold text-xl">+ Add Rider</span>
            </Link>
          </div>
        </div>
      </div>

      <Table className="border border-gray-300 font-medium w-full">
        <TableHeader className="w-full bg-[#72459f] text-white border-gray-300 uppercase text-[17px]">
          <TableRow className="border-b border-gray-300">
            <TableHead className="w-[100px] text- font-extrabold">
              Name
            </TableHead>
            <TableHead className="text-white font-bold">Phone</TableHead>
            <TableHead className="text-white font-bold">Email</TableHead>
            <TableHead className="text-white font-bold">
              Location
            </TableHead>
            <TableHead className="text-white font-bold">
              Shipment
            </TableHead>
            <TableHead className="text-white font-bold">Payment</TableHead>
            <TableHead className="text-left py-6 text-white font-bold">
              Status
            </TableHead>
            <TableHead className="text-left text-white font-bold">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {loading
            ? Array.from({ length: 7 }).map((_, i) => <TableSkeleton key={i} />)
            : riders.map((rider) => (
                <TableRow
                  key={rider.name}
                  className="border-b border-gray-300 text-[16px]"
                >
                  <TableCell className="font-medium w-[200px] border-r border-gray-300 whitespace-nowrap ">
                    <div className="flex items-center gap-2 md:w-[200px] w-[200px]">
                      <img src={avatarM} alt="" /> {rider.name}
                    </div>
                  </TableCell>
                  <TableCell className="border-r border-gray-300 whitespace-nowrap w-[200px]">
                    <div className="flex items-center gap-2">
                      {rider.number}
                    </div>
                  </TableCell>
                  <TableCell className="border-r border-gray-300 whitespace-nowrap md:w-[200px] w-[200px]">
                    {rider.email}
                  </TableCell>
                  <TableCell className="border-r border-gray-300 whitespace-nowrap">
                    {rider.location}
                  </TableCell>
                  <TableCell className="text-left border-r border-gray-300 whitespace-nowrap">
                    {rider.shipment}
                  </TableCell>
                  <TableCell
                    className={`${rider.color} text-left border-r border-gray-300 whitespace-nowrap`}
                  >
                    {rider.payment}
                  </TableCell>
                  <TableCell
                    className={`border-r border-gray-300 whitespace-nowrap text-center`}
                  >
                    <div className="md:w-[150px] w-[200px] text-center">
                      <div
                        className={`border border-[#6ada7d] text-[#48b55b] py-2 rounded-full`}
                      >
                        {rider.active}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Dropdown />
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
