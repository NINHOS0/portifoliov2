// import imagem from "/screenshot.png";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  return (
    <>
      <section>
        <h1 className="text-2xl font-bold">Renan Granzotti</h1>
        <h2 className="text-lg mt-[-.4em] opacity-40">Web Developer</h2>
        <p className="text-md mt-14 text-right max-w-[500px] ml-auto">
          <strong>Hello!</strong> Eu sou <strong>Renan Granzotti</strong>, tenho 18 anos. Estudando desenvolvimento web com foco no
          front-end, apresentarei meus conhecimentos e projetos logo mais, <strong>até.</strong>
        </p>
      </section>
      <section className="mt-24 max-w-[600px]">
        <h1 className="text-2xl font-bold underline">Aprendizado</h1>
        <p className="mt-4">
          Comecei o estudo em 2021 conhecendo os conceitos de HTML e CSS, seguindo para JavaScript mais tarde.
          <br />
          Hoje, estudando e conhecendo a biblioteca React junto com Node.js.
        </p>
        <h3 className="mt-3 text-lg font-semibold">Domínios:</h3>
        <ul className="text-md">
          <li>
            - Html, Css e JS | <span className="text-yellow-600 font-semibold">Intermediário</span>
          </li>
          <li>
            - React | <span className="text-green-600 font-semibold">Iniciante</span>{" "}
          </li>
          <li>
            - NextJS | <span className="text-green-600 font-semibold">Iniciante</span>{" "}
          </li>
          <li>- Tailwind </li>
          <li>- NodeJS </li>
          <li>- Banco de Dados </li>
          <li>
            - Php | <span className="text-green-600 font-semibold">Iniciante</span>{" "}
          </li>
        </ul>
      </section>
      <section className="mt-24">
        <h1 className="text-2xl text-center font-bold underline">Projetos</h1>
        <div className="mt-4 flex flex-col gap-4 justify-center items-center">
          <ProjectCard title="Age Calculator with Animation" desc="Using HTML, CSS and JavaScript" image={"/screenshot.png"} url="1"/>
        </div>
      </section>
    </>
  );
};

export default Home