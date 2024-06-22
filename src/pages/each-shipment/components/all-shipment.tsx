import { shipmentProps } from "@/types/all-shipment-types";
import EachShipment from "./each-shipment";

type PropsTypes = {
  shipment: shipmentProps[];
};

export default function AllShipment({ shipment }: PropsTypes) {
  console.log("AllShipment Props:", shipment); // Debugging line

  return (
    <div className="font-body mt-0 md:mt-16 md:pr-12 px-12">
      <div>
        <h1 className="font-bold text-[24px] text-[#230740] md:mb-16">
          Shipments (20)
        </h1>
      </div>
      <div className="flex justify-evenly gap-3 whitespace-nowrap items-center bg-white shadow-xl text-[10px] md:text-[16px] py-6 px-6 md:px-0 md:py-6 font-normal md:font-semibold">
        <div>
          <h3>Rider</h3>
        </div>
        <div>
          <h3>Pickup</h3>
        </div>
        <div>
          <h3>Drop-off</h3>
        </div>
        <div>
          <h3>Date</h3>
        </div>
        <div>
          <h3>Time</h3>
        </div>
        <div>
          <h3>Status</h3>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-[500px] md:min-w-full">
          {shipment.map((item, i) => (
            <div key={i} className="bg-white mt-4 mb-4 py-6 shadow-lg md:px-0 w-full">
              <EachShipment
                name={item.name}
                pickup={item.pickup}
                dropoff={item.dropoff}
                date={item.date}
                time={item.time}
                status={item.status}
                border={item.border}
                textColor={item.textColor}
                to={item.to}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
