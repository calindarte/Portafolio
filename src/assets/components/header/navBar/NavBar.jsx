import NavLink from "./NavLink"

const NavBar = () => {
  return (
    <div className="flex items-center justify-center">
            <nav className=" flex  gap-x-8 font-semibold text-sm tracking-tight ">
              <NavLink text='HOME'/>
              <NavLink text='ABOUT'/>
              <NavLink text='PROJECTS'/>
              <NavLink text='CONTACT'/>

            </nav>
          </div>
  )
}

export default NavBar
