import { FcCancel } from "react-icons/fc";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";
import report from "/images/report.png";
import Query from "./query";
export default function Report() {
  return (
    <section>
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <FcCancel size={23} />
          <h3 className="font-bold text-[20px]">Reports</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-wrap whitespace-nowrap items-center gap-2">
            <BsFillTelephoneFill size={20} className="text-[#629a6b]" />
            <p className="text-[#378e45]">Call Rider</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <RiDeleteBin6Fill size={20} className="text-[#e8505b]" />
            <p className="text-[#e8505b]">Delete Rider</p>
          </div>
        </div>
      </div>
      <div className="mt-8 border-b">
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <img src={report} alt="" />
          </div>
          <div className="mb-2">
            <h2 className="text-[#5E6769] font-[600] text-[18px] mb-1">
              The Rider was so rude
            </h2>
            <p className="text-[#e8505b] font-[510]">12/03/24</p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-b">
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <img src={report} alt="" />
          </div>
          <div className="mb-2">
            <h2 className="text-[#5E6769] font-[600] text-[18px] mb-1">
              The Rider was voilent and Abusive
            </h2>
            <p className="text-[#e8505b] font-[510]">12/03/24</p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-b">
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <img src={report} alt="" />
          </div>
          <div className="mb-2">
            <h2 className="text-[#5E6769] font-[600] text-[18px] mb-1">
              The Rider was so rude
            </h2>
            <p className="text-[#e8505b] font-[510]">12/03/24</p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-b">
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <img src={report} alt="" />
          </div>
          <div className="mb-2">
            <h2 className="text-[#5E6769] font-[600] text-[18px] mb-1">
              Long Waiting Time
            </h2>
            <div>
              <p className="text-[#e8505b] font-[510]">12/03/24</p>
              {/* <p className="inline">
                The dispatch rider struggled with on-time deliveries, leading to
                multiple delays. One delivery was mistakenly dropped at the
                wrong location, causing significant inconvenience
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Query />
      </div>
    </section>
  );
}
