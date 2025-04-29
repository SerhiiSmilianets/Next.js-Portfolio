'use client'

import { useActionState } from 'react'
import { sendEmail, type FormState } from '@/actions/formActions'
import { useState, startTransition } from 'react'
import { LoaderComponent } from '@/components/loader/Loader'
import styles from '@/styles/modules/contactForm.module.css'

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

      <div className={styles.formWrapper}>
        <h2 className={styles.formTitle}>Contact Me</h2>
        <p className={styles.formDescription}>I would love to hear from you! Please fill out the form below.</p>
        <form onSubmit={handleSubmit} noValidate className={styles.form}>
          <div className={`${styles.formField} ${state?.errors?.name ? styles.error : ''}`}>
            <label className={styles.label} htmlFor="name">Name</label>
            <input 
              className={styles.input}
              id="name" 
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder='Your Name'
            />
            {state?.errors?.name && <div className={styles.errorText}>{state.errors.name}</div>}
          </div>

          <div className={`${styles.formField} ${state?.errors?.email ? styles.error : ''}`}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input 
              className={styles.input}
              id="email" 
              type="email" 
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder='Your Email'
            />
            {state?.errors?.email && <div className={styles.errorText}>{state.errors.email}</div>}
          </div>

          <div className={`${styles.formField} ${state?.errors?.message ? styles.error : ''}`}>
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea 
              className={styles.textarea}
              id="message" 
              name="message" 
              rows={4}
              value={formValues.message}
              onChange={handleChange} 
              placeholder='Your Message'
            />
            {state?.errors?.message && <div className={styles.errorText}>{state.errors.message}</div>}
          </div>

          <button className={styles.button} type="submit" disabled={isPending}>
            {isPending ? 'Submitting...' : 'Send'}
          </button>
        </form>

        {state?.message && (
          <p className={`${styles.formMessage} ${state.success ? styles.success : styles.fail}`}>
            {state.message}
          </p>
        )}
      </div>
    </>
  )
}
