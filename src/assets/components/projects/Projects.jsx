const Projects = ({ image, title, description, url }) => {
  return (
    <div className="grid md:grid-cols-2 md:gap-x-20 gap-y-8">
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
        <span className="md:text-2xl text-xl font-bold">{title}</span>
        <p className="py-4 tracking-wider md:text-lg  text-gray-800 dark:text-gray-300">
          {description}
        </p>
        <div className="py-6 text-center md:text-left ">
        <a href={url} target="_blank" rel="noreferrer">
          <span className="text-sm px-6 py-3 md:py-4 md:px-16 tracking-wide shadow-xl  bg-[#7843e9] text-white font-bold md:text-lg rounded-xl  hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300">
            VISITAR
          </span>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
