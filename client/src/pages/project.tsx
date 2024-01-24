import { Link } from "react-router-dom";
// import Imagem from "/screenshot.png";

const Project = () => {
  return (
    <>
      <section className="flex flex-col items-center mt-4">
        <h1 className="text-xl font-semibold">Age Calculator with Animation</h1>
        <img src={"/screenshot.png"} alt="image" className="w-[600px] rounded-lg outline outline-1 outline-black mt-2" />
        <div className="flex gap-4 justify-center mb-4 text-lg font-bold text-blue-500 my-8">
          <Link to="/" className="w-min transition-all hover:-translate-y-1 hover:opacity-80">
            [Projeto]
          </Link>
          <Link to="/" className="w-min transition-all hover:-translate-y-1 hover:opacity-80">
            [Github]
          </Link>
        </div>
        <p className="font-semibold">Using HTML, CSS and JavaScript</p>
      </section>
    </>
  );
};

export default Project;
