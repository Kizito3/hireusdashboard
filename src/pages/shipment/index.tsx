import Buttons from "./components/buttons";
import { ShipmentTable } from "./components/shipment-table";

export default function Shipment() {
  return (
    <div className="mt-32 font-body px-12">
      <h1 className="font-bold text-[24px] text-[#230740]">Shipments</h1>
        <Buttons />
        <div>
          <ShipmentTable />
        </div>
    </div>
  )
}
