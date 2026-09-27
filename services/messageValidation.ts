import { z } from "zod";

export const schema = z.object({
    gmail: z
        .string("Please let me know who wants to be in touch!")
        .email("Please enter a valid email"),
    message: z
        .string("Oops! You forgot to type your actual message!")
        .min(5, "Are you sure you have stated your purpose in just 5 characters?")
        .max(5000, "Are you sure you have 5000 characters to say? Please be concise!")
});