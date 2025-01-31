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
import { useVerifyAgentEmail } from "../lib/useVerifyAgentEmail";

export default function VerifyAgentEmail() {
  const { isLoading, form, onSubmit, isResend, handleResend } =
    useVerifyAgentEmail();
  return (
    <div className="font-body w-full">
      <div className="mb-10 flex flex-col justify-start items-start w-full">
        <h2 className="sm:text-4xl text-3xl font-bold text-tertiary capitalize sm:whitespace-nowrap">
          Email Verification
        </h2>
        <p className="font-bold text-[#5e6769] mt-2">
          Kindly enter the code sent to your email
        </p>
      </div>
      <div className="flex justify-center items-center mt-10">
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
                      <div className="flex justify-between items-center gap-5 sm:gap-40 font-body">
                        <div className="flex">
                          <InputOTPGroup className="flex gap-5">
                            <InputOTPSlot
                              index={0}
                              className=" border border-tertiary rounded-lg h-16 text-sm md:text-2xl"
                            />
                            <InputOTPSlot
                              index={1}
                              className="border border-tertiary rounded-lg h-16 text-sm md:text-2xl"
                            />
                            <InputOTPSlot
                              index={2}
                              className="border border-tertiary rounded-lg h-16 text-sm md:text-2xl"
                            />
                            <InputOTPSlot
                              index={3}
                              className="border border-tertiary rounded-lg h-16 text-sm md:text-2xl"
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

            <div className="flex justify-center items-center flex-col gap-6">
              <Button
                className="flex justify-center items-center mt-5 text-xl md:h-11 h-10 bg-tertiary hover:bg-transparent hover:text-tertiary hover:border-tertiary hover:border"
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
              <button
                onClick={handleResend}
                type="button"
                className="whitespace-nowrap"
              >
                {isResend ? (
                  <span className="flex gap-3 items-center">
                    <Loader2 className="animate-spin h-6 w-6 " />
                    Please wait...
                  </span>
                ) : (
                  "Resend Code"
                )}
              </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
