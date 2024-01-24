import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Error 404</h1>
      <Link to={"/"} className="text-lg font-semibold text-blue-500 w-min transition-all hover:-translate-y-1 hover:opacity-80">
        [Início]
      </Link>
    </main>
  );
};

export default NotFound;
