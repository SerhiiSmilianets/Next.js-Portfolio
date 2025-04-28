'use server'

import { z } from 'zod'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const nameRegex = /^[A-Za-zА-Яа-яЇїЄєІіҐґ'\-\s]+$/;
const forbiddenHtmlRegex = /<\/?[^>]+(>|$)/g;
const forbiddenJsRegex = /(javascript:|on\w+=)/gi;

const schema = z.object({
  name: z.string()
    .transform(val => val.trim())  // Trim the input to remove leading/trailing spaces
    .superRefine((val, ctx) => {
      const trimmed = val.trim();

      // Check if the name is empty
      if (trimmed.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Name is required",  // Custom error if name is empty
        });
      } else if (trimmed.length < 3) { // Check if the name is shorter than 3 characters
        ctx.addIssue({
          code: z.ZodIssueCode.too_small,
          minimum: 3,
          type: "string",
          inclusive: true,
          message: "Name should have at least 3 symbols",  // Error for names shorter than 3 characters
        });
      } else if (!nameRegex.test(trimmed)) { // Check if the name contains invalid characters (using regex)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Name must contain only letters, spaces, hyphens, or apostrophes",  // Error for invalid characters
        });
      } else if (forbiddenHtmlRegex.test(trimmed)) { // Check if the name contains HTML tags
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Name must not contain HTML tags",  // Error for HTML tags
        });
      } else if (forbiddenJsRegex.test(trimmed)) { // Check if the name contains JavaScript injection keywords
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Name contains forbidden JavaScript keywords",  // Error for JS injections
        });
      }
    }),

  email: z.string()
    .email({ message: 'Invalid email address' })  // Check if the email is valid
    .transform(val => val.trim()),               // Trim the email to remove any spaces

  message: z.string()
    .transform(val => val.trim())  // Trim the message to remove leading/trailing spaces
    .superRefine((val, ctx) => {
      const trimmed = val.trim();

      // Check if the message is shorter than 10 characters
      if (trimmed.length < 10) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_small,
          minimum: 10,
          type: "string",
          inclusive: true,
          message: "Message should have at least 10 symbols",  // Error for messages shorter than 10 characters
        });
      } else if (forbiddenHtmlRegex.test(trimmed)) { // Check if the message contains HTML tags
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Message must not contain HTML tags",  // Error for HTML tags
        });
      } else if (forbiddenJsRegex.test(trimmed)) { // Check if the message contains JavaScript injection keywords
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Message contains forbidden JavaScript keywords",  // Error for JS injections
        });
      }
    }),
});

export type FormState = {
  message?: string
  success?: boolean
  errors?: {
    name?: string
    email?: string
    message?: string
  }
}

export async function sendEmail(prevState: FormState | undefined, formData: FormData): Promise<FormState> {
  const name = formData.get('name')?.toString() || ''
  const email = formData.get('email')?.toString() || ''
  const message = formData.get('message')?.toString() || '' 

  //await new Promise((resolve) => setTimeout(resolve, 5000)) // Simulate a delay

  const result = schema.safeParse({ name, email, message })

  if (!result.success) {
    const errors: FormState['errors'] = {}

    // Loop through the error issues and map them to the specific fields
    result.error.issues.forEach((err) => {
      const field = err.path[0] as keyof FormState['errors']
      if (field) {
        errors[field as keyof FormState['errors']] = err.message as string
      }
    })

    return {
      errors,
      message: 'Please fill form with correct data.',
      success: false,
    }
  }

  try {
    await resend.emails.send({
      from: 'portfolio@resend.dev',
      to: 'smilyanets1991@gmail.com',
      subject: `Portfolio Site Contact from ${name}`,
      replyTo: email,
      text: message,
    })

    return {
      success: true,
      message: 'Message sent successfully!',
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return {
      success: false,
      message: 'Email failed to send. Please try again later.' 
    }
  }
}
