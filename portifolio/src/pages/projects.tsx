import ProjectCard from "@components/ProjectCard";
import db from "@assets/db.json";

const Projects = () => {
  return (
    <>
      <section>
        <h1 className="text-2xl font-bold text-center">Projetos</h1>
        <div className="flex flex-col gap-4 mt-4 items-center">
          {db.projects.map((project, i) => (
            <ProjectCard
              key={i}
              card={{
                title: project.name,
                desc: project.desc,
                image: project.id,
                url: project.id,
              }}
              right={i % 2 === 0}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
