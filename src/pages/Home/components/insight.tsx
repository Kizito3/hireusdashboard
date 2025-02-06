import CardSkeleton from "@/skeletons/CardSkeleton";
import { useTotalSummary } from "../lib/useTotalSummary";
import { InsightCard } from "./insight-card";

export const Insights = () => {
  const { data, isLoading } = useTotalSummary();

  return (
    <div className="md:px-10 px-4 font-body mt-0 md:mt-16 font-[500]">
      <h1 className="font-bold text-[24px] text-[#230740]">Insights</h1>

      <div className="md:grid 2xl:grid-cols-4 grid-cols-2 md:gap-10 items-center mt-8">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => <CardSkeleton key={i} />)
          : data.map((data, i) => {
              return <InsightCard {...data} key={i} index={i} />;
            })}
      </div>
    </div>
  );
};
