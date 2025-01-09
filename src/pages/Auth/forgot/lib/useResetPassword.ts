import { useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ForgotSchema } from "@/library/schema/reset-schema";
import { resetPassword } from "@/library/api";
import { AxiosError } from "axios";

interface UseResetPasswordReturn {
  form: UseFormReturn<z.infer<typeof ForgotSchema>>;
  isLoading: boolean;
  onSubmit: (values: z.infer<typeof ForgotSchema>) => Promise<void>;
}

export const useResetPassword = (): UseResetPasswordReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof ForgotSchema>>({
    resolver: zodResolver(ForgotSchema),
    defaultValues: {
      new_password: "",
      confirm_password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ForgotSchema>) => {
    setIsLoading(true);
    try {
      const _ = localStorage.getItem("token");
      const data = await resetPassword(values, _!);
      console.log("first", data.data.message);
      localStorage.removeItem("token");
      toast.success(data.data.message);
      setTimeout(() => {
        navigate("/");
        form.reset();
      }, 3000);
      form.reset();
    } catch (error: unknown) {
      console.log("error", error);
      const errorMessage =
        (error instanceof AxiosError && error.response?.data?.message) ||
        "Password reset failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { form, isLoading, onSubmit };
};
