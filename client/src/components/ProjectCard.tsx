import { Link } from "react-router-dom"

type IProjectCard = {
    title: string,
    desc: string,
    image: string,
    url?: string
}

function ProjectCard ({title, desc, image, url=""}: IProjectCard) {
  return (
    <Link to={`/projects/${url}`} className="w-64 sm:w-full max-w-[700px]">
      <div className="sm:flex sm:w-auto rounded-md hover:scale-[98%] transition-all bg-[#f0f0f0] outline outline-1">
        <img src={image} alt="screen" className="rounded-md sm:w-64"/>
        <div className="p-2 w-full">
          <h3 className="text-md font-semibold">{title}</h3>
          <p className="px-0.5 text-xs">{desc}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
