import { signup } from "@/library/api";
import { RegisterSchema } from "@/library/schema/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";

interface useSignUpReturn {
  form: UseFormReturn<z.infer<typeof RegisterSchema>>;
  isLoading: boolean;
  onSubmit: (values: z.infer<typeof RegisterSchema>) => Promise<void>;
}

export const useSignUp = (): useSignUpReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      account_type: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone: ["09043565256"],
      // terms_of_service: true,
    },
  });

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    setIsLoading(true);
    try {
      const data = await signup(values);
      console.log("data", data.data);
      const token = data.headers["authorization"];
      localStorage.setItem("token", token);
      localStorage.removeItem(token);
      toast.success(data.data.message);
      setTimeout(() => {
        navigate("/auth/verify-email");
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
  return { isLoading, form, onSubmit };
};
