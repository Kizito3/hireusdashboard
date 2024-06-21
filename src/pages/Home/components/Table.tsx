import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../@/components/ui/table";
import avatarF from "/images/avatarF.png";
import { invoices } from "@/Data/Data";
import avatarM from "/images/avatarM.png";
import { PaginationDemo } from "./Pagination";

export function TableData() {
  return (
    <div className="pr-12 font-body md:pr-12 px-12 mb-14">
      <div className="mt-[70px] mb-10">
        <h1 className="font-bold text-[24px] text-[#230740]">Shipments</h1>
      </div>
      <Table className="border border-gray-300">
        <TableHeader className="w-full bg-[#72459f] text-white border-gray-300 ">
          <TableRow className="border-b border-gray-300">
            <TableHead className="w-[100px] ">Vendor</TableHead>
            <TableHead className="">Rider</TableHead>
            <TableHead className="">Pickup</TableHead>
            <TableHead className="">Drop-off</TableHead>
            <TableHead className="">Date</TableHead>
            <TableHead className="">Time</TableHead>
            <TableHead className="text-left py-6">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.vendor} className="border-b border-gray-300">
              <TableCell className="font-medium w-[200px] border-r border-gray-300 whitespace-nowrap ">
                <div className="flex items-center gap-2">
                  <img src={avatarF} alt="" /> {invoice.vendor}
                </div>
              </TableCell>
              <TableCell className="border-r border-gray-300 whitespace-nowrap w-[200px]">
                <div className="flex items-center gap-2">
                  <img src={avatarM} alt="" />
                  {invoice.riders}
                </div>
              </TableCell>
              <TableCell className="border-r border-gray-300 whitespace-nowrap">
                {invoice.pickup}
              </TableCell>
              <TableCell className="border-r border-gray-300 whitespace-nowrap">
                {invoice.dropoff}
              </TableCell>
              <TableCell className="text-left border-r border-gray-300 whitespace-nowrap">
                {invoice.date}
              </TableCell>
              <TableCell className="text-left border-r border-gray-300 whitespace-nowrap">
                {invoice.time}
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
