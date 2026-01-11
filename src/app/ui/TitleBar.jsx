"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function TitleBar({pageName, iconSource}) {
const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    //detect initial color scheme
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
    //listen for changes in color scheme
    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []); 

  return (
    <header className=""> 
      <nav className="flex items-center px-1 pt-1 w-full select-none ">
          <div className="bg-primary flex items-center gap-1 pl-0.5 py-1 grow">  
            <Image src={iconSource} width={18} height={18} alt={`${pageName} icon`} className="inline-block w-6.5 h-auto" />
            <span className="text-2xl leading-none text-white font-bold">{pageName} - Anthony Eryan</span>
            
            <button className="shadow-win95-program text-2xl ml-auto bg-background hover:cursor-pointer active:shadow-win95-active">
              <Image src={isDarkMode ? "/DARK-minimize-button.png" : "/minimize-button.png"} alt="Minimize" width={88} height={88} className="w-8 h-8" />
            </button>
            <button className="shadow-win95-program text-2xl bg-background hover:cursor-pointer active:shadow-win95-active">
              <Image src={isDarkMode ? "/DARK-collapse-button.png" : "/collapse-button.png"} alt="Maximize" width={88} height={88} className="w-8 h-8" />
            </button>                          
            <button className="shadow-win95-program text-2xl bg-background mr-0.5 hover:cursor-pointer active:shadow-win95-active">
              <Image src={isDarkMode ? "/DARK-close-button.png" : "/close-button.png"} alt="Close" width={88} height={88} className="w-8 h-8" />
            </button>          
          </div>       
      </nav>
      <nav className="flex items-center p-2 pt-3 shadow-win95-separator mx-1 gap-3 bg-background">
          <Link href="/">
            <button className="cursor-pointer active:shadow-win95-active">
              <Image src="/msg_question-1.png" width={18} height={18} alt="About Me page icon" className="inline-block w-6.5 h-auto mr-1" />
              About Me
            </button>
          </Link>
          <Link href="/projects">
            <button className="cursor-pointer active:shadow-win95-active">
              <Image src="/shell_window5-1.png" width={18} height={18} alt="Projects page icon" className="inline-block w-6.5 h-auto mx-2" />
              Projects
            </button>
          </Link>
          <Link href="/resume">
            <button className="cursor-pointer active:shadow-win95-active">
              <Image src="/message_file-0.png" width={32} height={32} alt="Resume page icon" className="inline-block w-6.5 h-auto mx-2" />
              Resume
            </button>
          </Link>
      </nav>     
    </header>
  );
}