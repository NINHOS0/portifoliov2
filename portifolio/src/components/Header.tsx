import Link from "@components/Link";
import { BsMoon, BsSun } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "context/themeProvider";

const Header = () => {
  const [toggleTheme, theme] = useContext(ThemeContext);

  return (
    <header className="flex justify-between mb-8 text-lg font-semibold text-blue-500">
      <div className="flex flex-col gap-1">
        <Link.styled to="/">[Início]</Link.styled>
        <Link.styled to="/projects">[Projetos]</Link.styled>
      </div>
      <button onClick={() => toggleTheme()} className="text-black dark:text-white h-10 w-10 grid place-items-center">
        {theme === "dark" ? <BsSun /> : <BsMoon/>}
      </button>
    </header>
  );
};

export default Header;
