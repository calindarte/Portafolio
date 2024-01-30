const Skill = ({logo, text}) => {
  return (
    <div className="flex items-center justify-center gap-x-2 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
      <div className="w-12 h-14  md:h-20 md:w-16 ">
      <img src={logo} alt={text} className="object-cover rounded-xl  " />
      </div>
      <span className="font-medium text-sm ">{text}</span>
    </div>
  );
};

export default Skill;
