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

export function RidersTable() {
  return (
    <div className="pr-12 font-body md:pr-12 px-12 mb-14 mt-5">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <div className="md:mt-[70px] md:mb-10">
          <h1 className="font-bold text-[24px] text-[#230740]">Total Riders (200)</h1>
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
      <Table className="border border-gray-300 font-medium w-full">
        <TableHeader className="w-full bg-[#72459f] text-white border-gray-300 ">
          <TableRow className="border-b border-gray-300">
            <TableHead className="w-[100px] ">Name</TableHead>
            <TableHead className="">Phone</TableHead>
            <TableHead className="">Email</TableHead>
            <TableHead className="">Location</TableHead>
            <TableHead className="">Shipment</TableHead>
            <TableHead className="">Payment</TableHead>
            <TableHead className="text-left py-6">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {riders.map((rider) => (
            <TableRow key={rider.name} className="border-b border-gray-300">
              <TableCell className="font-medium w-[200px] border-r border-gray-300 whitespace-nowrap ">
                <div className="flex items-center gap-2">
                  <img src={avatarM} alt="" /> {rider.name}
                </div>
              </TableCell>
              <TableCell className="border-r border-gray-300 whitespace-nowrap w-[200px]">
                <div className="flex items-center gap-2">{rider.number}</div>
              </TableCell>
              <TableCell className="border-r border-gray-300 whitespace-nowrap">
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