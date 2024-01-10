import logo from "../../images/Image_Perfil.jpg";

const HomeSection = () => {
  return (
    <section id="home" className="p-36 bg-hero-pattern dark:bg-dark-hero-pattern dark:text-gray-300 ">
      <div className="flex flex-col gap-y-12 text-center">
        <div className="flex gap-4 items-center justify-center ">
          <img
            src={logo}
            alt=""
            className="h-80 w-80 object-cover rounded-full hover:-translate-x-1 hover:scale-110 duration-300 cursor-pointer"
          />
        </div>
        <h1 className=" font-bold text-6xl">¡Hola! Soy Carlos Santos</h1>
        <p className=" text-xl text-gray-600 dark:text-gray-300">
          Un apasionado desarrollador web en la recta final de culminar la
          carrera de ingeniería de sistemas. Especializado en tecnologías como
          React, JavaScript, Node.js y MySQL, mi enfoque es crear experiencias
          de usuario intuitivas y atractivas. Con habilidades sólidas en Git,
          GitHub y Tailwind CSS, me encanta enfrentar desafíos para ofrecer
          soluciones creativas e innovadoras. ¡Bienvenido a mi mundo de
          desarrollo web!
        </p>
        <div>
          <a href="#projects">
            <button className="py-4 px-16 tracking-wide shadow-xl  bg-[#7843e9] text-white font-bold text-lg rounded-xl hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300">
              PROYECTOS
            </button>
          </a>
        </div>
      </div>
      <div className="text-center pt-20">
        <span className="material-symbols-outlined text-5xl cursor-pointer animate-bounce w-6 h-6">
          keyboard_double_arrow_down
        </span>
      </div>
    </section>
  );
};

export default HomeSection;
