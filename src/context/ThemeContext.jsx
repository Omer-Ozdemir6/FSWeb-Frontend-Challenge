import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify"

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");


useEffect(() => {
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