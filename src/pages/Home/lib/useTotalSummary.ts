import { returnSummary } from "@/library/api";
import { useAuthStore } from "@/library/hooks";
import { useEffect, useState } from "react";
import { FaBox } from "react-icons/fa6";
import { MdGroups, MdPedalBike } from "react-icons/md";

export const InsightDataObj = {
  riders: { name: "Riders", total: 0, icon: MdPedalBike },
  vendors: { name: "Vendors", total: 0, icon: MdGroups },
  users: { name: "Users", total: 0, icon: MdGroups },
  shipments: { name: "Shipments", total: 0, icon: FaBox },
};

export const useTotalSummary = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<typeof InsightDataObj>(InsightDataObj);

  const { accessToken } = useAuthStore();

  useEffect(() => {
    const fetchTotalSummary = async () => {
      setIsLoading(true);

      try {
        const data = (await returnSummary(accessToken!)).data.data;

        if (data) {
          setData((prev) => ({
            ...prev,
            riders: { ...prev.riders, total: data.totalRiders },
            vendors: { ...prev.vendors, total: data.totalVendors },
            users: { ...prev.users, total: data.totalUsers },
            shipments: {
              ...prev.shipments,
              total: data.totalShipments,
            },
          }));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTotalSummary();
  }, [accessToken]);

  return { isLoading, data: Object.values(data) };
};
