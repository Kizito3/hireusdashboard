import EachCard from "./EachCard";
import { CardProps } from "../../../types/card-types";

type PropsTypes = {
  cards: CardProps[];
};
export default function Card({ cards }: PropsTypes) {
  return (
    <div className="my-container font-body mt-14 pr-12">
        <div>
            <h1 className="font-bold text-[24px] text-[#230740]">Insights</h1>
        </div>
        <div className="md:grid md:grid-cols-4 gap-10 items-center mt-8">
      {cards.map((item, i) => {
        return (
          <div key={i} className={`${item.bgColor} px-14 py-10 rounded-3xl shadow-lg hover:shadow-none transition-all ease-in-out`}>
            <EachCard 
            total={item.total} 
            info={item.info} 
            icon={item.icon} 
            iconBgColor={item.iconBgColor} 
            textColor={item.textColor} 
            smallText={item.smallText}
            />
          </div>
        );
      })}
    </div>
    </div>
  );
}
