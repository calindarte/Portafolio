
const NavLink = ({text, id}) => {
  return (
    <div>
        <a href={id} className="relative py-3 group text-sm lg:text-base">
          <span className="group-hover:text-purple-700 dark:group-hover:text-purple-400">{text}</span>
          <span className="absolute bottom-0 left-0 h-[3px] w-full transition-all duration-500 scale-x-0 group-hover:scale-x-100 group-hover:bg-purple-600"></span>
            </a>
    </div>
  )
}

export default NavLink