import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../@/components/ui/table";
import { vendors } from "@/Data/Data";
import avatarM from "/images/avatarM.png";
import { FaRegTrashAlt } from "react-icons/fa";
import { PaginationDemo } from "@/pages/Home/components/Pagination";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import TableSkeleton from "@/skeletons/TableSkeleton";

export function CompanyTable() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-body md:px-10 px-4 mt-6">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <div className="md:mt-[70px] md:mb-10">
          <h1 className="font-bold text-[24px] text-[#230740]">
            Total Agents Registered (50)
          </h1>
        </div>

        <div className="flex items-center gap-4 mt-5">
          <div>
            <span className="text-tertiary font-medium">
              + Add agent
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaRegTrashAlt className="text-tertiary" />
            <span className="text-[#8770b7]">Delete</span>
          </div>
          <div className="flex items-center gap-2">
            <CiSearch />
            <span>Search</span>
          </div>
        </div>
      </div>
      <Table className="border border-gray-300 font-medium w-full">
        <TableHeader className="w-full bg-[#72459f] text-white border-gray-300 font-bold text-[17px] uppercase">
          <TableRow className="border-b border-gray-300">
            <TableHead className="w-[100px] text-white font-bold">
              Name
            </TableHead>
            <TableHead className=" text-white font-bold">Phone</TableHead>
            <TableHead className=" text-white font-bold">Email</TableHead>
            <TableHead className=" text-white font-bold">Location</TableHead>
            <TableHead className=" text-white font-bold">Shipment</TableHead>
            <TableHead className="py-6 text-white font-bold">Payment</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading
            ? Array.from({ length: 5 }).map((_, i) => <TableSkeleton key={i} />)
            : vendors.map((vendor) => (
                <TableRow
                  key={vendor.name}
                  className="border-b border-gray-300 font-bold text-[16px]"
                >
                  <TableCell className=" w-[200px] border-r border-gray-300 whitespace-nowrap ">
                    <div className="flex items-center gap-2 md:w-[200px] w-[200px]">
                      <img src={avatarM} alt="" /> {vendor.name}
                    </div>
                  </TableCell>
                  <TableCell className="border-r border-gray-300 whitespace-nowrap w-[200px]">
                    <div className="flex items-center gap-2">
                      {vendor.phone}
                    </div>
                  </TableCell>
                  <TableCell className="border-r border-gray-300 whitespace-nowrap">
                    {vendor.email}
                  </TableCell>
                  <TableCell className="border-r border-gray-300 whitespace-nowrap">
                    {vendor.location}
                  </TableCell>
                  <TableCell className="text-left border-r border-gray-300 whitespace-nowrap">
                    {vendor.plan}
                  </TableCell>
                  <TableCell
                    className={`text-left border-r border-gray-300 whitespace-nowrap`}
                  >
                    {vendor.shipment}
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
        <TableFooter className="border-t border-gray-300">
          <TableRow>
            <TableCell colSpan={3} className=""></TableCell>
            <TableCell className="text-right"></TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <div className="mt-14">
        <PaginationDemo />
      </div>
    </div>
  );
}
