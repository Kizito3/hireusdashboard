import {z} from 'zod'

export const CompanySchema = z.object({
  company_name: z
    .string({ message: "Company name is required" })
    .min(2, { message: "Company name must be at least 2 characters." }),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  address_text: z
    .string({ message: "Address is required" })
    .min(2, { message: "Address must be at least 2 characters." }),
  country: z
    .string({ message: "Country is required" })
    .min(2, { message: "Country must be at least 2 characters." }),
  city: z
    .string({ message: "City is required" })
    .min(2, { message: "City must be at least 2 characters." }),
  state: z
    .string({ message: "State is required" })
    .min(2, { message: "State must be at least 2 characters." }),
  postal_code: z
    .string({ message: "Postal code is required" })
    .min(2, { message: "Postal code must be at least 2 numbers." }),
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