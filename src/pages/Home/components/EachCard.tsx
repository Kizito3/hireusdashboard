import { CardProps } from "../../../types/card-types";

export default function EachCard({ total, info, icon, iconBgColor, textColor, smallText }: CardProps) {
    const Icon = icon;
  return (
    <div className="grid place-items-center">  
      <div className="info">
        <h3 className={`${textColor} text-[32px] font-bold text-center`}>{total}</h3>
        <div className="flex items-center gap-1">
            <div>{<Icon size={32} className={`${iconBgColor}`}/>}</div>
            <div><p className={`${smallText}`}>{info}</p></div>
        </div>
      </div>
    </div>
  );
}
