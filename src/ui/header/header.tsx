import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/serhii_smilianets_log.svg';
import styles from './header.module.css';

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Link href="/">
                <Image
                    src={Logo}
                    alt="Serhii Smilianets"
                />
            </Link>

            <button className={styles.downloadCVButton}>Download CV</button>
        </header>
    )
}
