import React, { ReactNode, CSSProperties } from 'react';

interface ColumnProps {
    children: ReactNode;
    style?: CSSProperties;
}

export const Column: React.FC<ColumnProps> = ({ children, style }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                justifyContent: 'flex-start',
                ...style,
            }}
        >
            {children}
        </div>
    );
}
