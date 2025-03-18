import Image from 'next/image';
import { FC } from 'react';
import Avatar from '../../public/avatar.jpg';
import styles from "@/ui/home.module.css";

const Home: FC = () => {
  return (
    <>      
      <div className={styles.profileImageContainer}>
        <div className={styles.profileImageWrapper}>
          <div className={styles.profileImageGlow}></div>
          <Image
            src={Avatar}
            alt="Profile Picture"
            layout="fill"
            className={styles.profileImage}
          />
        </div>
      </div>
      <div className={styles.profileInfoContainer}>
        <h2 className={styles.profileName}>Serhii Smilianets</h2>
        <p className={styles.certifiedText}>Certified Salesforce Commerce Cloud Developer</p>
        <p className={styles.jobTitle}>Web developer</p>
      </div>
    </>
  );
};

export default Home;
