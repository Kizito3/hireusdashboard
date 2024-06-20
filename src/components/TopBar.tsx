import avatar from '/images/avatarF.png'

export default function TopBar() {
  return (
    <div className="">
      <div className="grid grid-cols-3 items-center mt-4 place-items-center">
          <div>
            <h1 className="text-primary">DashBoard</h1>
          </div>
          <div className=''>
            <input type="search" placeholder="search" className='w-[474px] border h-[37px] rounded-full outline-none px-6' />
          </div>
          <div>
            {/* icon */}
            <div className='flex items-center gap-4'>
              {/* avatar */}
              <img src={avatar} alt="" />
              <h2>Hello Sonia</h2>
            </div>
          </div>
      </div>
    </div>
  );
}
