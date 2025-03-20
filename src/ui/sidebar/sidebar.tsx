import React from 'react';
import Link from 'next/link';
import { NavLink } from '@/ui/sidebar/navlink/navLink';
import styles from './sidebar.module.css';

export const Sidebar: React.FC = () => {
    return (
        <aside className={styles.sidebar}>
            <NavLink href="/" icon='🏠' name='Home'/>
            <NavLink href="/about" icon='🧑‍💻' name='About'/>
            <NavLink href="/projects" icon='📁' name='Projects'/>
            <NavLink href="/contacts" icon='📞' name='Contacts'/>

            <Link className={styles.cvBtn} href="/cv-file">
                <button className={styles.showCVButton}>
                    <span>📄</span><span>Show CV</span>
                </button>
            </Link>
        </aside>
    );
}
