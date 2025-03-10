import React from 'react';
import { Column } from './Column';
import { NavLinkComponent } from './NavLinkComponent';

export const Sidebar: React.FC = () => {
    return (
        <aside className='sidebar'>
            <Column>
                <NavLinkComponent href="/">
                    <span>🏠</span> <span className='link-text'>Home</span>
                </NavLinkComponent>

                <NavLinkComponent href="/about">
                    <span>🧑‍💻</span> <span className='link-text'>About Me</span>
                </NavLinkComponent>

                <NavLinkComponent href="/projects">
                    <span>📁</span> <span className='link-text'>Projects</span>
                </NavLinkComponent>

                <NavLinkComponent href="/contacts">
                    <span>📞</span> <span className='link-text'>Contacts</span>
                </NavLinkComponent>

                <NavLinkComponent href="/cv-file">
                    <button className="showCVButton">
                        📄 Show CV
                    </button>
                </NavLinkComponent>
            </Column>
        </aside>
    );
}
