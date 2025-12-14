import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (

    <nav className="py-6 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="flex justify-end items-center gap-6 mb-4 text-sm font-bold text-gray-600 dark:text-gray-300">

            <button onClick={toggleTheme} className="flex items-center gap-2 hover:text-purple-600 transition">
                <div className={`w-8 h-4 rounded-full p-0.5 flex items-center ${theme === 'dark' ? 'bg-purple-600 justify-end' : 'bg-gray-300 justify-start'}`}>
                    <div className="w-3 h-3 bg-white rounded-full shadow-md"></div>
                </div>
                <span>{theme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}</span>
            </button>

            <span className="text-gray-300">|</span>
            <button className="text-purple-600 hover:text-purple-700">
                TÜRKÇE'YE GEÇ
            </button>
        </div>
        <div className="flex justify-between items-center">

            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-700 dark:text-purple-200 font-bold transform -rotate-12">
                    Ö
                </div>
                <span className="text-xl font-bold text-gray-800 dark:text-white"></span>
            </div>

            <div className="hidden md:flex items-center gap-8 font-medium text-gray-600 dark:text-gray-400">
                <a href="#skills" className="px-4 py-2 rounded transition hover:bg-purple-700 hover:text-white dark:hover:bg-white dark:hover:text-slate-900">Skills</a>
                <a href="#projects" className="px-4 py-2 rounded transition hover:bg-purple-700 hover:text-white dark:hover:bg-white dark:hover:text-slate-900">Projects</a>
                
                <a href="#hireme" className="px-4 py-2 rounded transition hover:bg-purple-700 hover:text-white dark:hover:bg-white dark:hover:text-slate-900">
                    Hire me
                </a>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;