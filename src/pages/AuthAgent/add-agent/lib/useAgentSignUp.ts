import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AgentSchema } from "@/library/schema/agent-schema";
import { useForm, UseFormReturn } from "react-hook-form";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { agentsignup } from "@/library/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useAuthStore } from "@/library/hooks";

interface useAgentSignUpReturn {
  form: UseFormReturn<z.infer<typeof AgentSchema>>;
  isLoading: boolean;
  onSubmit: (values: z.infer<typeof AgentSchema>) => Promise<void>;
}

export const useAgentSignUp = (): useAgentSignUpReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const { accessToken } = useAuthStore();
  // const navigate = useNavigate();

  const form = useForm<z.infer<typeof AgentSchema>>({
    resolver: zodResolver(AgentSchema),
    defaultValues: {
      account_type: "agent",
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      promoCode: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof AgentSchema>) => {
    setIsLoading(true);
    try {
      // `AccessToken` is required to add an agent, meaning only an authorized admin or a company can add agents
      const data = await agentsignup(values, accessToken!);
      // console.log(data.headers["authorization"]);
      // const token = data.headers["authorization"];
      // localStorage.setItem("token", token!);
      // setTimeout(() => {
      //   navigate("/agent/verify/email");
      // }, 3000);
      toast.success(data.data.message);
      form.reset();
    } catch (error: unknown) {
      console.log("error", error);
      const errorMessage =
        (error instanceof AxiosError && error.response?.data?.message) ||
        "Agent registration failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, form, onSubmit };
};
