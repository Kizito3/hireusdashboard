import { useState, useEffect } from 'react';
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
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import TableSkeleton from '@/skeletons/TableSkeleton';

export function TableData() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pr-12 font-body md:pr-12 px-12 mb-14">
      <div className="mt-[70px] mb-10">
        <h1 className="font-bold text-[24px] text-[#230740]">Shipments</h1>
      </div>
      <Table className="border border-gray-300 font-semibold">
        <TableHeader className="w-full bg-[#72459f] text-white border-gray-300">
          <TableRow className="border-b border-gray-300">
            <TableHead className="w-[100px]">Vendor</TableHead>
            <TableHead>Rider</TableHead>
            <TableHead>Pickup</TableHead>
            <TableHead>Drop-off</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead className="text-left py-6">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading
            ? Array.from({ length: 7 }).map((_, i) => (
                <TableSkeleton key={i} />
              ))
            : invoices.map((invoice) => (
                <TableRow key={invoice.vendor} className="border-b border-gray-300">
                  <TableCell className="font-medium w-[250px] border-r border-gray-300 whitespace-nowrap">
                    <div className="flex items-center gap-2 md:w-[200px] w-[200px]">
                      <img src={avatarF} alt="" /> {invoice.vendor}
                    </div>
                  </TableCell>
                  <TableCell className="border-r border-gray-300 whitespace-nowrap md:w-[200px] w-[300px]">
                    <div className="flex items-center md:gap-2 md:w-[200px] w-[200px]">
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
                        <div className={`${invoice.border} ${invoice.textColor} py-2 rounded-full`}>
                          {invoice.Status}
                        </div>
                      </div>
                      <div>
                        <Link to={invoice.to}><FaAngleRight /></Link>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
        <TableFooter className="border-t border-gray-300">
          <TableRow>
            <TableCell colSpan={3}></TableCell>
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
