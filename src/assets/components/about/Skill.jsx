const Skill = ({logo, text}) => {
  return (
    <div className="flex items-center gap-x-2 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
      <img src={logo} alt={text} className="h-16 w-18 rounded-xl " />
      <span className="font-medium text-sm ">{text}</span>
    </div>
  );
};

export default Skill;
