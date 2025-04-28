'use client'

import { useActionState } from 'react'
import { sendEmail, type FormState } from '@/actions/formActions'
import { useState, startTransition } from 'react'
import { LoaderComponent } from '@/components/loader/Loader'
import '@/styles/contactForm.css'

const initialState: FormState = {}

export function ContactForm() {
  // State for form fields
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [state, formAction, isPending] = useActionState(sendEmail, initialState);

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  // Handle form submission
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    startTransition(async () => {
      await formAction(new FormData(e.target as HTMLFormElement))

      if (state.success) {
        // Clear form fields only after successful submission
        setFormValues({
          name: '',
          email: '',
          message: ''
        })
      }
    })
  }

  return (
    <>
      {isPending && <LoaderComponent />}

      <div className="form-wrapper">
        <h2 className="form-title">Contact Me</h2>
        <p className="form-description">I would love to hear from you! Please fill out the form below.</p>
        <form onSubmit={handleSubmit} noValidate>
          <div className={`form-field ${state?.errors?.name ? 'error' : ''}`}>
            <label htmlFor="name">Name</label>
            <input 
              id="name" 
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder='Your Name'
            />
            {state?.errors?.name && <div className="error-text">{state.errors.name}</div>}
          </div>

          <div className={`form-field ${state?.errors?.email ? 'error' : ''}`}>
            <label htmlFor="email">Email</label>
            <input 
              id="email" 
              type="email" 
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder='Your Email'
            />
            {state?.errors?.email && <div className="error-text">{state.errors.email}</div>}
          </div>

          <div className={`form-field ${state?.errors?.message ? 'error' : ''}`}>
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={4}
              value={formValues.message}
              onChange={handleChange} 
              placeholder='Your Message'
            />
            {state?.errors?.message && <div className="error-text">{state.errors.message}</div>}
          </div>

          <button type="submit" disabled={isPending}>
            {isPending ? 'Submitting...' : 'Send'}
          </button>
        </form>

        {state?.message && (
          <p className={`form-message ${state.success ? 'success' : 'fail'}`}>
            {state.message}
          </p>
        )}
      </div>
    </>
  )
}
