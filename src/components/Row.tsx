import React, { ReactNode, CSSProperties } from 'react';

interface RowProps {
    children: ReactNode;
    style?: CSSProperties;
}

export const Row: React.FC<RowProps> = ({ children, style }) => {
    return (
        <div 
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '8px',
                justifyContent: 'space-between',
                alignContent: 'center',
                ...style,
            }}
        >
            {children}
        </div>
    );
}
