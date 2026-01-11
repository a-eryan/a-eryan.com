import TitleBar from "../../ui/TitleBar";
import Taskbar from "../../ui/Taskbar";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "OffBrandARM CPU ", //TODO chore: figure out why this isnt working with layout.js title template
  description: "OffBrandARM CPU is an eight-bit CPU with a 2² binary representation of 4 instructions, capable of arithmetic and memory-related operations.",
};

export default function Projects() {
  return (
	<div className="flex flex-col min-h-screen justify-between "> {/*stack children vertically and make sure the taskbar is always at the bottom*/}
	  <div className="shadow-win95-program flex flex-col grow  ">    
		<TitleBar pageName="Projects" iconSource="/shell_window5-1.png" />
		<div className="flex flex-row gap-2 items-center mx-2.5 border-b border-[rgba(0,0,0,0.25)] p-1">
		  <h1 className="text-2xl text-center flex justify-between font-bold p-1">OffBrandARM CPU</h1>
		  <Link href = "https://github.com/a-eryan/OffBrandARM-CPU" target="_blank" className="inline-block underline underline-offset-2 hover:text-primary text-2xl">
			<Image src = "/githubportfolio-icon 1.svg" width={30} height={30} alt="Github Logo" className="inline-block w-6 h-auto"/>Github Repository
		  </Link>
		</div>	
		<Image src="/offbrandarm-cpu-preview.png" width={3200} height={2100} alt="OffBrandARM CPU project preview screenshot" className="w-full max-w-4xl object-cover mx-auto"/>
		<div className="mb-4 ml-2.5 pb-16">
		  <h2 className="text-xl mb-2 ">Project Overview</h2>
		  <div className="flex flex-row justify-start flex-wrap gap-2 text-center items-center" aria-label="Technologies used">
			<p>Technologies Used: </p>
			<Image src="/python-logo.svg" width={30} height={30} alt="Python Icon" className="inline-block h-auto"/>
			<p>Python</p>
			<Image src="/logisim-evolution-logo.svg" width={24} height={24} alt="Logisim Icon" className="inline-block w-6 h-auto"/>
			<p>Logisim</p>                                                              
		  </div>
		  <p> Role: Assembler programmer & Digital Circuit-Designer </p>
		  <p> Timeline: August 2025 - December 2025 </p>            
		  <p className="leading-relaxed"> 
		   OffBrandArm CPU is an eight-bit CPU with a 2² binary representation of 4 instructions, capable of arithmetic and memory-related operations</p>
		  <h2 className="text-xl mt-4 mb-2">Development Process</h2>
		  <p className="leading-relaxed"> 
			The development process involved beginning with the circuit itself to understand how CPUs work for our Computer Architecture and Organization (CS 382) course. I began by initializing the four general-purpose registers for the CPU, to which I was then ready for the 5-stage pipeline processor: steps—Instruction Fetch (IF), Instruction Decode (ID), Execute (EX), Memory Access (MEM), and Write Back (WB). With each step, I incorporated key circuits to ensure each stage of the CPU process for an instruction was fully functional. I then began with a Python-based assembler, translating my custom ARM-inspired assembly language into machine code while supporting both register and immediate addressing modes. Lastly, I formalized my notes to create a formal documentation on how the assembler works and all possible instructions, as reflected in the Github’s README markdown file. 
		</p>
		  <h2 className="text-xl mt-4 mb-2">Results & Learning</h2>
		  <p className="leading-relaxed">
			I successfully created a CPU that executes memory and arithmetic operations under the constraint of 8-bit instructions and only four general-purpose registers. This project taught me how building the assembler showed how software abstracts hardware complexity. Working with an 8-bit constraint required creative problem-solving: I designed X0 to serve dual purposes as both a general-purpose register and a flag for immediate values (numerical offsets of 0-255) in memory operations due to the inability to fit all possible scenarios of each instruction within the 8-bit constraint.     
		  </p>
		</div>
	  </div>
	  <Taskbar currentPage="Projects" />
	</div>    
  )
}