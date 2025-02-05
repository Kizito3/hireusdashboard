import { returnsummary } from "@/library/api";
import { useAuthStore } from "@/library/hooks";
import { useEffect, useState } from "react";

interface useTotalSummaryReturn {
  isLoading: boolean;
  data: Summary | null;
}

export const useTotalSummary = (): useTotalSummaryReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Summary | null>(null);

  const { accessToken } = useAuthStore();

  useEffect(() => {
    const fetchTotalSummary = async () => {
      setIsLoading(true);

      try {
        const response = await returnsummary(accessToken!);
        const responseData = response?.data?.data;

        if (responseData && typeof responseData === "object") {
          setData({
            totalRiders: responseData.totalRiders ?? 0,
            totalUsers: responseData.totalUsers ?? 0,
            totalVendors: responseData.totalVendors ?? 0,
            totalShipments: responseData.totalShipments ?? 0,
          }); // Ensure correct type
        }
        console.log("totalsummary", response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTotalSummary();
  }, [accessToken]); // Dependency array includes token to refetch if token changes

  return { isLoading, data };
};
