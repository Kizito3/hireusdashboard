import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../@/components/ui/table";

const invoices = [
  {
    vendor: "Gloria Uwana",
    paymentStatus: "Paid",
    dropoff: "10 Ire Akari Estate, Isolo",
    pickup: "2 obiorah close, Isolo",
    date: "01/12/2024",
    time: "3:00pm",
    Status: "Delivered",
  },
  {
    vendor: "Gloria Uwana",
    paymentStatus: "Pending",
    dropoff: "10 Ire Akari Estate, Isolo",
    pickup: "2 obiorah close, Isolo",
    date: "01/12/2024",
    time: "3:00pm",
    Status: "Delivered",
  },
  {
    vendor: "Gloria Uwana",
    paymentStatus: "Unpaid",
    dropoff: "10 Ire Akari Estate, Isolo",
    pickup: "2 obiorah close, Isolo",
    date: "01/12/2024",
    time: "3:00pm",
    Status: "Delivered",
  },
  {
    vendor: "Gloria Uwana",
    paymentStatus: "Paid",
    dropoff: "10 Ire Akari Estate, Isolo",
    pickup: "2 obiorah close, Isolo",
    date: "01/12/2024",
    time: "3:00pm",
    Status: "Delivered",
  },
  {
    vendor: "Gloria Uwana",
    paymentStatus: "Paid",
    dropoff: "10 Ire Akari Estate, Isolo",
    pickup: "2 obiorah close, Isolo",
    date: "01/12/2024",
    time: "3:00pm",
    Status: "Delivered",
  },
  {
    vendor: "Gloria Uwana",
    paymentStatus: "Pending",
    dropoff: "10 Ire Akari Estate, Isolo",
    pickup: "2 obiorah close, Isolo",
    date: "01/12/2024",
    time: "3:00pm",
    Status: "Delivered",
  },
  {
    vendor: "Gloria Uwana",
    paymentStatus: "Unpaid",
    dropoff: "10 Ire Akari Estate, Isolo",
    pickup: "2 obiorah close, Isolo",
    date: "01/12/2024",
    time: "3:00pm",
    Status: "Delivered",
  },
];

export function TableDemo() {
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
            <TableHead className="text-left">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.vendor} className="border-b border-gray-300">
              <TableCell className="font-medium border-r border-gray-300 whitespace-nowrap">
                {invoice.vendor}
              </TableCell>
              <TableCell className="border-r border-gray-300 whitespace-nowrap">
                {invoice.paymentStatus}
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
    </div>
  );
}
