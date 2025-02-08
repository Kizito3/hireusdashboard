export default function VendorProfileSkeleton() {
  return (
    <div className="font-body mt-0 md:mt-16 font-[500] md:px-10 px-4">
      {/* Skeleton for the heading */}
      <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-6"></div>

      {/* Skeleton for the profile image */}
      <div className="grid place-items-center">
        <div className="relative">
          <div className="w-32 h-32 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="absolute right-[-8px] bottom-7">
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Skeleton for the name and email */}
        <div className="text-center mt-4">
          <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-4 w-64 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Skeleton for location and payment details */}
        <div className="flex items-center gap-3 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Skeleton for the "About" section */}
        {/* <div className="text-center md:px-32 mt-12">
          <div className="h-6 w-24 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
