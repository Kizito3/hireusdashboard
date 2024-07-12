import { cn } from "../../../../@/lib/utils";

export default function RiderCard({
  total,
  text,
  icon,
  index,
}: RidersAccountTypes & { index?: number }) {
  const Icon = icon;
  const Total = Number(total).toLocaleString();
  return (
    <div
      className={cn(
        "px-1 py-14 rounded-3xl shadow-lg hover:border-[1px] overflow-hidden border-spacing-1 md:mt-0 mt-7 transition-all ease-in-out",
        index === 0
          ? "bg-[#ebe6f0] hover:bg-transparent hover:border-[#724cb0]"
          : index === 1
          ? "bg-[#feece1] hover:bg-transparent hover:border-[#ef7f0f] "
          : "bg-[#e6fbff] hover:bg-transparent hover:border-[#559be4] "
      )}
    >
      <div className="grid place-content-center items-center">
        <div>
          <h3
            className={cn(
              "text-[32px] font-bold text-center",
              index === 0
                ? "text-tertiary"
                : index === 1
                ? "text-[#ef7f0f]"
                : "text-[#198ee3]"
            )}
          >
            {Total}
          </h3>
          <div className="flex items-center gap-2">
            <div>
              <Icon
                size={32}
                className={cn(
                  index === 0
                    ? "text-tertiary"
                    : index === 1
                    ? "text-[#f19f69]"
                    : "text-[#699bf7]"
                )}
              />
            </div>
            <div>
              <p
                className={cn(
                  index === 0
                    ? "text-[#a591cc]"
                    : index === 1
                    ? "text-[#f4b184]"
                    : "text-[#82b9e2]"
                )}
              >
                {text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
