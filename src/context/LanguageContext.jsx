import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(() => localStorage.getItem('fgsm-lang') || 'ES');

    useEffect(() => {
        localStorage.setItem('fgsm-lang', lang);
    }, [lang]);

    const t = translations[lang];

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Hook para consumir el idioma activo y su diccionario de textos (t) desde cualquier componente
export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage debe usarse dentro de un <LanguageProvider>');
    return ctx;
};
