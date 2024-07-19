import { z } from "zod";

export const RegisterSchema = z.object({
  first_name: z
    .string({ message: "Firstname is required" })
    .min(2, { message: "Firstname must be at least 2 characters." }),

  last_name: z
    .string({ message: "Lastname is required" })
    .min(2, { message: "Lastname must be at least 2 characters." }),

  email: z
    .string({ message: "Enter is required" })
    .email({ message: "Enter a valid email address" }),
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

  phone: z.array(
    z
      .string({ message: "Phone number is required" })
      .min(10, { message: "Phone number must be at least 10 characters long" })
      .max(15, {
        message: "Phone number must be no more than 15 characters long",
      })
      .refine((val) => val.trim().length === val.length, {
        message: "Phone number must not have leading or trailing spaces",
      }),
    { message: "Phone number is required" }
  ),
});
