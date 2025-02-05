import { CardSkeleton2 } from "@/skeletons/CardSkeleton";
import { cn } from "../../../../@/lib/utils";
import { useTotalSummary } from "../lib/useTotalSummary";
// import { useTotalSummary } from "../lib/useTotalSummary";

export default function EachCard({
  total,
  info,
  icon,
  index,
}: CardProps & { index?: number }) {
  const { isLoading, data } = useTotalSummary();

  // console.log("data", data, isLoading);

  const Icon = icon;
  const totalValues = isLoading ? (
    <CardSkeleton2 />
  ) : index === 0 ? (
    data?.totalRiders ?? total
  ) : index === 1 ? (
    data?.totalVendors ?? total
  ) : index === 2 ? (
    data?.totalUsers ?? total
  ) : (
    data?.totalShipments ?? total
  );
  return (
    <div
      className={cn(
        "px-4 py-10 rounded-3xl shadow-lg md:mt-0 mt-7 hover:border-[1px] transition-all ease-in-out",
        index === 0
          ? "bg-riders-200 hover:bg-transparent hover:border-[#724cb0]"
          : index === 1
          ? "bg-vendors-200 hover:bg-transparent hover:border-[#30a87f]"
          : index === 2
          ? "bg-users-200 hover:bg-transparent hover:border-[#f1870f]"
          : "bg-shipments-200 hover:bg-transparent hover:border-[#198ee4]"
      )}
    >
      <div className="grid place-items-center">
        <div className="info">
          <h3
            className={cn(
              "text-[32px] font-bold text-center",
              index === 0
                ? "text-riders-500"
                : index === 1
                ? "text-vendors-500"
                : index === 2
                ? "text-users-500"
                : "text-shipments-500"
            )}
          >
            {totalValues}
          </h3>
          <div className="flex items-center gap-1">
            <div>
              {
                <Icon
                  size={32}
                  className={cn(
                    index === 0
                      ? "text-riders-400"
                      : index === 1
                      ? "text-vendors-400"
                      : index === 2
                      ? "text-users-400"
                      : "text-shipments-400"
                  )}
                />
              }
            </div>
            <div>
              <p
                className={cn(
                  index === 0
                    ? "text-riders-300"
                    : index === 1
                    ? "text-vendors-300"
                    : index === 2
                    ? "text-users-300"
                    : "text-shipments-300"
                )}
              >
                {info}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
