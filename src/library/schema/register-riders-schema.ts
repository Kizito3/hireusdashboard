import { z } from "zod";

// const MAX_UPLOAD_SIZE = 3 * 1024 * 1024;
// const ACCEPTED_FILES_TYPES = ["application/pdf"];

export const RegisterRiderSchema = z.object({
  account_type: z.string(),
  first_name: z
    .string({ message: "Fullname is required" })
    .min(2, { message: "Fullname must be at least 2 characters." }),
  last_name: z
    .string({ message: "LastName is required" })
    .min(2, { message: "LastName must be at least 2 characters." }),
  phone: z
    .string({ message: "Phone number is required" })
    .min(2, { message: "Phone number must be at least 2 characters." }),
  email: z.string().email({ message: "valid Email is required" }),
  guarantor: z
    .string({ message: "Guarantor is required" })
    .min(2, { message: "guarantor name must be at least 2 characters." }),
  guarantor_phone: z
    .string({ message: "Phone number is required" })
    .min(2, { message: "Phone number must be at least 2 characters." }),
  guarantor_address: z
    .string({
      message: "Enter your guarantor's address",
    })
    .min(2, { message: "Address must be at least 2 characters." }),
});
