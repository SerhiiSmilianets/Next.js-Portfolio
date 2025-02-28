'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkComponentProps {
    href: string;
    linkName: string;
}

export const LinkComponent = ({ href, linkName }: LinkComponentProps) => {
    const pathname = usePathname();
    return (
        <Link className={`link ${href == pathname ? 'active' : ''}`} href={href}>
            {linkName}
        </Link>
    )
}