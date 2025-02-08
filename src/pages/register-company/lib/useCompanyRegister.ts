import { addCompany } from "@/library/api";
import { useAuthStore } from "@/library/hooks";
import { CompanySchema } from "@/library/schema/register-company";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
interface useCompanyRegisterReturn {
  isLoading: boolean;
  form: UseFormReturn<z.infer<typeof CompanySchema>>;
  onSubmit: (values: z.infer<typeof CompanySchema>) => void;
}
export const useCompanyRegister = (): useCompanyRegisterReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const { accessToken } = useAuthStore();
  const form = useForm<z.infer<typeof CompanySchema>>({
    resolver: zodResolver(CompanySchema),
    defaultValues: {
      account_type: "company",
      company_name: "",
      contact: {
        email: "",
        phone: [""], // Ensure this matches the schema structure
        address: {
          country: "",
          city: "",
          postal_code: "",
          state: "",
          address_text: "",
        },
      },

      terms_of_service: true, // Ensure this field exists if required in schema
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: z.infer<typeof CompanySchema>) => {
    setIsLoading(true);
    try {
      const data = await addCompany(values, accessToken!);
      console.log(data);
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
    form.reset();
  };

  return { form, onSubmit, isLoading };
};
