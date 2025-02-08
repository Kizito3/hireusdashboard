import { getAllVendors } from "@/library/api";
import { useAuthStore } from "@/library/hooks";
import { useEffect, useState } from "react";

export const useTotalVendors = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<VendorRealProps[] | null>(null);

  const { accessToken } = useAuthStore();

  useEffect(() => {
    const fetchAllVendors = async () => {
      setIsLoading(true);
      try {
        const response = await getAllVendors(accessToken!);
        const vendorsData: VendorRealProps[] | undefined =
          response?.data.data.vendors ?? [];
        setData(vendorsData);
      } catch (error) {
        console.error("Error fetching vendors:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllVendors();
  }, [accessToken]);

  return { data, isLoading };
};
