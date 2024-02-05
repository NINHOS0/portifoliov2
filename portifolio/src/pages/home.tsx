import ProjectCard from "@components/ProjectCard";
import Link from "@components/Link";
import db from "@assets/db.json";
import { FaDatabase, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import SkillCard from "@components/SkillCard";

const Home = () => {
  const ACTUAL_AGE = Math.floor((Date.now() - new Date("2005-12-19").getTime()) / 1000 / 60 / 60 / 24 / 365);

  return (
    <>
      <section>
        <h1 className="text-2xl font-bold">Renan Granzotti</h1>
        <h2 className="text-lg mt-[-.4em] opacity-40">Web Developer</h2>
        <p className="text-md mt-14 text-right max-w-[520px] ml-auto">
          <strong>Hello!</strong> Eu sou <strong>Renan Granzotti</strong>, tenho {ACTUAL_AGE ?? 18} anos. Cursei ensino médio técnico na
          área de TI, quando comecei no desenvolvimento web no Frontend.
          <br /> Após a conclusão do ensino médio continuei meu estudo na área, e estudando até o momento atual.
        </p>
      </section>
      {/* <section className="mt-24 max-w-[600px]">
        <h1 className="text-2xl font-bold underline">Aprendizado</h1>
        <p className="mt-4">
          Comecei o estudo em 2021 conhecendo os conceitos de HTML e CSS, seguindo para JavaScript mais tarde.
          <br />
          Hoje, estudando e conhecendo a biblioteca React junto com Node.js.
        </p>
        <h3 className="mt-3 text-lg font-semibold">Domínios:</h3>
        <ul className="text-md">
          <li>
            - Inglês - <span className="text-yellow-600 font-semibold">Básico</span>
          </li>
          <li>
            - Php - <span className="text-green-600 font-semibold">Básico</span>{" "}
          </li>
          <li>- HTML, CSS e JS</li>
          <li>- Tailwind </li>
          <li>
            - React - <span className="text-green-600 font-semibold">Básico</span>{" "}
          </li>
          <li>
            - NextJS - <span className="text-green-600 font-semibold">Básico</span>{" "}
          </li>
          <li>
            - NodeJS - <span className="text-green-600 font-semibold">Básico</span>{" "}
          </li>
          <li>
            - Banco de Dados - <strong>MySql</strong>{" "}
          </li>
        </ul>
      </section> */}

      <section className="mt-24">
        <h1 className="text-2xl font-bold underline">Aprendizado</h1>
        <div className="flex flex-col md:flex-row mt-4 w-full gap-6">
          <div className="md:w-5/12">
            <p>
              Comecei o estudo em 2021 conhecendo os conceitos de HTML e CSS, seguindo para JavaScript mais tarde.
              <br />
              Hoje, estudando e conhecendo a biblioteca React junto com Node.js.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:w-7/12 h-min">
            <SkillCard icon={<FaHtml5 className="text-lg" />}>HTML/CSS</SkillCard>
            <SkillCard icon={<FaJs />}>JavaScript</SkillCard>
            <SkillCard icon={<FaDatabase />}>Database</SkillCard>
            <SkillCard icon={<FaReact className="text-lg" />}>React</SkillCard>
            <SkillCard icon={<TbBrandNextjs className="text-xl" />}>NextJS</SkillCard>
            <SkillCard icon={<FaNodeJs className="text-lg" />}>NodeJS</SkillCard>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <h1 className="text-2xl text-center font-bold underline">Projetos</h1>
        <div className="mt-4 grid gap-4 place-items-center">
          {db.projects.map(
            (project, i) =>
              i < 4 && (
                <ProjectCard
                  key={i}
                  card={{
                    title: project.name,
                    desc: project.desc,
                    image: project.id,
                    url: project.id,
                  }}
                  right={i%2 === 0}
                />
              )
          )}
        </div>
        {db.projects.length > 3 && (
          <Link.styled
            to="/projects"
            className="block text-center font-semibold text-blue-500 transition-all hover:tracking-[4px] hover:opacity-60 mt-4"
          >
            [Ver mais]
          </Link.styled>
        )}
      </section>
    </>
  );
};

export default Home;
