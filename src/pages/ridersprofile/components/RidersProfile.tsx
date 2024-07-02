
import profile from "/images/rider.png";
import vector from "/images/Vector.png";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import RidersShipments from "./rider-shipment";
import Reviews from "./reviews";

export default function RidersProfile() {
  return (
    <div className="font-body mt-0 md:mt-20 font-[500] md:px-10 px-4">
      <div>
        <h1 className="font-bold text-[24px] text-[#230740]">Rider's Profile</h1>
      </div>
      <div className="grid place-items-center">
        <div className="relative">
          <img src={profile} alt="" />
          <div className="absolute right-[-8px] bottom-7">
            <Link to="/edit-rider">
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
              <FaStar size={22} className="text-[#ff9933]" />
              <p>4.0 (1000 Reviews)</p>
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
      <RidersShipments />

      <div>
        <Reviews />
      </div>
    </div>
  );
}
