import { CiGrid42, CiLock } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IconType } from "react-icons";
import { FaRegFolderClosed, FaBox } from "react-icons/fa6";
import { MdPedalBike, MdGroups, MdDisabledVisible } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

type DataProps = {
  navName: string;
  icon: IconType;
  link: string;
};

export const NavItems: DataProps[] = [
  {
    navName: "Dashboard",
    icon: CiGrid42,
    link: "/dashboard",
  },
  {
    navName: "Shipments",
    icon: FaRegFolderClosed,
    link: "shipment",
  },
  {
    navName: "Riders",
    icon: MdPedalBike,
    link: "riders",
  },
  {
    navName: "Vendors",
    icon: MdGroups,
    link: "vendors",
  },
  {
    navName: "Profile",
    icon: CgProfile,
    link: "vendors-profile",
  },
  {
    navName: "Agents",
    icon: ImProfile,
    link: "agents",
  },
  {
    navName: "Company",
    icon: ImProfile,
    link: "company",
  },
  {
    navName: "Change Password",
    icon: CiLock,
    link: "settings",
  },
  {
    navName: "Log Out",
    icon: RiLogoutCircleLine,
    link: "logout",
  },
];

export const CardInfo: CardProps[] = [
  {
    total: 8000,
    icon: MdPedalBike,
    info: "Riders",
  },
  {
    total: 500,
    icon: MdGroups,
    info: "Vendors", 
  },
  {
    total: 5000,
    icon: MdGroups,
    info: "Users",
  },
  {
    total: 1000,
    icon: FaBox,
    info: "Shipments",
  },
];

export const invoices: TableProps[] = [
  {
    id:1,
    vendor: "Gloria Uwana",
    riders: "Victor John",
    dropoff: "10 Ire Akari Estate, Isolo",
    pickup: "2 obiorah close, Isolo",
    date: "01/12/2024",
    time: "3:00pm",
    Status: "Delivered",
    border: "border border-[#6ada7d]",
    textColor: "text-[#1ea435]",
    to: "all-shipment",
    link: "vendors-profile",
  },
  {
    id:2,
    vendor: "Gloria Uwana",
    riders: "Victor John",
    dropoff: "10 Ire Akari Estate, Isolo",
    pickup: "2 obiorah close, Isolo",
    date: "01/12/2024",
    time: "3:00pm",
    Status: "Pending",
    border: "border border-[#e8505b]",
    textColor: "text-[#e8505b]",
    to: "all-shipment",
    link: "vendors-profile",
  },
  {
    id:3,
    vendor: "Gloria Uwana",
    riders: "Victor John",
    dropoff: "10 Ire Akari Estate, Isolo",
    pickup: "2 obiorah close, Isolo",
    date: "01/12/2024",
    time: "3:00pm",
    Status: "Ongoing",
    border: "border border-[#a490cc]",
    textColor: "text-[#551b8f]",
    to: "all-shipment",
    link: "vendors-profile",
  },
  {
    id:4,
    vendor: "Gloria Uwana",
    riders: "Victor John",
    dropoff: "10 Ire Akari Estate, Isolo",
    pickup: "2 obiorah close, Isolo",
    date: "01/12/2024",
    time: "3:00pm",
    Status: "Cancelled",
    border: "border border-[#07c3ff]",
    textColor: "text-[#07c3ff]",
    to: "all-shipment",
    link: "vendors-profile",
  },
  {
    id:5,
    vendor: "Gloria Uwana",
    riders: "Victor John",
    dropoff: "10 Ire Akari Estate, Isolo",
    pickup: "2 obiorah close, Isolo",
    date: "01/12/2024",
    time: "3:00pm",
    Status: "Accepted",
    border: "border border-[#e6ba8f]",
    textColor: "text-[#ff9933]",
    to: "all-shipment",
    link: "vendors-profile",
  },
  {
    id:6,
    vendor: "Gloria Uwana",
    riders: "Victor John",
    dropoff: "10 Ire Akari Estate, Isolo",
    pickup: "2 obiorah close, Isolo",
    date: "01/12/2024",
    time: "3:00pm",
    Status: "Delivered",
    border: "border border-[#6ada7d]",
    textColor: "text-[#1ea435]",
    to: "all-shipment",
    link: "vendors-profile",
  },
  {
    id:7,
    vendor: "Gloria Uwana",
    riders: "Victor John",
    dropoff: "10 Ire Akari Estate, Isolo",
    pickup: "2 obiorah close, Isolo",
    date: "01/12/2024",
    time: "3:00pm",
    Status: "Pending",
    border: "border border-[#e8505b]",
    textColor: "text-[#e8505b]",
    to: "all-shipment",
    link: "vendors-profile",
  },
  {
    id:8,
    vendor: "Gloria Uwana",
    riders: "Victor John",
    dropoff: "10 Ire Akari Estate, Isolo",
    pickup: "2 obiorah close, Isolo",
    date: "01/12/2024",
    time: "3:00pm",
    Status: "Ongoing",
    border: "border border-[#a490cc]",
    textColor: "text-[#551b8f]",
    to: "all-shipment",
    link: "vendors-profile",
  },
];

