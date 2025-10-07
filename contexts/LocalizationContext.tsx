
import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import type { Language } from '../types';
import { translations } from '../constants/localization';

type TranslationKey = keyof typeof translations.en;

interface LocalizationContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    t: (key: TranslationKey) => string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('en');

    useEffect(() => {
        const storedLang = localStorage.getItem('language') as Language;
        if (storedLang && (storedLang === 'en' || storedLang === 'ar')) {
            setLanguageState(storedLang);
        }
    }, []);

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    }, []);

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        if (language === 'ar') {
            document.body.classList.add('font-tajawal');
            document.body.classList.remove('font-poppins');
        } else {
            document.body.classList.add('font-poppins');
            document.body.classList.remove('font-tajawal');
        }
    }, [language]);

    const t = useCallback((key: TranslationKey): string => {
        return translations[language][key] || translations['en'][key];
    }, [language]);

    return (
        <LocalizationContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LocalizationContext.Provider>
    );
};

export const useLocalization = (): LocalizationContextType => {
    const context = useContext(LocalizationContext);
    if (!context) {
        throw new Error('useLocalization must be used within a LocalizationProvider');
    }
    return context;
};
