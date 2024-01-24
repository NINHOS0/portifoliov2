// import imagem from "/screenshot.png";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <>
      <section>
        <h1 className="text-2xl font-bold text-center">Projetos</h1>
        <div className="flex flex-col gap-4 mt-4 items-center">
          <ProjectCard title="Age Calculator with Animation" desc="Using HTML, CSS and JavaScript" image={"/screenshot.png"} url="1"/>
          <ProjectCard title="Age Calculator with Animation" desc="Using HTML, CSS and JavaScript" image={"/screenshot.png"} url="1"/>
        </div>
      </section>
    </>
  );
};

export default Projects;
