import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/serhii_smilianets_log.svg';
import styles from '@/styles/modules/header.module.css';
import { MobileNav } from "@/components/sidebar/mobileNav";
import { CVButton } from "@/components/cvButton/cvButton";

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Link href="/">
                <Image
                    src={Logo}
                    alt="Serhii Smilianets"
                />
            </Link>

            <CVButton showOnMobile={false} />
            <MobileNav />
        </header>
    )
}
