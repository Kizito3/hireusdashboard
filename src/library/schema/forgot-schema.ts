import { z } from "zod";

export const ForgotPasswordSchema = z.object({
  account_type: z.string(),
  email: z.string().email({ message: "valid Email is required" }),
});
