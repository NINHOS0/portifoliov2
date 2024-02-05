import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "@components/Link";

const Footer = () => {
  return (
    <section className="mt-auto pt-24">
      <div className="flex gap-2 justify-center items-center mb-1">
        <Link.icon to="https://github.com/NINHOS0" target="_blank" className="w-10 h-10 rounded-full hover:bg-neutral-200 grid place-items-center transition-all">
          <BsGithub />
        </Link.icon>
        <Link.icon to="https://www.linkedin.com/in/renan-polido-805a66248/" target="_blank" className="w-10 h-10 rounded-full hover:bg-neutral-200 grid place-items-center transition-all">
          <BsLinkedin />
        </Link.icon>
      </div>
      <p className="font-bold text-sm tracking-widest text-center select-text mb-1">renanpgranzotti@gmail.com - (19) 99583-1065</p>
    </section>
  );
};

export default Footer
