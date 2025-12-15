import { createContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify"

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

const isInitialMount = useRef(true);

useEffect(() => {

  if (isInitialMount.current) {
            if (theme === "light") {
                 document.documentElement.classList.add("dark");
            } else {
                 document.documentElement.classList.remove("dark");
            }
            
            isInitialMount.current = false;
            return;
        }


    if (theme === "light") {
        document.documentElement.classList.add("dark");
          toast.success("DARK MODE Aktif", {
    theme: "dark",closeOnClick: false,pauseOnHover: true,
  })
    } else {
        document.documentElement.classList.remove("dark");
         toast.success(" LIGHT MODE Aktif", {
    theme: "light",closeOnClick: false,pauseOnHover: true,
  })
    }
}, [theme]);

const toggleTheme = () => {
  setTheme(prev => prev === "light" ? "dark" : "light");
 
};
return (
    <ThemeContext.Provider value= {{ theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
)
}