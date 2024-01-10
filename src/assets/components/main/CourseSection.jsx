import imgUdemy from "../../images/imgUdemy.png";

const CourseSection = () => {
  return (
    <section className="p-36 bg-gradient-to-r from-gray-200 to-gray-200 border-[2px] border-y-gray-300/40 dark:bg-gradient-to-l dark:from-zinc-800 dark:to-zinc-900 dark:text-gray-300 dark:border-0">
      <div className="flex flex-col gap-y-8 text-center ">
        <h1 className=" font-bold text-4xl">CERTIFICACIONES Y CURSOS</h1>
        <p className=" text-xl text-gray-600 dark:text-gray-300">
          Durante mi viaje profesional y académico, he buscado constantemente
          oportunidades para ampliar mis conocimientos y habilidades. Algunas de
          las certificaciones y cursos relevantes que he completado incluyen:
        </p>
      </div>
      <div className="grid grid-cols-2 items-center justify-center gap-12 p-20">
        <div>
          <a
            href="https://drive.google.com/file/d/18iCnVvLlKAnThHPjQYBh5Dt0jIG-wEBp/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={imgUdemy}
              alt=""
              className=" hover:-translate-x-1 hover:scale-90 duration-300 border-2 border-gray-700/75"
            />
          </a>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/18iCnVvLlKAnThHPjQYBh5Dt0jIG-wEBp/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={imgUdemy}
              alt=""
              className="hover:-translate-x-1 hover:scale-90 duration-300 border-2 border-purple-600/75"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
