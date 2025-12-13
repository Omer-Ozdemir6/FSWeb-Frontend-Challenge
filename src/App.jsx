import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from './components/Navbar';

function App() {


  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <main className="container mx-auto px-8">
      </main>
      </div>
    </ThemeProvider>
  )
}

export default App
