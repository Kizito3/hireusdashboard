import { Link } from "react-router-dom";
import profile from "/images/profile2.png";
import vector from "/images/Vector.png";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

export default function EditProfile() {
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted");
      }
  return (
    <div className="font-body mt-0 md:mt-16 font-[500] md:px-10 px-4">
      <div>
        <h1 className="font-bold text-[24px] text-[#230740]">Edit Profile</h1>
      </div>
      <div className="grid place-content-center mb-20">
        <div className="relative">
          <img src={profile} alt="" />
          <div className="absolute right-[-8px] bottom-7">
            <Link to="/edit-profile">
              <img src={vector} alt="" />
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    <form onSubmit={onSubmit}>
    <div className="flex w-full flex-wrap place-content-center items-center gap-5 mb-8">
        <div>
          <Label>First Name</Label>
          <Input type="text" id="email" placeholder="Email" />
        </div>
        <div>
          <Label>Last Name</Label>
          <Input type="text" id="email" placeholder="Email" />
        </div>
      </div>

      <div className="grid w-full place-content-center items-center flex-col gap-1.5 mb-8">
      <div className="">
      <Label className="">Email</Label>
      </div>
      <div>
      <input type="email" placeholder="chigokizzy@gmail.com" className="flex h-10 xl:w-[711px] w-[351px] font-body rounded-md border !outline-none border-input bg-transparent px-3 py-6 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground placeholder:font-body placeholder:text-[16px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"/>
      </div>
      </div>

      <div className="grid w-full place-content-center items-center flex-col gap-1.5">
      <div className="">
      <Label className="">Contact</Label>
      </div>
      <div>
      <input type="email" placeholder="chigokizzy@gmail.com" className="flex h-10 xl:w-[711px] w-[351px] font-body rounded-md border !outline-none border-input bg-transparent px-3 py-6 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground placeholder:font-body placeholder:text-[16px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"/>
      </div>
      </div>

      <div className="flex w-full flex-wrap place-content-center items-center gap-5 mt-8">
        <div>
          <Label>City</Label>
          <Input type="text" id="email" placeholder="Owerri" />
        </div>
        <div>
          <Label>State</Label>
          <Input type="text" id="email" placeholder="Imo" />
        </div>
      </div>

      <div className="flex w-full flex-wrap place-content-center items-center gap-5 mt-8">
        <div>
          <Label>Zip Code</Label>
          <Input type="text" id="email" placeholder="100233" />
        </div>
        <div>
          <Label>Country</Label>
          <Input type="text" id="email" placeholder="Nigeria" />
        </div>
      </div>

      <div className="grid place-items-center mt-7 text-white items-center mb-12">
    <button type="submit" className="bg-tertiary py-3 px-16 rounded-md hover:bg-transparent hover:border hover:border-tertiary hover:text-tertiary transition ease-in-out">
      Save
    </button>
  </div>
    </form>
    </div>
  );
}
