import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col gap-1 mb-8 text-lg font-semibold text-blue-500">
      <Link to="/" className="w-min transition-all hover:translate-x-2 hover:opacity-80">
        [Início]
      </Link>
      <Link to="/about" className="w-min transition-all hover:translate-x-2 hover:opacity-80">
        [Sobre]
      </Link>
      <Link to="/projects" className="w-min transition-all hover:translate-x-2 hover:opacity-80">
        [Projetos]
      </Link>
    </header>
  );
};

export default Header;
