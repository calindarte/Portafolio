import NavBar from "./assets/components/navBar/NavBar";
import logo from "./assets/images/Image_Perfil.jpg";
import imgHTML from "./assets/images/HTML5_Badge.svg.png";
import imgCSS from "./assets/images/CSS3_logo.svg.png";
import imgJS from "./assets/images/JavaScript-logo.png/";
import imgReact from "./assets/images/React-icon.svg.png";
import imgTailwind from "./assets/images/Tailwind_CSS_Logo.svg.png";
import imgMySQL from "./assets/images/mysql-5-logo.png";
import imgGit from "./assets/images/Git-Icon-1788C.png";
import imgGitHub from "./assets/images/25231.png";
import imgTODO from "./assets/images/ImgTodo.png";

import Skill from "./assets/components/about/Skill";

const App = () => {
  return (
    <>
      <header className="top-0 left-0 right-0 py-5 px-12 fixed bg-white shadow-md">
        <div className="flex justify-between ">
          <div className="flex gap-4 items-center">
            <img src={logo} alt="" className="h-12 w-12 rounded-full" />
            <h3 className="font-bold tracking-tight">CARLOS LINDARTE</h3>
          </div>
          <NavBar />
        </div>
      </header>
      <main className="">
        <section className="p-36 bg-gray-200 shadow-2xl">
          <div className="flex flex-col gap-y-12 text-center pt-32">
            <h1 className=" font-bold text-6xl">HEY, IM CARLOS LINDARTE</h1>
            <p className=" text-2xl text-gray-600">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
            <div>
              <button className="py-4 px-16 tracking-wide shadow-xl  bg-[#7843e9] text-white font-bold text-lg rounded-xl hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300">
                PROJECTS
              </button>
            </div>
          </div>
          <div className="text-center pt-20">
            <span className="material-symbols-outlined text-5xl cursor-pointer">
              keyboard_double_arrow_down
            </span>
          </div>
        </section>
        <section className=" bg-gray-300 shadow-2xl">
          <div className="flex flex-col gap-y-8 text-center p-40">
            <h2 className="font-bold text-4xl">ABOUT ME</h2>
            <p className=" text-xl  text-gray-600 px-10">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>

            <div className="grid grid-cols-2 gap-x-20 ">
              <div className="text-left">
                <h4 className="text-2xl font-bold">Get to know me!</h4>
                <p className="py-6 tracking-wider text-lg  text-gray-800">
                  Im a Frontend Web Developer building the Front-end of
                  Websites and Web Applications that leads to the success of the
                  overall product. Check out some of my work in the Projects
                  section.I also like sharing content related to the stuff that
                  I have learned over the years in Web Development so it can
                  help other people of the Dev Community. Feel free to Connect
                  or Follow me on my Linkedin where I post useful content
                  related to Web Development and Programming Im open to Job
                  opportunities where I can contribute, learn and grow. If you
                  have a good opportunity that matches my skills and experience
                  then hesitate to contact me.
                </p>
                <div>
                  <button className="py-4 px-16 tracking-wide shadow-xl  bg-[#7843e9] text-white font-bold text-lg rounded-xl hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300">
                    CONTACT
                  </button>
                </div>
              </div>
              <div className="text-left">
                <h4 className="text-2xl font-bold">My Skills</h4>
                <div className="grid grid-cols-3 gap-y-8 gap-x-4 pt-6">
                  <Skill logo={imgHTML} text="HTML" />
                  <Skill logo={imgCSS} text="CSS" />
                  <Skill logo={imgJS} text="JavaScrip" />
                  <Skill logo={imgReact} text="React" />
                  <Skill logo={imgTailwind} text="Tailwind" />
                  <Skill logo={imgMySQL} text="MySQL" />
                  <Skill logo={imgGit} text="Git" />
                  <Skill logo={imgGitHub} text="GitHub" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" bg-gray-200 shadow-2xl px-20">
          <div className="flex flex-col gap-y-8 text-center p-40">
            <h2 className="font-bold text-4xl">PROJECTS</h2>
            <p className=" text-xl  text-gray-600 px-10">
              Here you will find some of the personal and clients projects that
              I created with each project containing its own case study
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-20">
            <div className="text-center">
              <a
                href="https://todo-react-tailwind-bice.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={imgTODO}
                  alt="Logo Todo APP"
                  className="w-100 h-100 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300"
                />
              </a>
            </div>
            <div className="text-left">
              <span className="text-2xl font-bold">Titulo</span>
              <p className="py-6 tracking-wider text-lg  text-gray-800">
                Dopefolio is a successful Open-Source project that I created
                which have been featured on some of the biggest tech sites like
                CSS-Tricks, Hostinger, etc & used by thousands of developers
                globally
              </p>
              <button className="py-4 px-16 tracking-wide shadow-xl  bg-[#7843e9] text-white font-bold text-lg rounded-xl  hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300">
                View repository
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
