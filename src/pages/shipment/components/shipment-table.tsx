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
import { PaginationDemo } from "@/pages/Home/components/Pagination";
  
  export function ShipmentTable() {
    return (
      <div className=" font-body mb-14">
        
        <Table className="border border-r border-gray-300">
          <TableHeader className="w-full py-10 border border-gray-300 ">
            <TableRow className="border-b border-gray-300">
              <TableHead className="w-[100px] border border-gray-300">Vendor</TableHead>
              <TableHead className="border border-gray-300">Rider</TableHead>
              <TableHead className="border border-gray-300">Pickup</TableHead>
              <TableHead className="border border-gray-300">Drop-off</TableHead>
              <TableHead className="border border-gray-300">Date</TableHead>
              <TableHead className="border border-gray-300 py-6">Time</TableHead>
              <TableHead className="text-left">Status</TableHead>
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
  