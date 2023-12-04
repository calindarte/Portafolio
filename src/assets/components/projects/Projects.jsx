const Projects = ({ image, title, description, url }) => {
  return (
    <div className="grid grid-cols-2 gap-x-20">
      <div className="text-center">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={image}
            alt="Logo Todo APP"
            className="w-100 h-100 rounded-3xl hover:-translate-x-1 hover:scale-110 duration-300 "
          />
        </a>
      </div>
      <div className="text-left">
        <span className="text-2xl font-bold">{title}</span>
        <p className="py-4 tracking-wider text-lg  text-gray-800">
          {description}
        </p>
        <div className="py-6 ">
        <a href={url} target="_blank" rel="noreferrer">
          <span className="py-4 px-16 tracking-wide shadow-xl  bg-[#7843e9] text-white font-bold text-lg rounded-xl  hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300">
            VISITAR
          </span>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
