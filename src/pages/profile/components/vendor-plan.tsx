import { IoMdCheckmark } from "react-icons/io";
export default function VendorPlan() {
  return (
    <div className="mt-12">
        <div>
        <h1 className="font-bold text-[24px] text-[#230740]">Vendor's Plan</h1>
      </div>
      <div className="border-b mt-6">
        <div className="flex gap-2 items-center mb-2">
            <IoMdCheckmark/>
            <p>20% discount on every shipment created</p>
        </div>
      </div>
      <div className="border-b mt-12">
        <div className="flex gap-2 items-center mb-2">
            <IoMdCheckmark/>
            <p>Instant updates on the status of their package.</p>
        </div>
      </div>
      <div className="border-b mt-12">
        <div className="flex gap-2 items-center mb-2">
            <IoMdCheckmark/>
            <p>Fast Delivery.</p>
        </div>
      </div>
      <div className="border-b mt-12">
        <div className="flex gap-2 items-center mb-2">
            <IoMdCheckmark/>
            <p>Creating invoice</p>
        </div>
      </div>
      <div className="grid place-items-center mt-7 text-white items-center w-full">
    <button type="submit" className="bg-tertiary py-3 px-7 w-full rounded-md hover:bg-transparent hover:border hover:border-tertiary hover:text-tertiary transition ease-in-out">
      Activate Plan
    </button>
  </div>
    </div>
  )
}
