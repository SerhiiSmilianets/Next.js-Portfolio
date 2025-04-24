"use client";

import { CVButtonProps } from '@/interfaces';
import styles from '@/styles/modules/cvButton.module.css';
import { useIsMobile } from '@/hooks/useIsMobile';

const CVButtonComponent: React.FC<{ cvBtnStyles?: React.CSSProperties }> = ({ cvBtnStyles }) => {
    return (
        <button 
            className={styles.downloadCVButton}
            style={cvBtnStyles}
        >
            Download CV
        </button>
    );
}

export const CVButton: React.FC<CVButtonProps> = ({ showOnMobile, cvBtnStyles }) => {
    const isMobile = useIsMobile();

    if (isMobile && showOnMobile) {
        return <CVButtonComponent cvBtnStyles={cvBtnStyles}/>;
    }
    if (!isMobile) {
        return <CVButtonComponent cvBtnStyles={cvBtnStyles}/>;
    }

    return null
}
