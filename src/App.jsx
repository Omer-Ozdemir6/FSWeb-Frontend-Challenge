import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

function App() {


  return (
    <LanguageProvider>
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-8">

      <Navbar />
      <Header />
      <Skills/>
      <Profile/>
      <Projects />

      </div>
      <Footer/>
      </div>
    </ThemeProvider>
          </LanguageProvider>
  )
}

export default App
