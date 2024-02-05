import { useParams } from "react-router-dom";
import Link from "@components/Link";
import db from "@assets/db.json";

const Project = () => {
  const { projectId } = useParams();
  const project = db.projects.find((pro) => pro.id === projectId);

  return (
    <>
      <section className="flex flex-col items-center mt-4">
        <h1 className="text-xl font-semibold">{project?.name}</h1>
        <img loading="lazy" src={`/images/${project?.id}.png`} alt="image" className="w-[600px] rounded-lg outline outline-1 mt-2" />
        <div className="flex gap-4 justify-center text-lg font-semibold text-blue-500 mt-6 mb-4">
          <Link.styled to={project?.project ?? "/"} target="_blank">
            [Projeto]
          </Link.styled>
          <Link.styled to={project?.github ?? "/"} target="_blank">
            [Github]
          </Link.styled>
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: project?.desc.replace(/\n/g, "<br />") ?? "" }}
          className="description font-semibold text-center max-w-[600px]"
        />
      </section>
    </>
  );
};

export default Project;
