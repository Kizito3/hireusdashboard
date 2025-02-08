import { useState, useEffect } from "react";
import { getVendorProfile } from "@/library/api";
import { useAuthStore } from "@/library/hooks";

export const useVendorProfile = (_id: string | undefined) => {
  const [vendorProfile, setVendorProfile] = useState<VendorRealProps | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { accessToken } = useAuthStore();

  useEffect(() => {
    if (!_id || !accessToken) return;

    const fetchProfile = async () => {
      setIsLoading(true);

      try {
        const response = await getVendorProfile(accessToken, _id);
        const vendorData = response.data.data.vendor;
        setVendorProfile(vendorData);
      } catch (error) {
        console.error("Error fetching vendor profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [_id, accessToken]);

  return { vendorProfile, isLoading };
};
