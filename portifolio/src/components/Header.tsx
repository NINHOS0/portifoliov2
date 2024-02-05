import { BsSun } from "react-icons/bs";
import Link from "@components/Link";

const Header = () => {
  return (
    <header className="flex justify-between mb-8 text-lg font-semibold text-blue-500">
      <div className="flex flex-col gap-1">
        <Link.styled to="/">[Início]</Link.styled>
        <Link.styled to="/projects">[Projetos]</Link.styled>
      </div>
      <BsSun/>
    </header>
  );
};

export default Header;
