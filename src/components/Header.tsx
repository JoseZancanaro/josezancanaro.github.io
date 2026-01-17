import { NavLink } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import ToggleLanguage from "./ToggleLanguage";

const hoverBar = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-primary border-b border-primary"
    : "text-secondary hover:text-primary";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="relative flex flex-row items-end justify-center pt-6 gap-80">
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
      <h1 className="text-5xl font-playfair font-bold text-primary">
        José Carlos <br/>&nbsp;&nbsp;&nbsp;&nbsp;Zancanaro
      </h1>
      <ToggleLanguage />
    </header>
  );
};

export default Header;
