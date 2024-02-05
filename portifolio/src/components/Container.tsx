import { ReactNode } from "react";

type IContainer = {
    children?: ReactNode
}

const Container = ({ children }: IContainer) => {
  return (
    <div className="flex justify-center min-h-[100vh] bg-white dark:bg-neutral-950 dark:text-white">
      <main className="flex flex-col w-full max-w-[1000px] mx-0 sm:mx-8 lg:mx-20 px-6 pt-8 pb-2 transition-all duration-500">{children}</main>
    </div>
  );
};

export default Container
