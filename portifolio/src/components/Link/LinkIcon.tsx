import { Link, LinkProps } from "react-router-dom";

const LinkIcon = (props: LinkProps) => {
  return (
    <Link {...props} className="w-10 h-10 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-900 grid place-items-center transition-all text-black dark:text-white">
      {props.children}
    </Link>
  );
};

export default LinkIcon;
