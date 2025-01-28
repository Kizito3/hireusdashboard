import { z } from "zod";

export const VendorSchema = z.object({
  business_name: z
    .string({ message: "Business Name is required" })
    .min(2, { message: "Business name must be at least 2 characters long" }),
  business_category: z
    .string({ message: "Business category is required" })
    .min(2, {
      message: "Business category must be at least 2 characters long",
    }),
  first_name: z
    .string({ message: "Firstname is required" })
    .min(2, { message: "Firstname must be at least 2 characters long" }),
  last_name: z
    .string({ message: "Lastname is required" })
    .min(2, { message: "Lastname must be at least 2 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z
    .string({ message: "Phone number is required" })
    .min(2, { message: "Phone number must be at least 2 characters." }),
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
