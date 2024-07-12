import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string({ message: "Email is required" }).email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string({ message: "Password is required" })
    .min(6, {
      message: "Password must be at least 6 characters long",
    })
    .max(30, { message: "Password must be no more than 30 characters long" })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "Password must contain at least one special character",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/\d/, { message: "Password must contain at least one number" })
    .refine((val) => !/\s/.test(val), {
      message: "Password must not contain white spaces",
    })
    .refine((val) => /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]*$/.test(val), {
      message: "Password must only contain Latin characters",
    }),
});
