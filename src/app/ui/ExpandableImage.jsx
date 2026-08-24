"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ExpandableImage({ src, alt, title, width, height, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const label = title || alt;

  return (
    <>
      <div className="relative inline-block ">
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          onClick={() => setIsOpen(true)}
          className={`h-[clamp(63px,25vw-17px,142.75px)] sm:h-30 w-auto col-span-2 border-4 border-primary  cursor-pointer ${className}`}
        />
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Expand image"
          className={"z-10  absolute top-1 right-1 active:shadow-win95-active shadow-win95-button bg-background p-1 hover:cursor-pointer"}
        >
          <Image src="/expand.png" width={20} height={20} alt="Expand button" className={`${!isDarkMode ? 'invert' : ''} w-5 h-5 `}  />
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-9 min-[457px]:bottom-14 md:bottom-16 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative bg-background shadow-win95-program max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
          <div className="px-1 pt-1 w-full select-none ">
            <div className="bg-primary flex items-center gap-1 pl-2 py-1 border-b border-white ">
              <span className="window-title leading-none text-white font-bold min-w-0">{label}</span>
              <div className="ml-auto flex items-center gap-0.5 pr-0.5">
                <button aria-label="Minimize" className="shadow-win95-program bg-background hover:cursor-pointer active:shadow-win95-active">
                  <Image src={isDarkMode ? "/DARK-minimize-button.png" : "/minimize-button.png"} width={88} height={88} alt="" className="w-8 h-8" />
                </button>
                <button aria-label="Maximize" className="shadow-win95-program bg-background hover:cursor-pointer active:shadow-win95-active">
                  <Image src={isDarkMode ? "/DARK-collapse-button.png" : "/collapse-button.png"} width={88} height={88} alt="" className="w-8 h-8" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close"
                  className="shadow-win95-program bg-background hover:cursor-pointer active:shadow-win95-active"
                >
                  <Image src={isDarkMode ? "/DARK-close-button.png" : "/close-button.png"} width={88} height={88} alt="" className="w-8 h-8" />
                </button>
              </div>
            </div>
            </div>
            <div className="pl-1 pr-1 pb-1 flex items-center justify-center">
              <Image
                src={src}
                width={1600}
                height={1200}
                alt={alt}
                className="w-auto h-auto max-w-[85vw] max-h-[75vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
