'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkComponentProps {
    href: string;
    children?: React.ReactNode;
}

export const NavLinkComponent = ({ href, children }: NavLinkComponentProps) => {
    const pathname = usePathname();
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <Link className={`link ${isActive ? 'active' : ''}`} href={href}>
            {children}
        </Link>
    )
}