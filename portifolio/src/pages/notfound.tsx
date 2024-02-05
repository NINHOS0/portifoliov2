import Link from "@components/Link";

const NotFound = () => {
  return (
    <main className="h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Error 404</h1>
      <Link.styled to={"/"} >
        [Início]
      </Link.styled>
    </main>
  );
};

export default NotFound;
