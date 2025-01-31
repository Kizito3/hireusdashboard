import { login } from "@/library/api";
import { useAuthStore, useProfileStore } from "@/library/hooks";
import { LoginSchema } from "@/library/schema/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";

interface useLoginReturn {
  form: UseFormReturn<z.infer<typeof LoginSchema>>;
  isLoading: boolean;
  onSubmit: (values: z.infer<typeof LoginSchema>) => Promise<void>;
  persistLogin: boolean;
  toggleIsTrustedDeviceLogin: () => void;
}

export const useLogin = (): useLoginReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();
  const { setProfile } = useProfileStore();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      account_type: "admin",
      email: "",
      password: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setIsLoading(true);
    try {
      const data = await login(values);
      setAuth(data.headers["authorization"]);
      if (data.data.data?.user) {
        setProfile(data.data.data.user);
      }
      localStorage.setItem("isLoggedIn", JSON.stringify(data.data.success));
      toast.success(data.data.message);
      navigate("/dashboard");
      form.reset();
    } catch (error: unknown) {
      const errorMessage =
        (error instanceof AxiosError && error.response?.data?.message) ||
        "Registration failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const [persistLogin, setPersistLogin] = useState(
    !!JSON.parse(localStorage.getItem("trusted_device") || "false") || false
  );
  const toggleIsTrustedDeviceLogin = () => {
    setPersistLogin((current) => !current);
  };

  useEffect(() => {
    localStorage.setItem("trusted_device", JSON.stringify(persistLogin));
  }, [persistLogin]);

  return {
    isLoading,
    form,
    onSubmit,
    persistLogin,
    toggleIsTrustedDeviceLogin,
  };
};
