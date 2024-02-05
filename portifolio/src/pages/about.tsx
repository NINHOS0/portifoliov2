const About = () => {
  return (
    <>
      <section>
        <h1 className="text-2xl font-bold">Renan Granzotti</h1>
        <h2 className="text-lg mt-[-.4em] opacity-40">Web Developer</h2>
        <p className="text-md mt-14 text-right max-w-[700px] ml-auto">
          <strong>Hello!</strong> Eu sou <strong>Renan Granzotti</strong>, tenho 18 anos. Cursei ensino médio técnico na área de TI, quando
          comecei no desenvolvimento web no FrontEnd. Após a conclusão do ensino médio continuei meu estudo na área, e estudando até o momento atual.
        </p>
      </section>
      <section className="mt-24 max-w-[600px]">
        <h1 className="text-2xl font-bold underline mb-4">Domínios</h1>
        <ul className="text-md">
          <li>
            - Inglês - <span className="text-yellow-600 font-semibold">Básico</span>
          </li>
          <li>
            - Php - <span className="text-green-600 font-semibold">Básico</span>{" "}
          </li>
          <li>- HTML, CSS e JS</li>
          <li>- Tailwind </li>
          <li>
            - React - <span className="text-green-600 font-semibold">Básico</span>{" "}
          </li>
          <li>
            - NextJS - <span className="text-green-600 font-semibold">Básico</span>{" "}
          </li>
          <li>
            - NodeJS - <span className="text-green-600 font-semibold">Básico</span>{" "}
          </li>
          <li>
            - Banco de Dados - <strong>MySql</strong>{" "}
          </li>
        </ul>
      </section>
    </>
  );
};

export default About;
