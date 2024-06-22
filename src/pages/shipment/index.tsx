import Buttons from "./components/buttons";
import { ShipmentTable } from "./components/shipment-table";

export default function Shipment() {
  return (
    <div className="md:mt-32 font-body md:px-10 px-4 mb-14 font-[500]">
      <h1 className="font-bold text-[24px] text-[#230740]">Shipments</h1>
        <Buttons />
        <div>
          <ShipmentTable />
        </div>
    </div>
  )
}
