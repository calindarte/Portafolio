import { useEffect, useState } from "react";
import IconLight from "./IconLight";
import IconDark from "./IconDark";

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
            darkMode? <IconLight className="fill-gray-300"/> : <IconDark/>
        }
        
    </button>
    </div>
  )
}

export default ButtonDarkMode
