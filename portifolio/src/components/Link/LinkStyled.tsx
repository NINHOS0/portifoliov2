import { Link, LinkProps } from "react-router-dom";

const LinkStyled = (props: LinkProps) => {
  return (
    <Link {...props} className="w-fit transition-all hover:tracking-[4px] text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">
      {props.children}
    </Link>
  );
};

export default LinkStyled;
