import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
    return (
        <header className='header'>
            <Link href="/">Serhii Smilianets</Link>
        </header>
    )
}
