import RiderCard from "./rideraccount";

type PropsTypes = {
  accounts: RidersAccountTypes[];
};
export default function Cards({ accounts }: PropsTypes) {
  return (
    <div className="font-body mt-0 md:mt-20 font-[500] md:px-10 px-4">
      <div>
        <h1 className="font-bold text-[24px] text-[#230740]">Insights</h1>
      </div>
      <div className="md:grid 2xl:grid-cols-3 grid-cols-2 md:gap-10 items-center mt-8">
        {accounts.map((item, i) => {
          const props = { ...item, index: i };
          return <RiderCard {...props} key={i} />;
        })}
      </div>
    </div>
  );
}
