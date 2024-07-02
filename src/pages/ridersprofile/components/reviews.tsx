import { PaginationDemo } from "@/pages/Home/components";
import Report from "./report";
import { ReviewData } from "./reviewdata";

export default function Reviews() {
  return (
    <section className="mt-12 md:px-20 px-5 mb-20">
      <div className="mb-12">
        <h2 className="font-bold text-[20px] text-[#230740]">Reviews (100)</h2>
      </div>
      <div className="md:px-1 mb-10">
        <div className="flex flex-wrap justify-between gap-10 ">
          {ReviewData.map((review, index) => (
            <div key={index} className="flex flex-col gap-4 md:p-4 p-0">
              <div className="flex flex-wrap gap-3 justify-between items-center">
              <div className="flex items-center gap-4">
                <div>
                  <img src={review.img} alt="Reviewer" />
                </div>
                <div>
                  <p className="text-[17px] leading-6 font-[600]">{review.name}</p>
                  <img src={review.star} alt="Rating" />
                </div>
              </div>
              <div className="">
                <p className="text-sm ">{review.date}</p>
              </div>
              </div>
              <article>
              <p className="font-[520] text-gray-800">{review.text} <span className="text-tertiary">{review.span}</span></p>
              </article>
            </div>
          ))}
        </div>
      </div>
      <PaginationDemo />
      <div className="mt-10">
      <Report />
      </div>
    </section>
  );
}
