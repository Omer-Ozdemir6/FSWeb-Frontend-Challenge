import { createContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify"
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useLocalStorage("theme", "dark");

const isInitialMount = useRef(true);

useEffect(() => {
const root = window.document.documentElement;
if (theme === "light") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
  if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
const mode = theme === "dark" ? "LIGHT MODE" : "DARK MODE";
toast.success(`${mode} Aktif`, {
  theme: theme === "dark" ? "light" : "dark"
})
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