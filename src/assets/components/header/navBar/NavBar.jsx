import NavLink from "./NavLink"

const NavBar = () => {
  return (
    <div className="flex items-center justify-center">
            <nav className=" flex  gap-x-8 font-semibold text-sm tracking-tight ">
              <NavLink text='HOME' id='#home'/>
              <NavLink text='ABOUT' id='#about'/>
              <NavLink text='PROJECTS' id='#projects'/>
              <NavLink text='CONTACT' id='#contact'/>

            </nav>
          </div>
  )
}

export default NavBar
