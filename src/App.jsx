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
import imgRickAndMorty from "./assets/images/imgRickandMorty.png";
import imgPage from "./assets/images/imgPage.png";
import imgNetflix from "./assets/images/imgNetflix.png";
import imgHome from "./assets/images/imgHome.png";
import imgFormulario from "./assets/images/imgFormulario.png";
import imgUdemy from "./assets/images/imgUdemy.png";


const urlTodo = "https://todo-react-tailwind-bice.vercel.app/";
const urlPage = "https://page-frontend-mentor.vercel.app/";
const urlHome = "https://home-page-react-tailwind-nu.vercel.app/";
const urlNetflix = "https://pagina-netflix.vercel.app/";
const urlFormulario = "https://app-todo-two.vercel.app/";
const urlRickAndMorty = "https://api-rick-morty-sandy.vercel.app/";

import Skill from "./assets/components/about/Skill";
import Projects from "./assets/components/projects/Projects";

const App = () => {
  return (
    <>
      <header className="top-0 left-0 right-0 py-5 px-12 fixed bg-white shadow-md z-10">
        <div className="flex justify-between ">
          <div className="flex  items-center gap-x-1 hover:-translate-x-1 hover:scale-110 duration-300 cursor-pointer">
            <span className="material-symbols-outlined text-4xl animate-spin">
              deployed_code
            </span>
            <h3 className="font-bold tracking-tight">PORTAFOLIO</h3>
          </div>
          <NavBar />
        </div>
      </header>
      <main className="">
        <section className="p-36 bg-gray-200 shadow-2xl">
          <div className="flex flex-col gap-y-12 text-center">
            <div className="flex gap-4 items-center justify-center">
              <img
                src={logo}
                alt=""
                className="h-80 w-80 rounded-full hover:-translate-x-1 hover:scale-110 duration-300 cursor-pointer"
              />
            </div>
            <h1 className=" font-bold text-6xl">¡Hola! Soy Carlos Lindarte</h1>
            <p className=" text-xl text-gray-600">
              Un apasionado desarrollador web en la recta final de culminar la
              carrera de ingeniería de sistemas. Especializado en tecnologías
              como React, JavaScript, Node.js y MySQL, mi enfoque es crear
              experiencias de usuario intuitivas y atractivas. Con habilidades
              sólidas en Git, GitHub y Tailwind CSS, me encanta enfrentar
              desafíos para ofrecer soluciones creativas e innovadoras.
              ¡Bienvenido a mi mundo de desarrollo web!
            </p>
            <div>
              <button className="py-4 px-16 tracking-wide shadow-xl  bg-[#7843e9] text-white font-bold text-lg rounded-xl hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300">
                PROYECTOS
              </button>
            </div>
          </div>
          <div className="text-center pt-20">
            <span className="material-symbols-outlined text-5xl cursor-pointer animate-bounce w-6 h-6">
              keyboard_double_arrow_down
            </span>
          </div>
        </section>
        <section className=" bg-gray-300 shadow-2xl">
          <div className="flex flex-col gap-y-8 text-center p-40">
            <h2 className="font-bold text-4xl">SOBRE MI</h2>
            <p className=" text-xl  text-gray-600 px-10">
              Aquí encontrarás más información sobre mí, lo que hago y mis
              habilidades actuales principalmente en términos de programación y
              tecnología.
            </p>

            <div className="grid grid-cols-2 gap-x-20 py-8">
              <div className="text-left">
                <h4 className="text-2xl font-bold">¡Llegar a conocerme!</h4>
                <p className="py-6 tracking-wider text-lg text-justify text-gray-800">
                  Desde el inicio de mi viaje en el desarrollo web, he
                  encontrado en la creación digital mi verdadera pasión. Mi
                  travesía comenzó como un estudiante de ingeniería de sistemas,
                  y a lo largo de mi carrera, he abrazado la magia de
                  transformar líneas de código en experiencias palpables. En mis
                  proyectos más destacados, he logrado no solo cumplir con las
                  expectativas técnicas, sino superarlas. Cada desafío ha sido
                  una oportunidad para aprender y perfeccionar mis habilidades.
                  Mi enfoque va más allá de la programación; me dedico a
                  construir soluciones que no solo funcionan, sino que cautivan
                  a los usuarios. La elegancia y eficacia se han vuelto
                  inseparables de mi proceso creativo, permitiéndome diseñar
                  interfaces modernas e intuitivas. Con metas enfocadas en el
                  aprendizaje continuo y la búsqueda constante de la excelencia,
                  mi viaje en el desarrollo web es un camino emocionante hacia
                  la innovación y la creación de tecnología que impacta de
                  manera positiva. ¡Acompáñame en este viaje de transformación
                  digital!
                </p>
                <div>
                  <button className="py-4 px-16 tracking-wide shadow-xl  bg-[#7843e9] text-white font-bold text-lg rounded-xl hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300">
                    CONTACT
                  </button>
                </div>
              </div>
              <div className="text-left">
                <h4 className="text-2xl font-bold text-center">
                  Mis Habilidades
                </h4>
                <div className="grid grid-cols-3 gap-y-8 gap-x-4 pt-8">
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
        <section className=" bg-gray-200 shadow-2xl px-20 pb-20">
          <div className="flex flex-col gap-y-8 text-center p-36">
            <h2 className="font-bold text-4xl">PROYECTOS</h2>
            <p className=" text-xl  text-gray-600 px-10">
              Explora mi trabajo en algunos proyectos destacados que reflejan mi
              habilidad y creatividad en el desarrollo web
            </p>
          </div>
          <div className="flex flex-col gap-y-20">
            <Projects
              image={imgTODO}
              title="TODO APP"
              description="¡Una aplicación clásica con funcionalidad adicional! Cambia entre temas oscuros
                y claros, y experimenta la diversión de reorganizar elementos
                con solo arrastrar y soltar. Desarrollada con React y Tailwind, esta aplicación ofrece
                simplicidad con un toque interactivo."
              url={urlTodo}
            />
            <Projects
              image={imgPage}
              title="E-COMMERCE PRODUCT PAGE"
              description="Una atractiva página de productos, donde se demuestran habilidades avanzadas en JavaScript. La página incorpora una elegante galería de productos y un carrito de compras dinámico. Se utilizaron tecnologías como React, Tailwind y JavaScript para crear una experiencia interactiva. Además, se aseguró de que la página fuera completamente responsive."
              url={urlPage}
            />
            <Projects
              image={imgHome}
              title="ROOM HOMEPAGE"
              description="Esta atractiva Página de inicio fue completado con éxito, poniendo a prueba habilidades destacadas de diseño. Se utilizó React y Tailwind para una estructura moderna y eficiente, y se implementó un diseño completamente responsive. Además, se añadió funcionalidad en JavaScript, agregando una capa dinámica a la experiencia."
              url={urlHome}
            />
            <Projects
              image={imgNetflix}
              title="PAGINA NETFLIX"
              description="Una pagina cautivadora que presenta una interfaz inspirada en Netflix. Creada con HTML, CSS, JavaScript y jQuery, esta plataforma ofrece una navegación fluida y atractiva. El diseño es completamente responsive. Explora la fusión de tecnologías modernas y diseño intuitivo en esta emocionante recreación de la interfaz de Netflix."
              url={urlNetflix}
            />
            <Projects
              image={imgFormulario}
              title="FORMULARIO TODO"
              description="Una página de TODO que permite gestionar tareas de manera eficiente. Aquí puedes agregar, eliminar, modificar, priorizar y tachar las tareas según tus necesidades. Diseñada para la máxima flexibilidad, esta página te brinda el control total sobre tu lista de tareas."
              url={urlFormulario}
            />
            <Projects
              image={imgRickAndMorty}
              title="RICK AND MORTY"
              description="Esta página utiliza una API pública con detalles de todos los personajes de la serie. ¡Disfruta de una aventura intergaláctica desde la comodidad de tu pantalla con esta página!"
              url={urlRickAndMorty}
            />
          </div>
        </section>
        <section className="p-36 bg-gray-300 shadow-2xl">
          <div className="flex flex-col gap-y-12 text-center ">
            <h1 className=" font-bold text-4xl">
              EXPERIENCIA LABORAL Y EDUCACIÓN
            </h1>
            <p className=" text-xl text-gray-600">
              Con una trayectoria de 2 a 3 años en el campo del desarrollo web,
              he acumulado valiosa experiencia trabajando en proyectos diversos
              tanto a nivel académico como laboral. En mi rol como Desarrollador
              Web, tuve la oportunidad de contribuir al desarrollo y
              mantenimiento de aplicaciones web utilizando tecnologías avanzadas
              como React, Node.js y MySQL. Además, durante mi periodo academico,
              me sumergí en el desarrollo de nuevas funcionalidades y
              tecnologías como flutter, tailwind, contribuyendo al mejoramiento
              continuo. Actualmente, me encuentro cursando el octavo semestre de
              mi carrera de Ingeniería de Sistemas en la Universidad del Cesar,
              donde he enfocado mis estudios en el desarrollo web tanto
              Front-end como Back-end. Mis proyectos académicos han abarcado una
              amplia gama de temas. Además, he llevado a cabo diversos proyectos
              personales que demuestran mi capacidad para trabajar de manera
              independiente y aplicar creativamente los conocimientos
              adquiridos.
            </p>
          </div>
          <div className="text-center pt-20">
            <span className="material-symbols-outlined text-5xl cursor-pointer animate-bounce w-6 h-6">
              keyboard_double_arrow_down
            </span>
          </div>
        </section>
        <section className="p-36 bg-gray-200 shadow-2xl">
          <div className="flex flex-col gap-y-12 text-center ">
            <h1 className=" font-bold text-4xl">CERTIFICACIONES Y CURSOS</h1>
            <p className=" text-xl text-gray-600">
              Durante mi viaje profesional y académico, he buscado
              constantemente oportunidades para ampliar mis conocimientos y
              habilidades. Algunas de las certificaciones y cursos relevantes
              que he completado incluyen:
            </p>
          </div>
          <div className="grid grid-cols-2 items-center justify-center gap-12 p-20">
          <div>
          <a href="https://drive.google.com/file/d/18iCnVvLlKAnThHPjQYBh5Dt0jIG-wEBp/view?usp=sharing" target="_blank" rel="noreferrer">
            <img src={imgUdemy} alt="" className=" hover:-translate-x-1 hover:scale-90 duration-300 border-2 border-gray-700/75"/>
          </a>
          </div>
          <div>
          <a href="https://drive.google.com/file/d/18iCnVvLlKAnThHPjQYBh5Dt0jIG-wEBp/view?usp=sharing" target="_blank" rel="noreferrer">
            <img src={imgUdemy} alt="" className="hover:-translate-x-1 hover:scale-90 duration-300 border-2 border-purple-600/75"/>
          </a>
          </div>
          
          </div>
          
          
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
