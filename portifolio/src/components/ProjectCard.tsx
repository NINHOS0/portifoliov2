import { Link } from "react-router-dom"

type Card = {
    title: string,
    desc: string,
    image: string,
    url: string
}

type IProjectCard = {
  card: Card,
  right: boolean
}

function ProjectCard ({card, right}: IProjectCard) {
  return (
    <Link to={`/projects/${card.url}`} className={`w-64 sm:w-full max-w-[700px] transition-all ${right ? 'sm:translate-x-4' : 'sm:-translate-x-4'}`}>
      <div className="sm:flex flex-col sm:flex-row sm:w-auto h-60 sm:h-36 rounded-md hover:scale-[98%] transition-all bg-[#f0f0f0] dark:bg-neutral-950 outline outline-1 overflow-hidden">
        <img loading="lazy" src={`/images/${card.image}.png`} alt="Project Image" className="w-64 h-36"/>
        <div className="p-2 w-full overflow-hidden bg-clip-text text-transparent bg-gradient-to-b from-white from-75% to-transparent h-24 sm:h-36">
          <h3 className="text-md font-semibold">{card.title}</h3>
          <p dangerouslySetInnerHTML={{__html: card.desc.replace(/\n/g, "<br />")}} className="px-0.5 text-xs "/>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
