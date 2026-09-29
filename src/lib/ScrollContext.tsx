'use client';

import React, { createContext, useContext, useCallback } from 'react';

interface ScrollContextType {
    scrollToSection: (id: string) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
    const scrollToSection = useCallback((id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <ScrollContext.Provider value={{ scrollToSection }}>
            {children}
        </ScrollContext.Provider>
    );
}

export function useScrollSection() {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error('useScrollSection must be used within a ScrollProvider');
    }
    return context;
}

// Convenient alias
export const useScrollToSection = useScrollSection;
