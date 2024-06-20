import EachCard from "./EachCard";
import { CardProps } from "../../../types/card-types";


type PropsTypes = {
  cards: CardProps[];
};
export default function Card({ cards }: PropsTypes) {
  return (
    <div className="font-body mt-0 md:mt-14 md:pr-12 px-12">
        <div>
            <h1 className="font-bold text-[24px] text-[#230740]">Insights</h1>
        </div>
        <div className="md:grid 2xl:grid-cols-4 grid-cols-2 md:gap-10 items-center mt-8">
      {cards.map((item, i) => {
        return (
          <div key={i} className={`${item.bgColor} px-14 py-10 rounded-3xl shadow-lg md:mt-0 mt-7 hover:shadow-none transition-all ease-in-out`}>
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
