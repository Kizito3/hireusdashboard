import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Loader } from "lucide-react";

import {
  useAuthStore,
  useProfileStore,
  useRefreshToken,
} from "../../library/hooks";
import { useLayoutEffect, useState } from "react";

export const RequireAuth = ({ allowedRoles }: { allowedRoles?: Roles[] }) => {
  const { accessToken } = useAuthStore();
  const { profile } = useProfileStore();
  const location = useLocation();
  return profile?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : accessToken ? (
    <Navigate to="/dashboard/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { accessToken, trusted_device, isLoggedIn } = useAuthStore();
  const refresh = useRefreshToken();

  // To prevent screen flickering, `useLayoutEffect` is used instead of `useEffect`
  useLayoutEffect(() => {
    const refreshAccess = async () => {
      await refresh();
      setIsLoading(false);
    };

    !accessToken && isLoggedIn ? refreshAccess() : setIsLoading(false);
  }, [refresh, accessToken, isLoggedIn]);

  return (
    <>
      {!trusted_device ? (
        <Outlet />
      ) : isLoading ? (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-neutral-100 font-body">
          <Loader className="animate-spin w-10 h-10 text-tertiary" />
          <span className="text-xl text-tertiary">Please wait....</span>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};
