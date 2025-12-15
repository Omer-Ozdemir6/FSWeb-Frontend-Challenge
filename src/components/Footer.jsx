import React from 'react';
import { useSelector } from 'react-redux';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const footerData = useSelector((state) => state.footerState);
  const { language, toggleLanguage, texts } = useLanguage()
  const { title, text, email, links } = footerData || {};

  if (!title) return null;

  return (

    <footer className="py-20 bg-[#f9f9f9] dark:bg-black transition-colors duration-300"> 
 
      <div className="container mx-auto px-8"> 

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl space-y-4">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-400">
                    {texts.footer.title_1}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    {texts.footer.title_2}
                </p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">

            <a 
                href={`mailto:${email}`} 
                className="text-purple-700 dark:text-purple-400 font-medium flex items-center gap-2 hover:underline"
            >
                 👉 {email}
            </a>

            <div className="flex gap-6 mt-4 md:mt-0">
                {links && links.map((link, index) => (
                    <a 
                        key={index} 
                        href={link.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`font-bold transition-colors ${
                            link.name === "Github" ? "text-green-600 hover:text-green-700" :
                            link.name === "Linkedin" ? "text-blue-600 hover:text-blue-700" :
                            "text-gray-600 dark:text-gray-400 hover:text-purple-600"
                        }`}
                    >
                        {link.name}
                    </a>
                ))}
            </div>

        </div>

      </div> 
    </footer>
  );
};

export default Footer;