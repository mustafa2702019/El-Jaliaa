import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../translations';

export type Language = 'en' | 'ar';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, replaces?: { [key: string]: string | number }) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Read persisted language preference, default to Arabic
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('scs_language');
    if (saved === 'ar' || saved === 'en') {
      return saved as Language;
    }
    return 'ar';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('scs_language', lang);
  };

  const isRtl = language === 'ar';

  // Manage document language and direction tags for full RTL support
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [language, isRtl]);

  const t = (key: string, replaces?: { [key: string]: string | number }) => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS['en'];
    // @ts-ignore
    let value = dict[key] || TRANSLATIONS['en'][key] || key;

    if (replaces) {
      Object.entries(replaces).forEach(([k, val]) => {
        value = value.replace(`{${k}}`, String(val));
      });
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl }}>
      <div dir={isRtl ? 'rtl' : 'ltr'} className={isRtl ? 'font-sans' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
