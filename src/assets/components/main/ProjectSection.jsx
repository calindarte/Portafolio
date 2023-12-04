import imgTODO from "../../images/ImgTodo.png";
import imgRickAndMorty from "../../images/imgRickandMorty.png";
import imgPage from "../../images/imgPage.png";
import imgNetflix from "../../images/imgNetflix.png";
import imgHome from "../../images/imgHome.png";
import imgFormulario from "../../images/imgFormulario.png";

const urlTodo = "https://todo-react-tailwind-bice.vercel.app/";
const urlPage = "https://page-frontend-mentor.vercel.app/";
const urlHome = "https://home-page-react-tailwind-nu.vercel.app/";
const urlNetflix = "https://pagina-netflix.vercel.app/";
const urlFormulario = "https://app-todo-two.vercel.app/";
const urlRickAndMorty = "https://api-rick-morty-sandy.vercel.app/";


import Projects from "../projects/Projects";

const ProjectSection = () => {
  return (
    <section className=" bg-gradient-to-r from-gray-200 to-gray-100 border-[2px] border-y-gray-300/40 px-20 pb-20">
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
  )
}

export default ProjectSection