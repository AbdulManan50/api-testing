import { z } from "zod";

export const singupcheema = z.object({
  username: z
    .string()
    .min(8, { message: "Username must be at least 8 characters" })
    .regex(/^[A-Za-z ]+$/, {
      message: "Username must contain only letters and spaces",
    }),

  email: z
    .string()
    .min(1, { message: "Email is required" })
    .regex(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      { message: "Please enter a valid email address" }
    ),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/,
      {
        message:
          "Password must include uppercase, lowercase, number, and special character",
      }
    ),
});
