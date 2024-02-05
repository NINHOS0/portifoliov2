import { ReactNode } from "react";

type ISkillCard = {
    icon: any,
    children: ReactNode
}

const SkillCard = ({ icon, children }: ISkillCard) => {
  return (
    <div className="flex gap-1.5 items-center p-3 outline outline-1 rounded-sm h-min  text-sm lg:text-base">
      {icon} {children}
    </div>
  );
};

export default SkillCard;
