import { z } from "zod";

export const AgentSchema = z.object({
  account_type: z.string(),
  first_name: z
    .string({ message: "FirstName is required !" })
    .min(2, { message: "firstname must be at least 2 characters" }),
  last_name: z
    .string({ message: "LastName is required !" })
    .min(2, { message: "lastname must be at least 2 characters" }),
  email: z.string().email({ message: "valid Email is required" }),
  phone: z
    .string({ message: "Phone number is required" })
    .min(2, { message: "Phone number must be at least 2 characters." }),
  promoCode: z
    .string({
      message: "Enter your promoCode",
    })
    .min(2, { message: "Address must be at least 2 characters." }),
  password: z
    .string({ message: "Password is required" })
    .min(6, {
      message: "Password must be at least 6 characters long",
    })
    .max(30, { message: "Password must be no more than 8 characters long" })
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
