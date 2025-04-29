"use client";

import { CVButtonProps } from '@/interfaces';
import styles from '@/styles/modules/cvButton.module.css';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useState } from 'react';

const CVButtonComponent: React.FC<{ cvBtnStyles?: React.CSSProperties; handleClick?: () => void }> = ({ cvBtnStyles, handleClick }) => {
    const [isLoading, setIsLoading] = useState(false);
    const isMobile = useIsMobile();
    
    const handleGenerate = async () => {
        setIsLoading(true);
        try {
            const res = await fetch('/api/generate-cv');
            const data = await res.json();

            if (data?.url) {
                if (isMobile){
                    // Mobile — force download
                    const link = document.createElement('a');
                    link.href = data.url;
                    link.download = 'Serhii_Smilianets_CV.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } else {
                    // Desktop — open in new tab
                    window.open(data.url, '_blank');
                }
                
            }
        } catch (error) {
            console.error('Failed to generate CV', error);
        } finally {
            if (handleClick) {
                handleClick();
            }
            setIsLoading(false);
        }
    };

    return (
        <button 
            className={styles.downloadCVButton}
            style={cvBtnStyles}
            onClick={handleGenerate}
            disabled={isLoading}
        >
            {isLoading ? 'Generating...' : 'Open CV'}
        </button>
    );
}

export const CVButton: React.FC<CVButtonProps> = ({ showOnMobile, cvBtnStyles, handleClick }) => {
    const isMobile = useIsMobile();

    if (isMobile && showOnMobile) {
        return <CVButtonComponent cvBtnStyles={cvBtnStyles} handleClick={handleClick}/>;
    }
    if (!isMobile) {
        return <CVButtonComponent cvBtnStyles={cvBtnStyles} handleClick={handleClick}/>;
    }

    return null
}
