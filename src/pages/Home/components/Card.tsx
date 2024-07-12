import { useState, useEffect } from "react";
import EachCard from "./EachCard";
import CardSkeleton from "@/skeletons/CardSkeleton";

type PropsTypes = {
  cards: CardProps[];
};

export default function Card({ cards }: PropsTypes) {
  const [loading, setLoading] = useState<boolean>(true);

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
          ? Array.from({ length: 4 }).map((_, i) => <CardSkeleton key={i} />)
          : cards.map((item, i) => {
              const props = { ...item, index: i };
              return <EachCard {...props} key={i} />;
            })}
      </div>
    </div>
  );
}
