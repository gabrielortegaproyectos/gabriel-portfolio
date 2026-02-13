import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { messages, type Language } from '@/i18n/messages';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (path: string) => string;
};

const STORAGE_KEY = 'site-language';

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const resolvePath = (obj: unknown, path: string): string | undefined => {
  const value = path.split('.').reduce<unknown>((acc, key) => {
    if (typeof acc !== 'object' || acc === null || !(key in acc)) {
      return undefined;
    }

    return (acc as Record<string, unknown>)[key];
  }, obj);

  return typeof value === 'string' ? value : undefined;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);
    return savedLanguage === 'en' ? 'en' : 'es';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((currentLanguage) => (currentLanguage === 'es' ? 'en' : 'es'));
  }, []);

  const t = useCallback(
    (path: string) => {
      return resolvePath(messages[language], path) ?? path;
    },
    [language]
  );

  const contextValue = useMemo(
    () => ({ language, setLanguage, toggleLanguage, t }),
    [language, toggleLanguage, t]
  );

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used inside a LanguageProvider');
  }

  return context;
};
