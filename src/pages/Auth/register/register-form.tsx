import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

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
import { useSignUp } from "./lib/useSignUp";

export const RegisterForm = () => {
  const { isLoading, form, onSubmit } = useSignUp();

  return (
    <div className="font-body flex sm:justify-start flex-col sm:items-start justify-center items-center w-full">
      <div className="mb-10">
        <h2 className="md:text-5xl text-2xl font-bold text-tertiary capitalize">
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
                    className="sm:!w-[534px] outline-black h-12 placeholder:text-black font-bold md:placeholder:text-[16px] placeholder:text-sm"
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
                    className="sm:!w-[534px] outline-black h-12 placeholder:text-black font-bold md:placeholder:text-[16px] placeholder:text-sm"
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
                    className="sm:!w-[534px] outline-black h-12 placeholder:text-black font-bold md:placeholder:text-[16px] placeholder:text-sm"
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
                    className="sm:!w-[534px] outline-black h-12 placeholder:text-black font-bold md:placeholder:text-[16px] placeholder:text-sm"
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
                    className="sm:!w-[534px] outline-black h-12 placeholder:text-black font-bold md:placeholder:text-[16px] placeholder:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mb-8 flex items-center gap-2 justify-end">
            <div>
              <p className="font-bold md:text-[16px] text-sm">
                Already have an account?
              </p>
            </div>
            <div>
              <Link
                to="/"
                className="font-bold text-[#f7931e] md:text-[16px] text-sm"
              >
                Login
              </Link>
            </div>
          </div>

          <Button
            type="submit"
            className="flex justify-center items-center sm:!w-[534px] w-full md:text-[16px] text-sm md:h-11 h-12 bg-tertiary hover:bg-transparent hover:text-tertiary hover:border-tertiary hover:border mb-8"
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
