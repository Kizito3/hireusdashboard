import React from 'react';

export default function NewPassword() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted"); // Add any additional functionality here
  }

  return (
    <div className="font-body mt-0 md:mt-20 md:pr-12 px-12 grid place-items-center items-center">
      <div>
        <h1 className="font-[500] text-[27px] text-[#230740] md:mb-16 mb-10">
          Reset Your Password
        </h1>
      </div>
      <form onSubmit={onSubmit}>
        <div className="mb-8">
          <label htmlFor="new-password" className="block font-[500] text-xl">New Password</label>
          <input
            id="new-password"
            type="password"
            className="w-[300px] md:w-[596px] h-[50px] bg-transparent border border-[#ebebeb] rounded-md outline-none px-2 font-[500]"
            placeholder="Enter New Password"
          />
        </div>
        <div>
          <label htmlFor="confirm-password" className="block font-[500] text-xl">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            className="w-[300px] md:w-[596px] h-[50px] bg-transparent border border-[#ebebeb] rounded-md outline-none px-2 font-[500]"
            placeholder="Confirm Password"
          />
        </div>
        <div className="grid place-items-center mt-7 text-white items-center ">
          <button type="submit" className="bg-tertiary py-3 px-7 rounded-md hover:bg-transparent hover:border hover:border-tertiary hover:text-tertiary transition ease-in-out">
            Reset Password
          </button>
        </div>
      </form>
    </div>
  )
}
