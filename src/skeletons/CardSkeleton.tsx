export default function CardSkeleton() {
  return (
    <div className="bg-gray-200 px-12 py-10 rounded-3xl shadow-lg md:mt-0 mt-7 animate-pulse grid place-items-center">
      <div className="bg-gray-300 h-5 w-16 mb-4 rounded-md"></div>
      <div className="bg-gray-300 h-6 w-16 rounded-md"></div>
    </div>
  );
}

export const CardSkeleton2 = () => {
  return (
    <div className=" animate-pulse grid place-items-center">
      <div className="bg-gray-300 h-6 w-16 mb-4 rounded-md"></div>
      {/* <div className="bg-gray-300 h-6 w-16 rounded-md"></div> */}
    </div>
  );
};
