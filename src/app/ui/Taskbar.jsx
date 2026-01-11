"use client"; //this is a client component because it uses useState
import Image from 'next/image'; //not statically imported -- while standard JavaScript import statements are like "import profile from './profile.png'"
import Link from 'next/link';
import { useState } from 'react';
const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});


/*inherit's universal body tailwind utility classes from layout.js, so always put this component at the bottom, since
it's the last child:
┌─────────────────────┐
│ <TitleBar/>         │ ← Top (consistent header)
│                     │
│ {children}          │ ← Page content gets rendered here
│                     │
│ <Taskbar />         │ ← Bottom (sticky footer effect)
└─────────────────────┘
*/
export default function Taskbar({currentPage}) {
  const [TaskbarOpenState, setTaskbarOpenState] = useState(false);
  return (
    <>
      <footer className="fixed bottom-0 left-0 right-0 z-50">
        <div className="flex p-1 gap-2 text-2xl shrink items-center shadow-win95-taskbar bg-background">
          <button className="p-2.5 pl-0.6 shadow-win95-button flex items-center gap-2 cursor-pointer active:shadow-win95-active" onClick ={() => setTaskbarOpenState(!TaskbarOpenState)}>
            <Image src="/anthony-95.svg" width={12} height={16} alt="Start button logo" className="inline-block w-6.5 h-auto"/> 
            Start
            
          </button>
          {TaskbarOpenState && (
            <div className="absolute bottom-full left-0  flex shadow-win95-button bg-background ">
              {/* Vertical sidebar with branding */}
              <div className="bg-primary shadow-win95-button w-10 flex items-end justify-center pb-2">
                <span className="[writing-mode:vertical-lr] rotate-180 text-xl font-bold text-white tracking-wide ">
                  Anthony<span className="font-normal">95</span>
                </span>
              </div>
              {/* Menu items */}
              <div className="flex flex-col min-w-48">
                <Link href="/" onClick={() => setTaskbarOpenState(false)}>
                  <button className="w-full text-left p-2 flex items-center gap-3 cursor-pointer hover:bg-primary active:shadow-win95-active">
                    <Image src='/msg_question-1.png' width={32} height={32} alt="About Me page icon" className="w-8 h-8" />
                    <span className="text-lg">About Me</span>
                  </button>
                </Link>
                <Link href="/projects" onClick={() => setTaskbarOpenState(false)}>
                  <button className="w-full text-left p-2 flex items-center gap-3 cursor-pointer hover:bg-primary active:shadow-win95-active">
                    <Image src='/shell_window5-1.png' width={32} height={32} alt="Projects page icon" className="w-8 h-8" />
                    <span className="text-lg">Projects</span>
                  </button>
                </Link>
                <Link href="/resume" onClick={() => setTaskbarOpenState(false)}>
                  <button className="w-full text-left p-2 flex items-center gap-3 cursor-pointer hover:bg-primary active:shadow-win95-active">
                    <Image src='/message_file-0.png' width={32} height={32} alt="Resume page icon" className="w-8 h-8" />
                    <span className="text-lg">Resume</span>
                  </button>
                </Link>
                {/* Separator */}
                <div className="mx-2 my-1 border-t border-gray-400 border-b border-b-white"></div>
                <Link href="https://www.linkedin.com/in/anteryan/" target="_blank" onClick={() => setTaskbarOpenState(false)}>
                  <button className="w-full text-left p-2 flex items-center gap-3 cursor-pointer hover:bg-primary active:shadow-win95-active">
                    <Image src='/linkedinportfolio-icon 1.svg' width={32} height={32} alt="LinkedIn icon" className="w-8 h-8" />
                    <span className="text-lg">LinkedIn</span>
                  </button>
                </Link>
                <Link href="https://github.com/a-eryan" target="_blank" onClick={() => setTaskbarOpenState(false)}>
                  <button className="w-full text-left p-2 flex items-center gap-3 cursor-pointer hover:bg-primary active:shadow-win95-active">
                    <Image src='/githubportfolio-icon 1.svg' width={32} height={32} alt="GitHub icon" className="w-8 h-8" />
                    <span className="text-lg">GitHub</span>
                  </button>
                </Link>
                <Link href="mailto:eryananthony@gmail.com" onClick={() => setTaskbarOpenState(false)}>
                  <button className="w-full text-left p-2 flex items-center gap-3 cursor-pointer hover:bg-primary active:shadow-win95-active">
                    <Image src='/mail-icon.svg' width={32} height={32} alt="Email icon" className="w-8 h-8" />
                    <span className="text-lg">Email Me</span>
                  </button>
                </Link>
                <Link href = "https://www.figma.com/design/AVf7PzjEp8kfZN1uVkm9oL/a-eryan.com?node-id=0-1&t=DUOKIKwIEYRMhxKf-1" target="_blank" onClick={() => setTaskbarOpenState(false)}>
                  <button className="w-full text-left p-2 flex items-center gap-3 cursor-pointer hover:bg-primary active:shadow-win95-active">
                    <Image src='/figma-logo.svg' width={32} height={32} alt="Figma icon" className="w-8 h-8 object-contain" /> 
                    <span className="text-lg">Figma Prototype</span>
                  </button>
                </Link>
                <Link href = "https://www.github.com/a-eryan/a-eryan.com" target="_blank" onClick={() => setTaskbarOpenState(false)}>
                  <button className="w-full text-left p-2 flex items-center gap-3 cursor-pointer hover:bg-primary active:shadow-win95-active">
                    <Image src='/githubportfolio-icon 1.svg' width={32} height={32} alt="GitHub icon" className="w-8 h-8" /> 
                    <span className="text-lg">GitHub Repository</span>
                  </button>
                </Link> 
              </div>
            </div>
          )}
          {/*lossless resizing, so no need for next/image optimization. path indicates .svg so its automatically unoptimized*/}                    
					{/*template literal trick: conditionally apply active styles if currentPage matches button page*/}
					<Link href = "/">
						<button className={`p-2.5 pl-0.6 flex items-center gap-2 cursor-pointer active:shadow-win95-active ${
							currentPage === 'About Me' 
								? 'shadow-win95-active text-black bg-checkered font-bold' 
								: 'shadow-win95-button'
						}`}>
							<Image src='/msg_question-1.png' width={18} height={18} alt="Current page icon" className="inline-block w-6.5 h-auto"/>
							About Me 
						</button>
					</Link>
          <Link href = "/projects">
          <button className={`p-2.5 pl-0.6 flex items-center gap-2 cursor-pointer active:shadow-win95-active ${
            currentPage === 'Projects' 
              ? 'shadow-win95-active text-black bg-checkered font-bold' 
              : 'shadow-win95-button'
          }`}>
            <Image src="/shell_window5-1.png" width={18} height={18} alt="Current page icon" className="inline-block w-6.5 h-auto"/>
            Projects 
          </button>
					</Link>
          
          <Link href = "/resume">	
          <button className={`p-2.5 pl-2.6 flex items-center gap-2 cursor-pointer active:shadow-win95-active ${
            currentPage === 'Resume' 
              ? 'shadow-win95-active text-black bg-checkered font-bold' 
              : 'shadow-win95-button'
          }`}> 
            <Image src="/message_file-0.png" width={32} height={32} alt="Current page icon" className="inline-block w-6.5 h-auto"/>
            Resume 
          </button>
          </Link>
          <div className='flex ml-auto shadow-win95-clock p-2.5 pl-0.6 gap-4 items-center '>
            <Link href="https://www.figma.com/design/AVf7PzjEp8kfZN1uVkm9oL/a-eryan.com?node-id=0-1&t=DUOKIKwIEYRMhxKf-1" title = "Portfolio Design Prototype" target="_blank" className='hover:cursor-pointer active:shadow-win95-active'>
              <Image src = "/figma-logo.svg" width={20} height={30} alt="Figma Logo Icon" className="inline-block  w-4 h-auto "/>
            </Link>
            <Link href = "https://www.github.com/a-eryan/a-eryan.com" title="Portfolio GitHub Repository" target="_blank" className='hover:cursor-pointer active:shadow-win95-active'>
              <Image src = "/githubportfolio-icon 1.svg" width={30} height={30} alt="Github Logo Icon" className="inline-block w-6.5 h-auto "/>
            </Link>
            <p>{time}</p>

          </div>
        </div>
      </footer>
    </>
  )
}