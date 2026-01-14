import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="absolute -top-0.5 right-6 mt-6">
      <style>{`
        #language-select option {
          background-color: #F2EDE4 !important;
          color: #402C1A !important;
        }
        #language-select option:hover {
          background-color: #BFAE9F !important;
        }
      `}</style>
      <div className="relative w-full min-w-[60px]">
        <select
          id="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value as 'pt-BR' | 'en-US')}
          className="w-full bg-teste1 placeholder:text-teste3 text-teste2 text-sm font-lora font-medium border border-teste4 rounded pl-3 pr-8 py-1.5 transition duration-300 ease focus:outline-none focus:border-teste3 hover:border-teste3 shadow-sm focus:shadow-md appearance-none cursor-pointer"
        >
          <option value="pt-BR">BR</option>
          <option value="en-US">US</option>
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.2"
          stroke="currentColor"
          className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-teste2 pointer-events-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </div>
    </div>
  );
}
