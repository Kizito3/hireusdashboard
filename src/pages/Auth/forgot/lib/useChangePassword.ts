import { forgotPassword } from "@/library/api";
import { ForgotPasswordSchema } from "@/library/schema/forgot-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
interface useChangePasswordReturn {
  form: UseFormReturn<z.infer<typeof ForgotPasswordSchema>>;
  isLoading: boolean;
  onSubmit: (values: z.infer<typeof ForgotPasswordSchema>) => Promise<void>
}
export const useChangePassword = (): useChangePasswordReturn => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      account_type: "admin",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ForgotPasswordSchema>) => {
    setIsLoading(true);
    try {
      const data = await forgotPassword(values);
      console.log("first", data.data.message);

      const token = data.headers["authorization"];
      console.log("token", token);
      localStorage.setItem("token", token);
      toast.success(data.data.message);

      setTimeout(() => {
        navigate("/auth/password-reset-email");
        form.reset();
      }, 3000);

      form.reset();
    } catch (error: any) {
      console.log("error", error);
      const errorMessage =
        error.response?.data?.message ||
        "Registration failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  return { form, isLoading, onSubmit };
};