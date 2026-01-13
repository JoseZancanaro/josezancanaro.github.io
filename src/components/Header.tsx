import { NavLink } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const hoverBar = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-zinc-900 border-b border-zinc-900"
    : "text-zinc-500 hover:text-zinc-800";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="relative flex flex-row items-end justify-center mt-6 mb-8">
      <LanguageSelector />
      <nav className="text-xl font-playfair font-bold flex gap-4 pr-20">
        <NavLink to="/" className={hoverBar}>
          {t('nav.about')}
        </NavLink>
        <NavLink to="/projects" className={hoverBar}>
          {t('nav.projects')}
        </NavLink>
        <NavLink to="/timeline" className={hoverBar}>
          {t('nav.timeline')}
        </NavLink>
      </nav>
      <h1 className="text-5xl font-playfair font-bold text-zinc-800">
        José Carlos <br/>&nbsp;&nbsp;&nbsp;&nbsp;Zancanaro
      </h1>
    </header>
  );
};

export default Header;
