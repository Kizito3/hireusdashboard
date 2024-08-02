import { ToastContainer, Slide } from "react-toastify";
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
import { Loader2 } from "lucide-react";
import { usePasswordVerification } from "./lib/usePasswordVerification";

export function PasswordResetEmail() {


  const { form, isLoading, onSubmit } = usePasswordVerification();
  return (
    <div className="flex justify-start items-start flex-col font-body">
      <div className="mb-10">
        <h2 className="sm:text-5xl text-3xl font-bold text-tertiary capitalize">
          Verify Your Password
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
                {/* <FormLabel>One-Time Password</FormLabel> */}
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
            className="flex justify-center items-center mt-5 text-xl h-14 bg-tertiary hover:bg-transparent hover:text-tertiary hover:border-tertiary hover:border"
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
        </form>
        {/* <button
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
        </button> */}
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
