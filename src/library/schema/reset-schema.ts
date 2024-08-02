import {z} from 'zod';
export const ForgotSchema = z
  .object({
    new_password: z
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

    confirm_password: z
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
  })
  .superRefine((data, ctx) => {
    if (data.new_password !== data.confirm_password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["confirm_password"], // indicate which field is causing the issue
      });
    }
  });
