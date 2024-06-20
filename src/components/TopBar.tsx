import avatar from '/images/avatarF.png'

export default function TopBar() {
  return (
    <div className="">
      <div className="grid grid-cols-3 md:gap-7 items-center place-items-center pl-4 lg:pl-60">
          <div>
            <h1 className="text-tertiary">DashBoard</h1>
          </div>
          <div className='hidden md:block'>
            <input type="search" placeholder="search" className='2xl:w-[474px] md:w-[300px] border h-[37px] rounded-full outline-none px-6' />
          </div>
          <div className="pl-40">
            {/* icon */}
            <div className='flex items-center gap-4 whitespace-nowrap'>
              {/* avatar */}
              <img src={avatar} alt="" />
              <h2 className=''>Hello Sonia</h2>
            </div>
          </div>
      </div>
    </div>
  );
}
