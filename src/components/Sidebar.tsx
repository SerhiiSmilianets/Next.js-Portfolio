import React from 'react';
import Link from 'next/link';
import { Column } from './Column';

export const Sidebar: React.FC = () => {
    return (
        <aside className='sidebar'>
            <Column>
                <Link href="/">Home</Link>
                <Link href="/about">About Me</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contacts">Contacts</Link>
            </Column>
        </aside>
    );
}
