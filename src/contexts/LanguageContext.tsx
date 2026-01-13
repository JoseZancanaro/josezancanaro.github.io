import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import translationsData from '../locales/translations.json';

type Language = 'pt-BR' | 'en-US';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Função auxiliar para acessar valores aninhados no JSON usando notação de ponto
const getNestedValue = (obj: any, path: string): string => {
  const keys = path.split('.');
  let value: any = obj;
  
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    
    if (value == null) {
      return path;
    }
    
    // Se a chave é um número, tenta acessar como array
    if (!isNaN(Number(key)) && Array.isArray(value)) {
      value = value[Number(key)];
    } else if (typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return path;
    }
  }
  
  return typeof value === 'string' ? value : path;
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt-BR');

  const t = (key: string): string => {
    const langData = translationsData[language as keyof typeof translationsData];
    return getNestedValue(langData, key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
