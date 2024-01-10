import imgHTML from "../../images/HTML5_Badge.svg.png";
import imgCSS from "../../images/CSS3_logo.svg.png";
import imgJS from "../../images/JavaScript-logo.png/";
import imgReact from "../../images/React-icon.svg.png";
import imgTailwind from "../../images/Tailwind_CSS_Logo.svg.png";
import imgMySQL from "../../images/mysql-5-logo.png";
import imgGit from "../../images/Git-Icon-1788C.png";
import imgGitHub from "../../images/25231.png";

import Skill from "../about/Skill";

const AboutSection = () => {
  return (
    <section id='about' className=" bg-gradient-to-r from-gray-100 to-gray-200 border-[2px] border-y-gray-300/40 dark:bg-gradient-to-r dark:from-zinc-800 dark:to-zinc-900 dark:text-gray-300 dark:border-0">
          <div className="flex flex-col gap-y-8 text-center p-40">
            <h2 className="font-bold text-4xl">SOBRE MI</h2>
            <p className=" text-xl  text-gray-600 px-10 dark:text-gray-300">
              Aquí encontrarás más información sobre mí, lo que hago y mis
              habilidades actuales principalmente en términos de programación y
              tecnología.
            </p>

            <div className="grid grid-cols-2 gap-x-20 py-8">
              <div className="text-left">
                <h4 className="text-2xl font-bold">¡Llegar a conocerme!</h4>
                <p className="py-6 tracking-tighter  text-lg text-justify text-gray-800 dark:text-gray-300">
                  <p>
                    Desde el inicio de mi viaje en el <b>desarrollo web</b>, he
                    encontrado en la creación digital mi verdadera pasión. Mi
                    travesía comenzó como un estudiante de{" "}
                    <b>ingeniería de sistemas</b>, y a lo largo de mi carrera,
                    he abrazado la magia de transformar líneas de código en
                    experiencias palpables. En mis <b>proyectos</b> más
                    destacados, he logrado no solo cumplir con las expectativas
                    técnicas, sino superarlas. Cada desafío ha sido una
                    oportunidad para aprender y perfeccionar mis habilidades. Mi
                    enfoque va más allá de la programación; me dedico a
                    construir soluciones que no solo funcionan, sino que
                    cautivan a los usuarios.
                  </p>
                  <br />
                  La elegancia y eficacia se han vuelto inseparables de mi
                  proceso creativo, permitiéndome diseñar <b>interfaces</b>{" "}
                  modernas e intuitivas. Con metas enfocadas en el aprendizaje
                  continuo y la búsqueda constante de la excelencia, mi viaje en
                  el desarrollo web es un camino emocionante hacia la innovación
                  y la creación de tecnología que impacta de manera positiva.
                  ¡Acompáñame en este viaje de transformación digital!
                </p>
                <div>
                  <a href="#contact">
                  <button className="py-4 px-16 tracking-wide shadow-xl  bg-[#7843e9] text-white font-bold text-lg rounded-xl hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300">
                    CONTACT
                  </button>
                  </a>
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
  )
}

export default AboutSection