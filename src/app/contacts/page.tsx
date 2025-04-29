import type { Metadata } from "next";
import { ContactForm } from "@/components/contactForm/ContactForm";
import { ContactInfo } from "@/components/contactInfo/ContactInfo";
import styles from "@/styles/modules/contact.module.css";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch with me",
  keywords: ["Contact Me", "Contact", "Get in touch", "Reach out"]
};

export default function ContactPage() {
  return (
    <div className={styles.contactPageContainer}>
      <h1 className='page-title'>Contact</h1>
      <div className={styles.contactPage}>

        <div className={`${styles.container} animate-fade-in-left`}>
          <ContactForm />
        </div>
        <div className={styles.divider} aria-hidden="true" />

        <div className={`${styles.container} animate-fade-in-right`}>
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}
