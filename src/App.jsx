import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {


  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-8">

      <Navbar />
      <Header />

      </div>
      </div>
    </ThemeProvider>
  )
}

export default App
