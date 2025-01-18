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
import { useEffect, useState } from "react";
import TableSkeleton from "@/skeletons/TableSkeleton";

export function ShipmentTable() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className=" font-body mb-14">
      <Table className="border border-r border-gray-300">
        <TableHeader className="w-full py-10 border border-gray-300 uppercase font-bold text-[17px]">
          <TableRow className="border-b border-gray-300">
            <TableHead className="w-[100px] border border-gray-300 text-black font-bold">
              Vendor
            </TableHead>
            <TableHead className="border border-gray-300 text-black font-bold">
              Rider
            </TableHead>
            <TableHead className="border border-gray-300 text-black font-bold">
              Pickup
            </TableHead>
            <TableHead className="border border-gray-300 text-black font-bold">
              Drop-off
            </TableHead>
            <TableHead className="border border-gray-300 text-black font-bold">
              Date
            </TableHead>
            <TableHead className="border border-gray-300 py-6 text-black font-bold">
              Time
            </TableHead>
            <TableHead className="text-left text-black font-bold">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading
            ? Array.from({ length: 7 }).map((_, i) => <TableSkeleton key={i} />)
            : invoices.map((invoice) => (
                <TableRow
                  key={invoice.id}
                  className="border-b border-gray-300 text-[16px]"
                >
                  <TableCell className="font-medium w-[200px] border-r border-gray-300 whitespace-nowrap ">
                    <div className="flex items-center gap-2 md:w-[200px] w-[200px]">
                      <img src={avatarF} alt="" /> {invoice.vendor}
                    </div>
                  </TableCell>
                  <TableCell className="border-r border-gray-300 whitespace-nowrap w-[200px]">
                    <div className="flex items-center gap-2 md:w-[200px] w-[200px]">
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
                  <TableCell className="text-left border-r border-gray-300 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="md:w-[150px] w-[200px] text-center">
                        <div
                          className={`${invoice.border} ${invoice.textColor} py-2 rounded-full`}
                        >
                          {invoice.Status}
                        </div>
                      </div>
                      <div></div>
                    </div>
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
