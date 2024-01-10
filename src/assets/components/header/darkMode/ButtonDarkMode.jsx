import { useEffect, useState } from "react";

const inicialDarkMode= localStorage.getItem('theme') === 'dark';
const ButtonDarkMode = () => {

    const [darkMode, setDarkMode] = useState(inicialDarkMode)

    useEffect(()=>{
        if(darkMode){
          document.documentElement.classList.add('dark')
          localStorage.setItem('theme','dark');
        }else{
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme','light');
        }
      },[darkMode])



  return (
    <div>
    <button onClick={() => setDarkMode(!darkMode)}  className="flex items-center">
        {
            darkMode? <span className="material-symbols-outlined">
            light_mode
            </span> : <span className="material-symbols-outlined">dark_mode</span>
        }
        
    </button>
    </div>
  )
}

export default ButtonDarkMode
