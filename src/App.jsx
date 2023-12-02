import NavBar from "./assets/components/navBar/NavBar";
import logo from "./assets/images/Image_Perfil.jpg";

const App = () => {
  return (
    <>
      <header className="top-0 left-0 right-0 py-5 px-12 fixed bg-white shadow-md">
        <div className="flex justify-between ">
          <div className="flex gap-4 items-center">
            <img src={logo} alt="" className="h-12 w-12 rounded-full" />
            <h3 className="font-bold">CARLOS LINDARTE</h3>
          </div>
          <NavBar/>
          
        </div>
      </header>
      <main className="">
        <section className="p-36 bg-gray-200 shadow-2xl">
          <div className="flex flex-col gap-y-12 text-center pt-32">
            <h1 className=" font-bold text-6xl">HEY, I'M CARLOS LINDARTE</h1>
            <p className=" text-2xl text-gray-600">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
            <div>
              <button className="py-4 px-16 tracking-wide shadow-xl  bg-[#7843e9] text-white font-bold text-lg rounded-xl">
                PROJECTS
              </button>
            </div>
          </div>
          <div className="text-center pt-20">
            <span className="material-symbols-outlined text-3xl cursor-pointer">
              expand_circle_down
            </span>
          </div>
        </section>
        <section className="p-36 bg-gray-300 shadow-2xl">
          <div className="flex flex-col gap-y-8 text-center">
            <h1 className=" font-bold text-6xl">HEY, I'M CARLOS LINDARTE</h1>
            <p className=" text-2xl opacity-90">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
            <div>
              <button className="py-4 px-16 tracking-wide shadow-xl  bg-[#7843e9] text-white font-bold text-lg rounded-xl">
                PROJECTS
              </button>
            </div>
          <div className="text-center pt-20">
            <span className="material-symbols-outlined text-3xl cursor-pointer">
              expand_circle_down
            </span>
          </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
