import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/serhii_smilianets_log.svg';

export const Header: React.FC = () => {
    return (
        <header className='header'>
            <Link href="/">
                <Image
                    src={Logo}
                    alt="Serhii Smilianets"
                />
            </Link>
        </header>
    )
}
