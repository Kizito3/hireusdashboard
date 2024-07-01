import Buttons from "@/pages/shipment/components/buttons";
import profile from "/images/profile.png";
import vector from "/images/Vector.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoCard } from "react-icons/io5";
import VendorShipments from "./vendor-shipment";
import { Link } from "react-router-dom";

export default function VendorsProfile() {
  return (
    <div className="font-body mt-0 md:mt-16 font-[500] md:px-10 px-4">
      <div>
        <h1 className="font-bold text-[24px] text-[#230740]">Profile</h1>
      </div>
      <div className="grid place-items-center">
        <div className="relative">
          <img src={profile} alt="" />
          <div className="absolute right-[-8px] bottom-7">
            <Link to="/edit-profile">
            <img src={vector} alt="" />
            </Link>
          </div>
        </div>
        <div className="text-center">
          <h4 className="text-[20px] font-[700] mt-4">Victor John</h4>
          <p>johnvictor@gmail.com</p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <FaLocationDot size={22} className="text-tertiary" />
              <p>Abuja, Nigeria</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCard size={22} className="text-tertiary" />
              <p>N350.000</p>
            </div>
          </div>
          {/* ABOUT */}
        </div>
        <div className="text-center md:px-32 mb-12">
          <h2 className="font-bold text-[24px] text-[#230740] mt-12">About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut
            rerum libero possimus doloribus facere temporibus optio corporis
            aut, illum quisquam sequi, ex velit tempora perspiciatis saepe
            cupiditate quae deleniti, tenetur amet consequuntur culpa fugit? Eos
            a earum voluptatem labore odit recusandae corrupti fugiat, possimus,
            laboriosam rerum nesciunt laborum et.
          </p>
        </div>
      </div>
      <Buttons />
      <VendorShipments />
    </div>
  );
}
