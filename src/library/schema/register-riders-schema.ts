import { z } from "zod";

const MAX_UPLOAD_SIZE = 3 * 1024 * 1024;
const ACCEPTED_FILES_TYPES = ["application/pdf"];

export const RegisterRiderSchema = z.object({
  fullname: z
    .string({ message: "Fullname is required" })
    .min(2, { message: "Fullname must be at least 2 characters." }),
  phone: z
    .string({ message: "Phone number is required" })
    .min(2, { message: "Phone number must be at least 2 characters." }),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  next_of_kin: z
    .string({ message: "Next of kin is required" })
    .min(2, { message: "Next of kin must be at least 2 characters." }),
  next_of_kin_phone: z
    .string({ message: "Phone number is required" })
    .min(2, { message: "Phone number must be at least 2 characters." }),
  
});

export const RegisterRiderSchema2 = z.object({
  file: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_UPLOAD_SIZE, {
      message: "File size must be less than 3MB",
    })
    .refine((file) => ACCEPTED_FILES_TYPES.includes(file.type), {
      message: "File must be a PDF",
    }),
});