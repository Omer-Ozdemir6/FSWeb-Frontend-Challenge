import { createContext, useContext, useState } from "react";
import { languageData } from "../data/languages";
import { toast } from "react-toastify"


export const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }) => {

    const [language, setLanguage ] = useState("en");


    const texts = languageData[language] || languageData.en

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === "en" ? "tr" : "en"));
        toast.success("", {
            theme: "dark",closeOnClick: false,pauseOnHover: true,
          })
    }

    return (
        <LanguageContext.Provider value={{language, toggleLanguage, texts}}>
            {children}
        </LanguageContext.Provider>
    )
}