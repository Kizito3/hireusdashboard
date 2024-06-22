import { shipmentProps } from "@/types/all-shipment-types";
import AvatarF from "/images/avatarF.png";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

export default function EachShipment({
  name,
  pickup,
  dropoff,
  date,
  time,
  status,
  border,
  textColor,
  to
}: shipmentProps) {

  return (
    <div className="flex justify-evenly flex-wrap items-center text-[10px] md:text-[16px] whitespace-nowrap">
      <div className="flex items-center gap-1">
        <img src={AvatarF} alt="" />
        {name}
      </div>
      <div>{pickup}</div>
      <div className="text-left">{dropoff}</div>
      <div>{date}</div>
      <div>{time}</div>
      <div className="flex items-center gap-2">
        <div className={`${border} ${textColor} rounded-full py-2 px-3`}>
          {status}
        </div>
        <div>
          <Link to={to}>
            <FaAngleRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
