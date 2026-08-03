import { z } from "zod"

const emailSchema = z
  .string()
  .trim()
  .min(1, "Enter your email address.")
  .max(254, "Email address is too long.")
  .email("Enter a valid email address.")

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(100),
  email: emailSchema,
  phone: z
    .string()
    .trim()
    .regex(/^\+91[6-9]\d{9}$/, "Enter a valid Indian mobile number."),
  company: z.string().trim().min(2, "Enter your company name.").max(120),
  purpose: z.string().trim().max(500, "Keep the project summary under 500 characters."),
  services: z.array(z.string().trim().max(80)).max(10),
  referralSource: z.string().trim().max(80),
  website: z.string().max(0),
})

export const newsletterSchema = z.object({
  email: emailSchema,
  website: z.string().max(0),
})

export type ContactSubmission = z.infer<typeof contactSchema>
export type NewsletterSubmission = z.infer<typeof newsletterSchema>

export function flattenFieldErrors(error: z.ZodError) {
  return error.issues.reduce<Record<string, string>>((errors, issue) => {
    const field = issue.path[0]
    if (typeof field === "string" && !errors[field]) errors[field] = issue.message
    return errors
  }, {})
}
