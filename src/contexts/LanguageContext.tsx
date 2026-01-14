import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import ptBR from '../locales/pt-BR.json';
import enUS from '../locales/en-US.json';

type Language = 'pt-BR' | 'en-US';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  'pt-BR': ptBR,
  'en-US': enUS,
};

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

// Função auxiliar para retornar valores completos (incluindo arrays)
const getNestedValueAny = (obj: any, path: string): any => {
  const keys = path.split('.');
  let value: any = obj;
  
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    
    if (value == null) {
      return null;
    }
    
    // Se a chave é um número, tenta acessar como array
    if (!isNaN(Number(key)) && Array.isArray(value)) {
      value = value[Number(key)];
    } else if (typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return null;
    }
  }
  
  return value;
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt-BR');

  const t = (key: string): string => {
    const langData = translations[language];
    return getNestedValue(langData, key);
  };

  const tArray = (key: string): any => {
    const langData = translations[language];
    return getNestedValueAny(langData, key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray }}>
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
