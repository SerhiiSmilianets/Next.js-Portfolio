import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
    return (
        <header style={{ padding: '20px', backgroundColor: '#f4f4f4', color: '#333'}}>
            <Link href="/">Serhii Smilianets</Link>
        </header>
    )
}
