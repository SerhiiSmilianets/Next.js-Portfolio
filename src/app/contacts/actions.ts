'use server'

import { z } from 'zod'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message is too short'),
})

export type FormState = {
  message: string
}

export async function sendEmail(prevState: FormState | undefined, formData: FormData): Promise<FormState> {
  const result = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!result.success) {
    const errorMessages = Object.values(result.error.flatten().fieldErrors)
      .flat()
      .join(', ')
    return { message: `Validation failed: ${errorMessages}` }
  }

  const { name, email, message } = result.data

  try {
    await resend.emails.send({
      from: 'portfolio@resend.dev',
      to: 'smilyanets1991@gmail.com',
      subject: `Portfolio Site Contact from ${name}`,
      replyTo: email,
      text: message,
    })

    return { message: 'Email sent successfully!' }
  } catch {
    return { message: 'Email failed to send. Please try again later.' }
  }
}
