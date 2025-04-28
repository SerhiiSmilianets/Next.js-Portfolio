import Link from 'next/link'
import { getContactInfo } from '@/lib/serverData';
import { FaPhoneAlt, FaTelegram, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp, FaGithub, FaViber } from 'react-icons/fa';
import { IoIosMail} from "react-icons/io";
import styles from '@/styles/modules/contactInfo.module.css'


export const ContactInfo = async () => {
    const contactInfo = await getContactInfo(); // Fetch data before rendering
        
    return (
        <div className={styles.contactInfoContainer}>
            <h2 className={styles.contactInfoTitle}>Prefer direct messaging?</h2>
            <p className={styles.contactInfoDescription}>Find me here:</p>
            <ul className={styles.contactInfoList}>
                <li>
                    <Link href={`mailto:${contactInfo.Email}`} aria-label="Send Email" className={styles.contactInfoLink}>
                        <span className='text-blue-700'><IoIosMail size={30}/></span> <span>{contactInfo.Email}</span>
                    </Link>
                </li>
                <li>
                    <Link href={`tel:${contactInfo.Phone}`} aria-label="Call Phone Number" className={styles.contactInfoLink}>
                        <span className='text-blue-700'><FaPhoneAlt size={30}/></span> <span>{contactInfo.Phone}</span>
                    </Link>
                </li>
                <li>
                    <Link href={contactInfo.Telegram} target="_blank" rel="noopener noreferrer" aria-label="Message on Telegram" className={styles.contactInfoLink}>
                        <span className='text-blue-700'><FaTelegram size={30}/></span> <span>Telegram</span>
                    </Link>
                </li>
                <li>
                    <Link href={contactInfo.LinkedIn} target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn Profile" className={styles.contactInfoLink}>
                        <span className='text-blue-800'><FaLinkedin size={30}/></span> <span>LinkedIn</span>
                    </Link>
                </li>
                <li>
                    <Link href={contactInfo.Facebook} target="_blank" rel="noopener noreferrer" aria-label="Visit Facebook Profile" className={styles.contactInfoLink}>
                        <span className='text-blue-600'><FaFacebook size={30}/></span> <span>Facebook</span>
                    </Link>
                </li>
                <li>
                    <Link href={contactInfo.Instagram} target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram Profile" className={styles.contactInfoLink}>
                        <span className='text-pink-500'><FaInstagram size={30}/></span> <span>Instagram</span>
                    </Link>
                </li>
                <li>
                    <Link href={contactInfo.WhatsApp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className={styles.contactInfoLink}>
                        <span className='text-green-500'><FaWhatsapp size={30}/></span> <span>WhatsApp</span>
                    </Link>
                </li>
                <li>
                    <Link href={contactInfo.GitHub} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className={styles.contactInfoLink}>
                        <span className='text-white-500'><FaGithub size={30}/></span> <span>GitHub</span>
                    </Link>
                </li>
                <li>
                    <Link href={contactInfo.Viber} target="_blank" rel="noopener noreferrer" aria-label="Chat on Viber" className={styles.contactInfoLink}>
                        <span className='text-violet-500'><FaViber size={30}/></span> <span>Viber</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}