import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader2 } from "lucide-react";
import { useLogin } from "./lib/useLogin";

export const LoginForm = () => {
  const {
    isLoading,
    form,
    onSubmit,
    persistLogin,
    toggleIsTrustedDeviceLogin,
  } = useLogin();
  return (
    <div className="font-body flex sm:justify-start flex-col sm:items-start justify-center items-center w-full">
      <div className="mb-10">
        <h2 className="sm:text-5xl text-3xl font-bold text-tertiary capitalize">
          Login to your account
        </h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-8">
                <FormControl>
                  <Input
                    placeholder="Enter your email address"
                    {...field}
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

          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="trust device"
                id="trust-device"
                checked={persistLogin}
                onChange={toggleIsTrustedDeviceLogin}
              />
              <span className="font-bold ">Stay Logged In</span>
            </div>
            <div>
              <Link to="auth/forgot-password" className="font-bold">
                I've forgotten my password
              </Link>
            </div>
          </div>

          <Button
            type="submit"
            className="flex justify-center items-center sm:!w-[534px] w-full text-xl h-14 bg-tertiary hover:bg-transparent hover:text-tertiary hover:border-tertiary hover:border"
          >
            {isLoading ? (
              <span className="flex gap-2 items-center">
                <Loader2 className="animate-spin" />
                Please wait...
              </span>
            ) : (
              "Login"
            )}
          </Button>
          <div className="my-8 gap-2 before:border-t before:flex-1 items-center before:border-gray-300 after:border-t flex after:flex-1 after:border-gray-300">
            <p className="font-bold">or</p>
          </div>
        </form>
        <div className="mb-8">
          <Button
            type="submit"
            className="flex justify-center items-center text-xl sm:!w-[534px] w-full h-14 bg-[#f2f2f2] text-[#474747] hover:bg-[#f2f2f2]"
          >
            <FcGoogle className="" /> Sign in with Google
          </Button>
        </div>
        <div className="font-bold flex gap-2 items-center">
          <p className="text-[#474747] text-[17px]">Yet to register</p>
          <Link
            to="auth/register"
            className="underline text-[18px] text-[#8f42db]"
          >
            Signup
          </Link>
        </div>
      </Form>
      <ToastContainer
        position="bottom-right"
        className="font-body font-bold"
        stacked
        transition={Slide}
      />
    </div>
  );
};
