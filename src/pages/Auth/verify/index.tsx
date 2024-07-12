import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

export function VerifyEmail() {
  return (
    <div className="flex justify-center items-center flex-col font-body">
      <div className="mb-10">
        <h2 className="sm:text-5xl text-3xl font-bold text-tertiary capitalize">
          Verify Your email
        </h2>
        <p className="mt-5 font-bold">
          Please enter the OTP we sent to your email address
        </p>
      </div>
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
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
      </InputOTP>
      <Button className="flex justify-center items-center mt-5 text-xl h-14 bg-tertiary hover:bg-transparent hover:text-tertiary hover:border-tertiary hover:border">
        Submit
      </Button>
    </div>
  );
}
