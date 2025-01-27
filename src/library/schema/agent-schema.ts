import { z } from "zod";

export const AgentSchema = z.object({
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
  agent_address: z
    .string({
      message: "Enter your address",
    })
    .min(2, { message: "Address must be at least 2 characters." }),
  state: z
    .string({
      message: "Enter your state please",
    })
    .min(2, { message: "State must be at least 2 characters." }),
});
