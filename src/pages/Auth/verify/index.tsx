import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import { resendEmailToken } from "@/library/api";
import { Loader2 } from "lucide-react";
import { useEmailVerification } from "./lib/useEmailVerification";
import { AxiosError } from "axios";

export function VerifyEmail() {
  const [isResend, setIsResend] = useState<boolean>(false);
  const { isLoading, form, onSubmit } = useEmailVerification();

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

  return (
    <div className="flex justify-start items-start flex-col font-body">
      <div className="mb-10">
        <h2 className="md:text-5xl text-2xl font-bold text-tertiary capitalize">
          Verify Your email
        </h2>
        <p className="mt-5 font-bold">
          Please enter the OTP we sent to your email address
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP maxLength={4} {...field}>
                    <div className="flex justify-between items-center gap-5 sm:gap-40">
                      <div className="flex">
                        <InputOTPGroup className="flex gap-5">
                          <InputOTPSlot
                            index={0}
                            className="border border-tertiary rounded-lg"
                          />
                          <InputOTPSlot
                            index={1}
                            className="border border-tertiary rounded-lg"
                          />
                          <InputOTPSlot
                            index={2}
                            className="border border-tertiary rounded-lg"
                          />
                          <InputOTPSlot
                            index={3}
                            className="border border-tertiary rounded-lg"
                          />
                        </InputOTPGroup>
                      </div>
                    </div>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="flex justify-center items-center mt-5 text-xl md:h-13 h-12 bg-tertiary hover:bg-transparent hover:text-tertiary hover:border-tertiary hover:border"
            type="submit"
          >
            {isLoading ? (
              <span className="flex gap-3 items-center">
                <Loader2 className="animate-spin h-6 w-6 " />
                Please wait...
              </span>
            ) : (
              "Submit"
            )}
          </Button>

          <Button
            onClick={handleResend}
            type="submit"
            className="whitespace-nowrap"
          >
            {isResend ? (
              <span className="flex gap-3 items-center">
                <Loader2 className="animate-spin h-6 w-6 " />
                Please wait...
              </span>
            ) : (
              "Resend code"
            )}
          </Button>
        </form>

        <ToastContainer
          position="bottom-right"
          className="font-body font-bold"
          stacked
          transition={Slide}
        />
      </Form>
    </div>
  );
}
