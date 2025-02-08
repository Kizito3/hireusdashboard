import { z } from "zod";

export const CompanySchema = z.object({
  account_type: z.string(),
  company_name: z
    .string()
    .min(2, { message: "Company name must be at least 2 characters." }),
  contact: z.object({
    email: z.string().email({ message: "Valid email is required" }),
    phone: z.array(
      z
        .string()
        .min(10, { message: "Phone number must be at least 10 digits." })
    ),
    address: z.object({
      country: z.string().min(2, { message: "Country is required" }),
      city: z.string().min(2, { message: "City is required" }),
      postal_code: z
        .string()
        .min(2, { message: "Postal code must be at least 2 characters." }),
      state: z.string().min(2, { message: "State is required" }),
      address_text: z.string().min(2, { message: "Address is required" }),
    }),
  }),
  terms_of_service: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms of service",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
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
    }),
});
