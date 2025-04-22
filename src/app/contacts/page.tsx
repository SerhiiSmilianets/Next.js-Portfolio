'use client'

import { useActionState } from 'react'
import { sendEmail, type FormState } from './actions'

const initialState: FormState = {
  message: '',
}

export default function ContactPage() {
  const [state, formAction] = useActionState(sendEmail, initialState)

  return (
    <div className="max-w-md mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
      <form action={formAction} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="name" required className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" name="email" required className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea name="message" rows={4} required className="w-full border rounded p-2" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>

      {state?.message && (
        <p className="mt-4 text-sm text-gray-700">{state.message}</p>
      )}
    </div>
  )
}
