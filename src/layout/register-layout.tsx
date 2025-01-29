import { Logo } from "@/components/shared/logo";
import { Outlet, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const RegisterLayout = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="w-full min-h-[80%] flex justify-center items-center">
        <div className=" py-10 px-6 sm:px-12">
          <div className="flex justify-between items-center mb-4">
            <div>
              <button
                onClick={handleBack}
                className="border border-tertiary inline-flex items-center p-1 rounded-sm group hover:bg-tertiary hover:transition-all hover:delay-200"
              >
                <ArrowLeft
                  size={30}
                  className=" text-tertiary group-hover:text-white group-hover:transition-all group-hover:delay-200"
                />
              </button>
            </div>
            <div className="">
              <Logo />
            </div>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
