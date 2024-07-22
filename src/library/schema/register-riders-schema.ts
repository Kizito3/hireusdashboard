import { z } from "zod";

// const MAX_UPLOAD_SIZE = 3 * 1024 * 1024;
// const ACCEPTED_FILES_TYPES = ["application/pdf"];

export const RegisterRiderSchema = z.object({
  // account_type: z.string(),
  first_name: z
    .string({ message: "Fullname is required" })
    .min(2, { message: "Fullname must be at least 2 characters." }),
  last_name: z
    .string({ message: "LastName is required" })
    .min(2, { message: "LastName must be at least 2 characters." }),
  phone: z
    .string({ message: "Phone number is required" })
    .min(2, { message: "Phone number must be at least 2 characters." }),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  plate_number: z
    .string({ message: "Enter your plate number please" })
    .min(2, { message: "plate number must be at least 2 characters." }),
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

// export const RegisterRiderSchema2 = z.object({
//   file: z.array(
//     z
//       .instanceof(File)
//       .refine((file) => file.size <= MAX_UPLOAD_SIZE, {
//         message: "File size must be less than 3MB",
//       })
//       .refine((file) => ACCEPTED_FILES_TYPES.includes(file.type), {
//         message: "File must be a PDF",
//       })
//   ),

//   vehicle_type: z
//     .string({ message: "Please select a vehicle type" })
//     .min(2, { message: "vehicle type must be at least 2 characters." }),
//   bike_brand: z
//     .string({ message: "Enter a bike brand" })
//     .min(2, { message: "bike brand must be at least 2 characters." }),
//   email: z
//     .string({ message: "Email is required" })
//     .email({ message: "Please enter a valid email address" }),
//   plate_number: z
//     .string({ message: "Enter your plate number please" })
//     .min(2, { message: "plate number must be at least 2 characters." }),
//   guarantor: z
//     .string({ message: "Guarantor is required" })
//     .min(2, { message: "guarantor name must be at least 2 characters." }),
//   guarantor_phone: z
//     .string({ message: "Phone number is required" })
//     .min(2, { message: "Phone number must be at least 2 characters." }),
//   guarantor_address: z
//     .string({
//       message: "Enter your guarantor's address",
//     })
//     .min(2, { message: "Address must be at least 2 characters." }),
// });