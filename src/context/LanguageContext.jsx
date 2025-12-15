import { createContext, useContext, useEffect, useRef, useState } from "react";
import { languageData } from "../data/languages";
import { toast } from "react-toastify"
import { useLocalStorage } from "../hooks/useLocalStorage";


export const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }) => {

    const [language, setLanguage ] = useLocalStorage("language", "en");
    

    const texts = languageData[language] || languageData.en

    const isInitialMount = useRef(true);
    useEffect(() => {
         if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
    }, [language, texts])

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === "en" ? "tr" : "en"));
    }

    return (
        <LanguageContext.Provider value={{language, toggleLanguage, texts}}>
            {children}
        </LanguageContext.Provider>
    )
}