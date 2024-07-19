
import { LockKeyhole } from "lucide-react";

export const FailedAuth = () => {
  return (
    <div className="font-body mt-0 md:mt-16 md:px-10 px-4">
    <div className=" flex justify-center flex-col items-center ">
      <div>
        <h1 className="font-bold text-[27px] text-[#230740]">Access Denied</h1>
      </div> 
    </div>
    <div className="flex justify-center items-center min-h-[80vh]">
        <LockKeyhole size={400} className="text-tertiary opacity-35"/>
    </div>
    </div>
  );
}
