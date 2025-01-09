import { resendEmailToken, verifyEmail } from "@/library/api";
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
interface useEmailVerificationReturn {
  form: UseFormReturn<z.infer<typeof OtpSchema>>;
  isLoading: boolean;
  isResend: boolean;
  onSubmit: (otps: z.infer<typeof OtpSchema>) => Promise<void>;
  handleResend: (otps: z.infer<typeof OtpSchema>) => void;
}
export const useEmailVerification = (): useEmailVerificationReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isResend, setIsResend] = useState<boolean>(false);
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
      const data = await verifyEmail({ verification_code: otps.pin }, _!);
      const token = data.headers["authorization"];
      localStorage.setItem("token", token);
      localStorage.removeItem(token);
      toast.success(data.data.message);
      setTimeout(() => {
        navigate("/dashboard");
        form.reset();
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
  const handleResend = async () => {
    setIsResend(true);
    try {
      const _ = localStorage.getItem("token");
      const data = await resendEmailToken(_!);
      const token = data.headers["authorization"];
      localStorage.setItem("token", token);
      localStorage.removeItem("token");
      toast.success(data.data.message);
      // setTimeout(() => {
      //   navigate("/dashboard");
      //   form.reset();
      // }, 3000);
    } catch (error: unknown) {
      console.log("error", error);
      const errorMessage =
        (error instanceof AxiosError && error.response?.data?.message) ||
        "Registration failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsResend(false);
    }
  };
  return { isLoading, form, onSubmit, isResend, handleResend };
};
