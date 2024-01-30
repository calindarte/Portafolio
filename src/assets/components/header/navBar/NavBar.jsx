import { useState } from "react";
import IconMenu from "../IconMenu";
import ButtonDarkMode from "../darkMode/ButtonDarkMode";
import NavLink from "./NavLink";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  return (
    <div className="flex items-center justify-center md:gap-x-8 gap-x-3">
      <nav
        className={`md:static md:flex  md:gap-x-8 font-semibold md:text-sm md:tracking-tight ${
          openMenu
            ? "fixed top-0 left-0 h-full flex w-[60%] flex-col  bg-white dark:bg-zinc-950 px-8 gap-y-8  "
            : "hidden"
        }`}
      >
        <button className="text-left pt-5 md:hidden" onClick={()=>setOpenMenu(false)}>
          X
        </button>
        <NavLink text="INICIO" id="#home" />
        <NavLink text="SOBRE MI" id="#about" />
        <NavLink text="PROYECTOS" id="#projects" />
        <NavLink text="CONTACTO" id="#contact" />
      </nav>
      <button onClick={handleOpenMenu} className="md:hidden dark:fill-gray-300">
        <IconMenu />
      </button>
      <div>
        <ButtonDarkMode />
      </div>
    </div>
  );
};

export default NavBar;
