import React from 'react';
import { Column } from './Column';
import { LinkComponent } from './LinkComponent';

export const Sidebar: React.FC = () => {
    return (
        <aside className='sidebar'>
            <Column>
                <LinkComponent href="/" linkName="Home"/>
                <LinkComponent href="/about" linkName="About Me"/>
                <LinkComponent href="/projects" linkName="Projects"/>
                <LinkComponent href="/contacts" linkName="Contacts"/>
                <LinkComponent href="/cv-file" linkName="Show CV"/>
            </Column>
        </aside>
    );
}
