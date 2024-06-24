import { allshipment } from "@/Data/Data";
import AvatarF  from '/images/avatarF.png';
import { FaAngleRight } from "react-icons/fa6";

export default function VendorAllShipments() {
  return (
    <div className="overflow-x-auto mb-8">
    <div className="min-w-[500px] md:min-w-full">
      {allshipment.map((item) => {
        return (
          <div key={item.id} className="bg-white mt-4 mb-4 py-6 shadow-lg md:px-0 w-full">
            <div className="flex justify-evenly flex-wrap items-center text-[10px] md:text-[16px] whitespace-nowrap">
              <div className="flex items-center gap-1">
                <img src={AvatarF} alt="" />
                {item.name}
              </div>
              <div>{item.pickup}</div>
              <div className="text-left">{item.dropoff}</div>
              <div>{item.date}</div>
              <div>{item.time}</div>
              <div className="flex items-center gap-2">
                <div className="md:w-[150px] w-[100px] text-center">
                  <div className={`${item.border} ${item.textColor} rounded-full py-2`}>
                    {item.status}
                  </div>
                </div>
                <div>
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  )
}
