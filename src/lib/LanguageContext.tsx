'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Locale, TranslationType } from '@/locales/translation';

interface LanguageContextType {
    locale: Locale;
    t: TranslationType;
    dir: 'ltr' | 'rtl';
    setLocale: (locale: Locale) => void;
    toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>('en');

    // Load initial preference from localStorage on mount
    useEffect(() => {
        const savedLocale = localStorage.getItem('preferred_locale') as Locale | null;
        if (savedLocale === 'en' || savedLocale === 'ar') {
            setLocaleState(savedLocale);
            document.documentElement.lang = savedLocale;
            document.documentElement.dir = savedLocale === 'ar' ? 'rtl' : 'ltr';
        }
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem('preferred_locale', newLocale);
        document.documentElement.lang = newLocale;
        document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
    };

    const toggleLocale = () => {
        setLocale(locale === 'en' ? 'ar' : 'en');
    };

    const value: LanguageContextType = {
        locale,
        t: translations[locale],
        dir: locale === 'ar' ? 'rtl' : 'ltr',
        setLocale,
        toggleLocale,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

// Custom hook to consume the language context easily
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
