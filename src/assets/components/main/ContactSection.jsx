import ContactForm from "../contact/ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="md:p-36 p-6 bg-hero-pattern dark:bg-dark-hero-pattern dark:text-gray-300">
      <div className="text-center flex flex-col gap-y-8">
        <h1 className=" font-bold md:text-4xl text-xl"> CONTACTO</h1>
        <p className=" md:text-xl text-gray-600 dark:text-gray-300">
          A través del siguiente formulario podremos estar en contacto. Complete
          los campos con su nombre, correo electrónico y mensaje, y estaré
          encantado de responder lo antes posible. ¡Construyamos juntos algo
          increíble!
        </p>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
