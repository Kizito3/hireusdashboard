import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { RegisterSchema } from "@/library/schema/register-schema";
import { signup } from "@/library/api";

export const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      account_type: "admin",
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
      toast.success(data.data.message);
      navigate("/auth/verify-email");
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

  return (
    <div className="font-body flex sm:justify-start flex-col sm:items-start justify-center items-center w-full">
      <div className="mb-10">
        <h2 className="sm:text-5xl text-3xl font-bold text-tertiary capitalize">
          Create Account
        </h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className="mb-8">
                <FormControl>
                  <Input
                    placeholder="First Name"
                    {...field}
                    type="text"
                    className="sm:!w-[534px] outline-black h-16 placeholder:text-black font-bold placeholder:text-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem className="mb-8">
                <FormControl>
                  <Input
                    placeholder="Last Name"
                    {...field}
                    type="text"
                    className="sm:!w-[534px] outline-black h-16 placeholder:text-black font-bold placeholder:text-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-8">
                <FormControl>
                  <Input
                    placeholder="Email Address"
                    {...field}
                    name="email"
                    type="email"
                    className="sm:!w-[534px] outline-black h-16 placeholder:text-black font-bold placeholder:text-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="mb-8">
                <FormControl>
                  <Input
                    placeholder="Enter your phone number"
                    {...field}
                    type="text"
                    className="sm:!w-[534px] outline-black h-16 placeholder:text-black font-bold placeholder:text-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-8">
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    {...field}
                    type="password"
                    className="sm:!w-[534px] outline-black h-16 placeholder:text-black font-bold placeholder:text-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mb-8 flex items-center gap-2 justify-end">
            <div>
              <p className="font-bold">Already have an account?</p>
            </div>
            <div>
              <Link to="/" className="font-bold text-[#f7931e]">
                Login
              </Link>
            </div>
          </div>

          <Button
            type="submit"
            className="flex justify-center items-center sm:!w-[534px] w-full text-xl h-14 bg-tertiary hover:bg-transparent hover:text-tertiary hover:border-tertiary hover:border mb-8"
          >
            {isLoading ? (
              <span className="flex gap-3 items-center">
                <Loader2 className="animate-spin h-6 w-6 " />
                Please wait...
              </span>
            ) : (
              "Sign up"
            )}
          </Button>
        </form>
      </Form>
      <div className="">
        <ToastContainer
          position="bottom-right"
          className="font-body font-bold"
          stacked
          transition={Slide}
        />
      </div>
    </div>
  );
};
