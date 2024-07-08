import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { HiOutlineDotsVertical } from "react-icons/hi"
import { Link } from "react-router-dom"

export default function Dropdown() {
  return (
    <div>
    <DropdownMenu>
  <DropdownMenuTrigger><HiOutlineDotsVertical size={32}/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Delete</DropdownMenuItem>
    <DropdownMenuSeparator />
    <Link to="/riders-profile">
    <DropdownMenuItem>View Profile</DropdownMenuItem>
    </Link>
    <DropdownMenuSeparator />
    <Link to='/all-shipment'>
    <DropdownMenuItem>View Shipments</DropdownMenuItem>
    </Link>
    <DropdownMenuSeparator />
    <Link to='/riders-account'>
    <DropdownMenuItem>View Account</DropdownMenuItem>
    </Link>
  </DropdownMenuContent>
</DropdownMenu>

    </div>
  )
}

  