import { FaAngleRight } from 'react-icons/fa6';
import AvatarF from '/images/avatarF.png';
import { allshipment } from '@/Data/Data';
import { PaginationDemo } from '@/pages/Home/components/Pagination';
import VendorPlan from './vendor-plan';
import VendorAllShipments from './vendor-all-shipment';

export default function VendorShipments() {
  return (
    <div className="font-body mt-0 md:mt-16 md:px-10 px-4 mb-14 font-[500]">
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
        <VendorAllShipments />

      <PaginationDemo />
      <div>
        <VendorPlan />
      </div>
    </div>
  );
}
