import IconArrowDown from "./IconArrowDown";

const ExperienceSection = () => {
  return (
    <section className="p-36 bg-gradient-to-r from-gray-300 to-gray-200 border-[2px] border-y-gray-300/40 dark:bg-gradient-to-r dark:from-zinc-800 dark:to-zinc-900 dark:text-gray-300 dark:border-0">
      <div className="flex flex-col gap-y-12 text-center ">
        <h1 className=" font-bold text-4xl">EXPERIENCIA LABORAL Y EDUCACIÓN</h1>
        <p className=" text-xl text-gray-600 dark:text-gray-300">
          Con una trayectoria de 2 a 3 años en el campo del desarrollo web, he
          acumulado valiosa experiencia trabajando en proyectos diversos tanto a
          nivel académico como laboral. En mi rol como Desarrollador Web, tuve
          la oportunidad de contribuir al desarrollo y mantenimiento de
          aplicaciones web utilizando tecnologías avanzadas como React, Node.js
          y MySQL. Además, durante mi periodo academico, me sumergí en el
          desarrollo de nuevas funcionalidades y tecnologías como flutter,
          tailwind, contribuyendo al mejoramiento continuo. Actualmente, me
          encuentro cursando el octavo semestre de mi carrera de Ingeniería de
          Sistemas en la Universidad del Cesar, donde he enfocado mis estudios
          en el desarrollo web tanto Front-end como Back-end. Mis proyectos
          académicos han abarcado una amplia gama de temas. Además, he llevado a
          cabo diversos proyectos personales que demuestran mi capacidad para
          trabajar de manera independiente y aplicar creativamente los
          conocimientos adquiridos.
        </p>
      </div>
      <div className="flex justify-center pt-20">
  

        <IconArrowDown className="animate-bounce fill-gray-800 dark:fill-gray-300" />
       
      </div>
    </section>
  );
};

export default ExperienceSection;
