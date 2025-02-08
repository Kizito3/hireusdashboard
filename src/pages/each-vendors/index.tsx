import { useParams } from "react-router-dom";
import { useVendorProfile } from "./lib/useVendorProfile";
import profile from "/images/profile.png";
import vector from "/images/Vector.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoCard } from "react-icons/io5";
import { Link } from "react-router-dom";
import VendorProfileSkeleton from "@/skeletons/vendor-profile-skeleton";

export const EachVendorsProfile = () => {
  const { _id } = useParams<{ _id: string }>();
  const { vendorProfile, isLoading } = useVendorProfile(_id || "");
  if (isLoading) return <VendorProfileSkeleton />;
  return (
    <div className="font-body mt-0 md:mt-16 font-[500] md:px-10 px-4">
      <div>
        <h1 className="font-bold text-[24px] text-[#230740]">
          Vendor's Profile
        </h1>
      </div>
      <div className="grid place-items-center">
        <div className="relative">
          <img src={profile} alt="" />
          <div className="absolute right-[-8px] bottom-7">
            <Link to="/dashboard/edit-profile">
              <img src={vector} alt="" />
            </Link>
          </div>
        </div>
        <div className="text-center">
          <h4 className="text-[20px] font-[700] mt-4">
            {vendorProfile?.fullName}
          </h4>
          <p>{vendorProfile?.email}</p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <FaLocationDot size={22} className="text-tertiary" />
              <p>
                {vendorProfile?.addresses?.[0].state},{" "}
                {vendorProfile?.addresses?.[0].country}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <IoCard size={22} className="text-tertiary" />
              <p>
                {Number(vendorProfile?.payments.amount).toLocaleString("en-Us")}
              </p>
            </div>
          </div>
          {/* ABOUT */}
        </div>
        <div className="text-center md:px-32 mb-12">
          <h2 className="font-bold text-[24px] text-[#230740] mt-12">About</h2>
          <p></p>
        </div>
      </div>
      {/* <Buttons />
      <VendorShipments /> */}
    </div>
  );
};
