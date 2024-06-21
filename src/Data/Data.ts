import { CiGrid42, CiLock } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IconType } from "react-icons";
import { FaRegFolderClosed, FaBox } from "react-icons/fa6";
import { MdPedalBike, MdGroups } from "react-icons/md";
import { CardProps } from "../types/card-types";
import { TableProps } from "@/types/table-types";
import { RidersProps } from "@/types/rider-types";
import { VendorProps } from "@/types/vendor-types";

type DataProps = {
    navName: string,
    icon: IconType,
    link: string,
}

export const NavItems: DataProps[] = [
    {
        navName: "Dashboard",
        icon: CiGrid42,
        link: "/",
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
        link: "profile",
    },
    {
        navName: "Change Password",
        icon: CiLock,
        link: "change-password",
    },
    {
        navName: "Log Out",
        icon:RiLogoutCircleLine ,
        link: "logout",
    }
]


export const CardInfo: CardProps[] = [
    {
        total: 8000,
        icon: MdPedalBike,
        info: "Riders",
        bgColor: "bg-riders-200",
        iconBgColor: "text-riders-400",
        textColor: "text-riders-500",
        smallText: "text-riders-300"
    },
    {
        total: 500,
        icon: MdGroups,
        info: "Vendors",
        bgColor: "bg-vendors-200",
        iconBgColor: "text-vendors-400",
        textColor: "text-vendors-500",
        smallText: "text-vendors-300"
    },
    {
        total: 5000,
        icon: MdGroups,
        info: "Users",
        bgColor: "bg-users-200",
        iconBgColor: "text-users-400",
        textColor: "text-users-500",
        smallText: "text-users-300"
    },
    {
        total: 1000,
        icon: FaBox,
        info: "Shipments",
        bgColor: "bg-shipments-200",
        iconBgColor: "text-shipments-400",
        textColor: "text-shipments-500",
        smallText: "text-shipments-300"
    },
]

export const invoices: TableProps[] = [
    {
        vendor: "Gloria Uwana",
        riders: "Victor John",
        dropoff: "10 Ire Akari Estate, Isolo",
        pickup: "2 obiorah close, Isolo",
        date: "01/12/2024",
        time: "3:00pm",
        Status: "Delivered",
      },
      {
        vendor: "Gloria Uwana",
        riders: "Victor John",
        dropoff: "10 Ire Akari Estate, Isolo",
        pickup: "2 obiorah close, Isolo",
        date: "01/12/2024",
        time: "3:00pm",
        Status: "Delivered",
      },
      {
        vendor: "Gloria Uwana",
        riders: "Victor John",
        dropoff: "10 Ire Akari Estate, Isolo",
        pickup: "2 obiorah close, Isolo",
        date: "01/12/2024",
        time: "3:00pm",
        Status: "Delivered",
      },
      {
        vendor: "Gloria Uwana",
        riders: "Victor John",
        dropoff: "10 Ire Akari Estate, Isolo",
        pickup: "2 obiorah close, Isolo",
        date: "01/12/2024",
        time: "3:00pm",
        Status: "Delivered",
      },
      {
        vendor: "Gloria Uwana",
        riders: "Victor John",
        dropoff: "10 Ire Akari Estate, Isolo",
        pickup: "2 obiorah close, Isolo",
        date: "01/12/2024",
        time: "3:00pm",
        Status: "Delivered",
      },
      {
        vendor: "Gloria Uwana",
        riders: "Victor John",
        dropoff: "10 Ire Akari Estate, Isolo",
        pickup: "2 obiorah close, Isolo",
        date: "01/12/2024",
        time: "3:00pm",
        Status: "Delivered",
      },
      {
        vendor: "Gloria Uwana",
        riders: "Victor John",
        dropoff: "10 Ire Akari Estate, Isolo",
        pickup: "2 obiorah close, Isolo",
        date: "01/12/2024",
        time: "3:00pm",
        Status: "Delivered",
      },
]


export const riders: RidersProps[]= [
    {
        name: "Victor john",
        number: +2348164361932,
        email: "johnvictor@gmail.com",
        location: "Lagos",
        shipment: 100,
        payment: "Pending",
        color: "text-[#e8505b]"
    },
    {
        name: "Victor john",
        number: +2348164361932,
        email: "johnvictor@gmail.com",
        location: "Lagos",
        shipment: 100,
        payment: "Paid",
        color: "text-[#1ea435]"
    },
    {
        name: "Victor john",
        number: +2348164361932,
        email: "johnvictor@gmail.com",
        location: "Lagos",
        shipment: 100,
        payment: "Pending",
        color: "text-[#e8505b]"
    },
    {
        name: "Victor john",
        number: +2348164361932,
        email: "johnvictor@gmail.com",
        location: "Lagos",
        shipment: 100,
        payment: "Paid",
        color: "text-[#1ea435]"
    },
    {
        name: "Victor john",
        number: +2348164361932,
        email: "johnvictor@gmail.com",
        location: "Lagos",
        shipment: 100,
        payment: "Paid",
        color: "text-[#1ea435]"
    },
    {
        name: "Victor john",
        number: +2348164361932,
        email: "johnvictor@gmail.com",
        location: "Lagos",
        shipment: 100,
        payment: "Pending",
        color: "text-[#e8505b]"
    },
    {
        name: "Victor john",
        number: +2348164361932,
        email: "johnvictor@gmail.com",
        location: "Lagos",
        shipment: 100,
        payment: "Paid",
        color: "text-[#1ea435]"
    },
    {
        name: "Victor john",
        number: +2348164361932,
        email: "johnvictor@gmail.com",
        location: "Lagos",
        shipment: 100,
        payment: "Pending",
        color: "text-[#e8505b]"
    },
    {
        name: "Victor john",
        number: +2348164361932,
        email: "johnvictor@gmail.com",
        location: "Lagos",
        shipment: 100,
        payment: "Pending",
        color: "text-[#e8505b]"
    },
    {
        name: "Victor john",
        number: +2348164361932,
        email: "johnvictor@gmail.com",
        location: "Lagos",
        shipment: 100,
        payment: "Paid",
        color: "text-[#1ea435]"
    },
    {
        name: "Victor john",
        number: +2348164361932,
        email: "johnvictor@gmail.com",
        location: "Lagos",
        shipment: 100,
        payment: "Pending",
        color: "text-[#e8505b]"
    },
]


export const vendors: VendorProps[] = [
    {
        name: "Gloria Uwana",
        phone: +2348164361932,
        email: "gloriauwana@gmail.com",
        location: "Lagos",
        plan: "Renew",
        shipment: 56,
    },
    {
        name: "Gloria Uwana",
        phone: +2348164361932,
        email: "gloriauwana@gmail.com",
        location: "Lagos",
        plan: "Renew",
        shipment: 56,
    },
    {
        name: "Gloria Uwana",
        phone: +2348164361932,
        email: "gloriauwana@gmail.com",
        location: "Lagos",
        plan: "Renew",
        shipment: 56,
    },
    {
        name: "Gloria Uwana",
        phone: +2348164361932,
        email: "gloriauwana@gmail.com",
        location: "Lagos",
        plan: "Renew",
        shipment: 56,
    },
    {
        name: "Gloria Uwana",
        phone: +2348164361932,
        email: "gloriauwana@gmail.com",
        location: "Lagos",
        plan: "Renew",
        shipment: 56,
    },
]