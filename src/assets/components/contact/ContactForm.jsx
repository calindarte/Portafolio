import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    // Lógica para manejar los datos del formulario (puedes enviarlos a tu servidor, por ejemplo)
    console.log("Datos del formulario:", data);
    
  };
  return (
    <div className="md:px-24 md:pt-24 pt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-10 flex flex-col gap-4 shadow-2xl text-sm font-medium dark:bg-zinc-900 dark:text-zinc-300"
      >
        <div className="flex flex-col gap-3 ">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            placeholder="Ingrese Su Nombre"
            {...register("nombre", { required: true })}
            className="bg-[#f0f0f0] p-2 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            placeholder="Ingrese Su Correo electrónico"
            
            {...register("email", { required: true })}
            className="bg-[#f0f0f0] p-2 rounded-lg"
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            placeholder="Ingrese Su Mensaje"
            {...register("mensaje", { required: true })}
            cols="30"
            rows="10"
            className="bg-[#f0f0f0] p-4 rounded-lg  "
          ></textarea>
        </div>
        <div className="text-right py-4">
          <button
            type="submit"
            className="text-sm px-6 py-3 md:py-4 md:px-16 tracking-wide shadow-xl  bg-[#7843e9] text-white font-bold md:text-lg rounded-xl hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
