import { NavLink } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const hoverBar = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-teste2 border-b border-teste2"
    : "text-teste3 hover:text-teste2";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="relative flex flex-row items-end justify-center pt-6 gap-80">
      <LanguageSelector />
      <nav className="text-xl font-playfair font-bold flex gap-4">
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
      <h1 className="text-5xl font-playfair font-bold text-teste2">
        José Carlos <br/>&nbsp;&nbsp;&nbsp;&nbsp;Zancanaro
      </h1>
    </header>
  );
};

export default Header;
