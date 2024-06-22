import { useState, useEffect } from 'react';
import EachCard from "./EachCard";
import { CardProps } from "../../../types/card-types";
import CardSkeleton from '@/skeletons/CardSkeleton';


type PropsTypes = {
  cards: CardProps[];
};

export default function Card({ cards }: PropsTypes) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className="font-body mt-0 md:mt-16 font-[500] md:px-10 px-4">
      <div>
        <h1 className="font-bold text-[24px] text-[#230740]">Insights</h1>
      </div>
      <div className="md:grid 2xl:grid-cols-4 grid-cols-2 md:gap-10 items-center mt-8">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))
          : cards.map((item, i) => (
              <div
                key={i}
                className={`${item.bgColor} px-4 py-10 rounded-3xl shadow-lg md:mt-0 mt-7 hover:shadow-none transition-all ease-in-out`}
              >
                <EachCard
                  total={item.total}
                  info={item.info}
                  icon={item.icon}
                  iconBgColor={item.iconBgColor}
                  textColor={item.textColor}
                  smallText={item.smallText}
                />
              </div>
            ))}
      </div>
    </div>
  );
}
