import { verifyPasswordResetCode } from "@/library/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";

const OtpSchema = z.object({
  pin: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
});
interface usePasswordVerificationReturn {
  form: UseFormReturn<z.infer<typeof OtpSchema>>;
  isLoading: boolean;
  onSubmit: (otps: z.infer<typeof OtpSchema>) => Promise<void>;
}

export const usePasswordVerification = (): usePasswordVerificationReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //   const [isResend, setIsResend] = useState<boolean>(false);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof OtpSchema>>({
    resolver: zodResolver(OtpSchema),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit = async (otps: z.infer<typeof OtpSchema>) => {
    setIsLoading(true);
    try {
      const _ = localStorage.getItem("token");
      const data = await verifyPasswordResetCode(
        {
          password_reset_code: otps.pin,
        },
        _!
      );
      const token = data.headers["authorization"];
      localStorage.setItem("token", token);
      toast.success(data.data.message);
      setTimeout(() => {
        form.reset(); // Reset form before navigation
        navigate("/auth/password-reset");
      }, 3000);
    } catch (error: unknown) {
      console.log("error", error);
      const errorMessage =
        (error instanceof AxiosError && error.response?.data?.message) ||
        "Registration failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  //   const handleResend = async () => {
  //     setIsResend(true);
  //     try {
  //       const data = await resendEmailToken();
  //       const token = data.headers["authorization"];
  //       localStorage.setItem("token", token);
  //       toast.success(data.data.message);
  //       setTimeout(() => {
  //         navigate("/dashboard");
  //         form.reset();
  //       }, 3000);
  //     } catch (error: any) {
  //       console.log("error", error);
  //       const errorMessage =
  //         error.response?.data?.message ||
  //         "Registration failed. Please try again.";
  //       toast.error(errorMessage);
  //     } finally {
  //       setIsResend(false);
  //     }
  //   };
  return { form, isLoading, onSubmit };
};
