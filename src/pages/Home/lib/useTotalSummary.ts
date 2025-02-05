import { returnsummary } from "@/library/api";
import { useAuthStore } from "@/library/hooks";
import { useEffect, useState } from "react";

interface useTotalSummaryReturn {
  isLoading: boolean;
  data: Summary | object;
}

export const useTotalSummary = (): useTotalSummaryReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Summary | object>({});

  const { accessToken } = useAuthStore();

  useEffect(() => {
    const fetchTotalSummary = async () => {
      setIsLoading(true);

      try {
        const response = await returnsummary(accessToken!);
        if (response?.data) {
          setData(response.data); // Ensure correct type
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
