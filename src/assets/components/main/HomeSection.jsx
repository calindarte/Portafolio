import logo from "../../images/Image_Perfil.jpg";
import IconArrowDown from "./IconArrowDown";

const HomeSection = () => {
  return (
    <section id="home" className="pt-28 pb-10 px-4 md:p-36 bg-hero-pattern dark:bg-dark-hero-pattern dark:text-gray-300 ">
      <div className="flex flex-col md:gap-y-12 gap-y-6 text-center">
        <div className="flex gap-4 items-center justify-center ">
          <img
            src={logo}
            alt="logo-perfil"
            className="w-52 h-52 md:h-80 md:w-80 object-cover rounded-full hover:-translate-x-1 hover:scale-110 duration-300 cursor-pointer"
          />
        </div>
        <h1 className=" font-bold md:text-6xl text-2xl">¡Hola! Soy Carlos Dev</h1>
        <p className=" md:text-xl text-gray-600 dark:text-gray-300">
          Un apasionado desarrollador web en la recta final de culminar la
          carrera de ingeniería de sistemas. Especializado en tecnologías como
          Html, Css, JavaScript, React, Next, mi enfoque es crear experiencias
          de usuario intuitivas y atractivas. Con habilidades sólidas en Git,
          GitHub y Tailwind CSS, me encanta enfrentar desafíos para ofrecer
          soluciones creativas e innovadoras. ¡Bienvenido a mi mundo de
          desarrollo web!
        </p>
        <div>
          <a href="#projects">
            <button className="text-sm px-6 py-3 md:py-4 md:px-16 tracking-wide shadow-xl  bg-[#7843e9] text-white font-bold md:text-lg rounded-xl hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300">
              PROYECTOS
            </button>
          </a>
        </div>
      </div>

      <div className="flex justify-center pt-20">
        
      
        <IconArrowDown className="animate-bounce fill-gray-800 dark:fill-gray-300 w-8 h-8 md:w-11 md:h-11 " />
       
      </div>
    </section>
  );
};

export default HomeSection;
