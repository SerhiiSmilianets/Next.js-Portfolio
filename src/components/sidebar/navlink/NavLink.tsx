'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/modules/navLink.module.css'; 
import {NavLinkProps} from '@/types';

export const NavLink = ({ href, icon, name, handleClick }: NavLinkProps) => {
    const pathname = usePathname();
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <Link className={`${styles.link} ${isActive ? styles.active : ''}`} href={href} onClick={handleClick}>
            {icon && <span>{icon}</span>}
            <span className={styles.linkText}>{name}</span>
        </Link>
    )
}