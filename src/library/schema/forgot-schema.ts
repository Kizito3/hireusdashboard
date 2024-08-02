import {z} from 'zod'

export const ForgotPasswordSchema = z.object({
  account_type: z.string(),
  email: z
    .string({ message: "Enter is required" })
    .email({ message: "Enter a valid email address" }),
});