export const riders: RidersProps[] = [
  {
    id:1,
    name: "Victor john",
    number: +2348164361932,
    email: "johnvictor@gmail.com",
    location: "Lagos",
    shipment: 100,
    payment: "Pending",
    color: "text-[#e8505b]",
    active: "Active",
  },
  {
    id:2,
    name: "Victor john",
    number: +2348164361932,
    email: "johnvictor@gmail.com",
    location: "Lagos",
    shipment: 100,
    payment: "Paid",
    color: "text-[#1ea435]",
    active: "Active",
  },
  {
    id:3,
    name: "Victor john",
    number: +2348164361932,
    email: "johnvictor@gmail.com",
    location: "Lagos",
    shipment: 100,
    payment: "Pending",
    color: "text-[#e8505b]",
    active: "Active",
  },
  {
    id:4,
    name: "Victor john",
    number: +2348164361932,
    email: "johnvictor@gmail.com",
    location: "Lagos",
    shipment: 100,
    payment: "Paid",
    color: "text-[#1ea435]",
    active: "Active",
  },
  {
    id:5,
    name: "Victor john",
    number: +2348164361932,
    email: "johnvictor@gmail.com",
    location: "Lagos",
    shipment: 100,
    payment: "Paid",
    color: "text-[#1ea435]",
    active: "Active",
  },
  {
    id:6,
    name: "Victor john",
    number: +2348164361932,
    email: "johnvictor@gmail.com",
    location: "Lagos",
    shipment: 100,
    payment: "Pending",
    color: "text-[#e8505b]",
    active: "Active",
  },
  {
    id:7,
    name: "Victor john",
    number: +2348164361932,
    email: "johnvictor@gmail.com",
    location: "Lagos",
    shipment: 100,
    payment: "Paid",
    color: "text-[#1ea435]",
    active: "Active",
  },
  {
    id:8,
    name: "Victor john",
    number: +2348164361932,
    email: "johnvictor@gmail.com",
    location: "Lagos",
    shipment: 100,
    payment: "Pending",
    color: "text-[#e8505b]",
    active: "Active",
  },
  {
    id:9,
    name: "Victor john",
    number: +2348164361932,
    email: "johnvictor@gmail.com",
    location: "Lagos",
    shipment: 100,
    payment: "Pending",
    color: "text-[#e8505b]",
    active: "Active",
  },
  {
    id:10,
    name: "Victor john",
    number: +2348164361932,
    email: "johnvictor@gmail.com",
    location: "Lagos",
    shipment: 100,
    payment: "Paid",
    color: "text-[#1ea435]",
    active: "Active",
  },
  {
    id:11,
    name: "Victor john",
    number: +2348164361932,
    email: "johnvictor@gmail.com",
    location: "Lagos",
    shipment: 100,
    payment: "Pending",
    color: "text-[#e8505b]",
    active: "Active",
  },
];

