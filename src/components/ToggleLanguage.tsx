import { useLanguage } from '../contexts/LanguageContext';

const ToggleLanguage = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt-BR' ? 'en-US' : 'pt-BR');
  };

  return (
    <div className="absolute top-8 right-12">
      <button
        onClick={toggleLanguage}
        aria-label="Toggle language"
        className="flex items-center gap-1 text-sm font-lora text-secondary hover:text-primary"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12h18M12 3a15.3 15.3 0 0 1 0 18M12 3a15.3 15.3 0 0 0 0 18"
          />
        </svg>
        <span>{language === 'pt-BR' ? 'BR' : 'US'}</span>
      </button>
    </div>
  );
}

export default ToggleLanguage;
