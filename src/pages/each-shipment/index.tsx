import AllShipment from "./components/all-shipment";
import { allshipment } from "@/Data/Data";

export default function Shipments() {
  return (
    <div>
        <AllShipment shipment={allshipment} />
    </div>
  )
}
