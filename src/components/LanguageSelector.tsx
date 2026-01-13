import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="absolute top-4 right-4">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'pt-BR' | 'en-US')}
        className="px-3 py-1.5 text-sm font-lora font-medium rounded border border-zinc-300 bg-white text-zinc-800 hover:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:border-zinc-400 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23374151%22%20d%3D%22M6%209L1%204h10z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_8px_center] bg-no-repeat pr-8 shadow-sm"
      >
        <option value="pt-BR">PT</option>
        <option value="en-US">EN</option>
      </select>
    </div>
  );
}
