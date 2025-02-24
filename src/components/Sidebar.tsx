import React from 'react';
import Link from 'next/link';
import { Column } from './Column';

export const Sidebar: React.FC = () => {
    return (
        <aside style={{ height:'100vh', width: '250px', padding: '20px', backgroundColor: '#f4f4f4'}}>
            <Column style={{ gap: '16px', color: '#333' }}>
                <Link href="/">Home</Link>
                <Link href="/about">About Me</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contacts">Contacts</Link>
            </Column>
        </aside>
    );
}