export const vendors: VendorProps[] = [
  {
    id:1,
    name: "Gloria Uwana",
    phone: +2348164361932,
    email: "gloriauwana@gmail.com",
    location: "Lagos",
    plan: "Renew",
    shipment: 56,
  },
  {
    id:2,
    name: "Gloria Uwana",
    phone: +2348164361932,
    email: "gloriauwana@gmail.com",
    location: "Lagos",
    plan: "Renew",
    shipment: 56,
  },
  {
    id:3,
    name: "Gloria Uwana",
    phone: +2348164361932,
    email: "gloriauwana@gmail.com",
    location: "Lagos",
    plan: "Renew",
    shipment: 56,
  },
  {
    id:4,
    name: "Gloria Uwana",
    phone: +2348164361932,
    email: "gloriauwana@gmail.com",
    location: "Lagos",
    plan: "Renew",
    shipment: 56,
  },
  {
    id:5,
    name: "Gloria Uwana",
    phone: +2348164361932,
    email: "gloriauwana@gmail.com",
    location: "Lagos",
    plan: "Renew",
    shipment: 56,
  },
];

export const allshipment: shipmentProps[] = [
  {
    id: 1,
    name: "Gloria Uwana",
    pickup: "2 obiorah close, Isolo",
    dropoff: "10 Ire Akari Estate, Isolo",
    date: "01/12/2024",
    time: "3:00pm",
    status: "Accepted",
    border: "border border-[#e6ba8f]",
    textColor: "text-[#ff9933]",
    to: "shipment-details",
  },

  {
    id: 2,
    name: "Gloria Uwana",
    pickup: "2 obiorah close, Isolo",
    dropoff: "10 Ire Akari Estate, Isolo",
    date: "01/12/2024",
    time: "3:00pm",
    status: "Ongoing",
    border: "border border-[#a490cc]",
    textColor: "text-[#551b8f]",
    to: "shipment-details",
  },

  {
    id: 3,
    name: "Gloria Uwana",
    pickup: "2 obiorah close, Isolo",
    dropoff: "10 Ire Akari Estate, Isolo",
    date: "01/12/2024",
    time: "3:00pm",
    status: "Pending",
    border: "border border-[#e8505b]",
    textColor: "text-[#e8505b]",
    to: "shipment-details",
  },

  {
    id: 4,
    name: "Gloria Uwana",
    pickup: "2 obiorah close, Isolo",
    dropoff: "10 Ire Akari Estate, Isolo",
    date: "01/12/2024",
    time: "3:00pm",
    status: "Cancelled",
    border: "border border-[#07c3ff]",
    textColor: "text-[#07c3ff]",
    to: "shipment-details",
  },
  {
    id: 5,
    name: "Gloria Uwana",
    pickup: "2 obiorah close, Isolo",
    dropoff: "10 Ire Akari Estate, Isolo",
    date: "01/12/2024",
    time: "3:00pm",
    status: "Delivered",
    border: "border border-[#6ada7d]",
    textColor: "text-[#1ea435]",
    to: "shipment-details",
  },
];

export const RiderAccount: RidersAccountTypes[] = [
  {
    total: 500000,
    text: "Total Earnings",
    icon: FaRegCreditCard,
  },

  {
    total: 100000,
    text: "Total of HireUs %",
    icon: MdDisabledVisible,
  },

  {
    total: 1000,
    text: "Shipments",
    icon: FaBox,
  },
];

export const RiderEarnings: RiderAccountProps[] = [
  {
    id: 1,
    vendor: "John Victor",
    date: "01/12/2024",
    earnings: 1500,
    percentage: 500,
    time: "3:00pm",
  },
  {
    id: 2,
    vendor: "John Victor",
    date: "01/12/2024",
    earnings: 1500,
    percentage: 500,
    time: "3:00pm",
  },
  {
    id:3 ,
    vendor: "John Victor",
    date: "01/12/2024",
    earnings: 1500,
    percentage: 500,
    time: "3:00pm",
  },
  {
    id: 4,
    vendor: "John Victor",
    date: "01/12/2024",
    earnings: 1500,
    percentage: 500,
    time: "3:00pm",
  },
  {
    id:5 ,
    vendor: "John Victor",
    date: "01/12/2024",
    earnings: 1500,
    percentage: 500,
    time: "3:00pm",
  },
];
