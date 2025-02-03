import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { agentverifyemail, resendagentemail } from "@/library/api";
import { useAuthStore } from "@/library/hooks";
// import VerifyAgentEmail from "../components/verify-agent";

const OtpSchemaAgent = z.object({
  pin: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
});

interface useVerifyAgentEmailReturn {
  form: UseFormReturn<z.infer<typeof OtpSchemaAgent>>;
  isLoading: boolean;
  isResend: boolean;
  onSubmit: (otps: z.infer<typeof OtpSchemaAgent>) => Promise<void>;
  //   handleResend: (otps: z.infer<typeof OtpSchemaAgent>) => void;
  handleResend: () => void;
}

export const useVerifyAgentEmail = (): useVerifyAgentEmailReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isResend, setIsResend] = useState<boolean>(false);

  //   const navigate = useNavigate();
  const { accessToken } = useAuthStore();

  const form = useForm<z.infer<typeof OtpSchemaAgent>>({
    resolver: zodResolver(OtpSchemaAgent),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit = async (otps: z.infer<typeof OtpSchemaAgent>) => {
    setIsLoading(true);
    try {
      const verifyToken = localStorage.getItem("token");
      const data = await agentverifyemail(
        { verification_code: otps.pin },
        verifyToken!
      );
      localStorage.removeItem("token");
      toast.success(data.data.message);
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
      const data = await resendagentemail(accessToken!);
      toast.success(data.data.message);
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

  return { isLoading, form, onSubmit, handleResend, isResend };
};
