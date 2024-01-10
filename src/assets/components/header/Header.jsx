import NavBar from "./navBar/NavBar"

const Header = () => {
  return (
    <header className="top-0 left-0 right-0 py-5 px-12 fixed bg-white shadow-md z-40 dark:bg-zinc-950 dark:text-gray-300 ">
        <div className="flex justify-between ">
          <div className="flex  items-center gap-x-1 hover:-translate-x-1 hover:scale-110 duration-300 cursor-pointer">
            <span className="material-symbols-outlined text-4xl animate-spin-slow">
              deployed_code
            </span>
            <h3 className="font-bold tracking-tight"><a href="#home">PORTAFOLIO</a></h3>
          </div>
          <NavBar />
        </div>
      </header>
  )
}

export default Header