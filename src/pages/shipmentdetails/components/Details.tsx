import avatarF from "/images/avatarF.png";
export default function Details() {
  return (
    <div className="font-body mt-0 md:mt-16 font-[500] md:px-10 px-4">
      <div>
        <h1 className="font-bold text-[24px] text-[#230740]">Shipment</h1>
      </div>
      <div className="lg:px-[153px] lg:mt-10">
        <div className="flex flex-wrap justify-between border-b ">
          <div className="flex items-center gap-3 mb-6" >
            <div>
              <img src={avatarF} alt="" />
            </div>
            <div>
              <h4 className="font-semibold leading-[24px]">Joy Asana</h4>
              <p>01/12/2024</p>
            </div>
          </div>
          <div className="md:w-[150px] w-[200px] text-center">
            <div
              className={` border border-[#6ada7d] text-[#1c9c32] py-2 rounded-full`}
            >
              Delivered
            </div>
          </div>
        </div>

        <div className="mt-[30px] border-b">
            <div className="mb-7">
            <h2 className="text-[18px] text-tertiary font-[700]">Pickup Address</h2>
            <h3>2 Obiorah Close, Isolo. Lagos, Nigeria.</h3>
            <p>Gloria Uwana</p>
            <p>08163678995</p>
            </div>
        </div>
        <div className="mt-[30px] border-b">
            <div className="mb-7">
            <h2 className="text-[18px] text-tertiary font-[700]">Drop-Off Location</h2>
            <h3>2 Jakande road, Gate. Lagos, Nigeria.</h3>
            <p>Gloria Uwana</p>
            <p>08163678995</p>
            </div>
        </div>
        <div className="mt-[30px] border-b">
            <div className="mb-7">
            <h2 className="text-[18px] text-tertiary font-[700]">Delivery Estimate & Package</h2>
            <h3>Perfume 3</h3>
            <p>N 2,500 - N 3,500</p>
            </div>
        </div>

        <div className="grid place-items-center mt-7 mb-10 text-white items-center ">
          <button type="submit" className="bg-tertiary py-3 px-7 rounded-md hover:bg-transparent hover:border hover:border-tertiary hover:text-tertiary transition ease-in-out">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}
