const Skill = ({logo, text}) => {
  return (
    <div className="flex items-center gap-x-2">
      <img src={logo} alt={text} className="h-14 w-18 rounded-xl" />
      <span className="font-medium text-sm ">{text}</span>
    </div>
  );
};

export default Skill;
