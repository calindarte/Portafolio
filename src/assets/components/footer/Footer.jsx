import logoLinkedin from "../../images/linkedin_icon-icons.com_49942.png";
import logoGithub from "../../images/github-logo_icon-icons.com_73546.png";
import logoFacebook from "../../images/Facebook_Rounded_Solid_icon-icons.com_61562.png";
import logoGmail from "../../images/logoGmail.png";

const urlLinkedin = "https://www.linkedin.com/in/carlos-lindarte-b371a0259/";
const urlGithub = "https://github.com/calindarte";
const urlFacebook = "https://web.facebook.com/CarlosSanto01/";
const urlGmail = "https://mail.google.com/mail/u/1/#inbox";

import RedesSociales from "./RedesSociales";

const Footer = () => {
  return (
    <footer className="bg-[#000] text-white px-10 dark:bg-zinc-950 ">
      <div className="grid grid-cols-2 p-10 gap-40">
        <div className="flex flex-col gap-8 ">
          <h4 className="font-semibold tracking-tight text-xl">
            Carlos Santos
          </h4>
          <p className="text-sm">
            Un desarrollador web especializado en el desarrollo tanto de
            frontend como de backend, dedicado a la construcción de interfaces
            para sitios y aplicaciones web que impulsan el éxito integral del
            producto.
          </p>
        </div>

        <div className="flex flex-col items-end gap-4">
          <h4 className="font-semibold tracking-tight text-xl">
            Redes Sociales
          </h4>
          <div className="flex gap-2 ">
            <RedesSociales url={urlLinkedin} logo={logoLinkedin} />
            <RedesSociales url={urlGithub} logo={logoGithub} />
            <RedesSociales url={urlFacebook} logo={logoFacebook} />
            <RedesSociales url={urlGmail} logo={logoGmail} />
          </div>
        </div>
      </div>
      <div className="text-center text-xs font-thin p-8 flex flex-col gap-y-10 animate-pulse">
        <hr />
        <span>
          © Derechos de autor 2023. Hecho por <b>Carlos Santos</b>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
