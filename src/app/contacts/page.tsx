import { ContactForm } from "@/components/contactForm/ContactForm";
import { ContactInfo } from "@/components/contactInfo/ContactInfo";
import styles from "@/styles/modules/contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.contactPageContainer}>
      <h1 className='page-title'>Contact</h1>
      <div className={styles.contactPage}>
        <div className={styles.container}>
          <ContactForm />
        </div>
        <div className={styles.divider} aria-hidden="true" />
        <div className={styles.container}>
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}
