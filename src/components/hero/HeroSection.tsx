import styles from "@/styles/modules/hero-section.module.css";
import Avatar from '../../../public/avatar_no_background.png';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { CVButton } from "@/components/cvButton/CVButton";
import {getExpYears} from '@/lib/dateHelper'

export const HeroSection: React.FC = () => {
  const experienceYears = getExpYears();
  
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={`${styles.textBlock} animate-slideInBot`}>
          <h1 className={styles.title}>
            <span className={styles.profileName}>Serhii Smilianets</span><br />
            Salesforce<br />
            Commerce Cloud<br />
            Developer
          </h1>
          <p className={styles.subtitle}>
            I build scalable e-commerce solutions using SFRA, OCAPI, and SCAPI. With {experienceYears}+ years of experience, I focus on performance, code quality and business value.
          </p>
          <div className={styles.buttons}>
            <Link href="/projects" className={styles.showProjectsBtn}>View Projects</Link>
            <CVButton showOnMobile={true} />
          </div>
        </div>
        <div className={`${styles.avatarWrapper} animate-slideInTop`}>
          <div className={styles.avatarBorder}></div>
          <Image
                src={Avatar}
                alt="Profile Picture"
                priority
                className={styles.avatar}
              />
        </div>
      </div>
    </section>
  );
}
