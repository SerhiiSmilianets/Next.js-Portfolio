"use client";

import React from 'react';
import { NavLink } from '@/components/sidebar/navlink/NavLink';
import styles from '@/styles/modules/sidebar.module.css';
import { useIsMobile } from '@/hooks/useIsMobile';

export const Sidebar: React.FC = () => {
    const isMobile = useIsMobile();
    
    if (isMobile) return null;

    return (
        <aside className={styles.sidebar}>
            <NavLink href="/" icon='🏠' name='Home'/>
            <NavLink href="/about" icon='🧑‍💻' name='About'/>
            <NavLink href="/projects" icon='📁' name='Projects'/>
            <NavLink href="/contacts" icon='📞' name='Contacts'/>
        </aside>
    );
}
