import imgUdemy from "../../images/imgUdemy.png";
import imgUdemyReact from "../../images/ImgUdemyReact.png";


const CourseSection = () => {
  return (
    <section className="md:p-36 p-6 bg-gradient-to-r from-gray-200 to-gray-200 border-[2px] border-y-gray-300/40 dark:bg-gradient-to-l dark:from-zinc-800 dark:to-zinc-900 dark:text-gray-300 dark:border-0">
      <div className="flex flex-col gap-y-8 text-center ">
        <h1 className=" font-bold md:text-4xl text-xl">CERTIFICACIONES Y CURSOS</h1>
        <p className=" md:text-xl text-gray-600 dark:text-gray-300">
          Durante mi viaje profesional y académico, he buscado constantemente
          oportunidades para ampliar mis conocimientos y habilidades. Algunas de
          las certificaciones y cursos relevantes que he completado incluyen:
        </p>
      </div>
      <div className="grid md:grid-cols-2 items-center justify-center gap-12 md:p-20 p-10">
        <div>
          <a
            href="https://drive.google.com/file/d/18iCnVvLlKAnThHPjQYBh5Dt0jIG-wEBp/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={imgUdemy}
              alt="imgUdemy"
              className=" hover:-translate-x-1 hover:scale-90 duration-300 border-2 border-gray-700/75"
            />
          </a>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1RU5pEu278l_AkfbsBOa-q1-LftRvxYtx/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={imgUdemyReact}
              alt="imgUdemy"
              className="hover:-translate-x-1 hover:scale-90 duration-300 border-2 border-purple-600/75"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
