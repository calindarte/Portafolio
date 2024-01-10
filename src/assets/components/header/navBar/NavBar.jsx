import ButtonDarkMode from "../darkMode/ButtonDarkMode";
import NavLink from "./NavLink";



const NavBar = () => {



  return (
    <div className="flex items-center justify-center">
      <nav className=" flex  gap-x-8 font-semibold text-sm tracking-tight ">
        <NavLink text="INICIO" id="#home" />
        <NavLink text="SOBRE MI" id="#about" />
        <NavLink text="PROYECTOS" id="#projects" />
        <NavLink text="CONTACTO" id="#contact" />
        <ButtonDarkMode />
      </nav>
      
        
    </div>
  );
};

export default NavBar;
