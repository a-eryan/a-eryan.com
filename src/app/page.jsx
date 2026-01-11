import Image from "next/image";
import Link from "next/link";
import TitleBar from "./ui/TitleBar";
import Taskbar from "./ui/Taskbar";

export const metadata = {
  title: "About Me - Anthony Eryan's Portfolio", 
  description: "Anthony Eryan's portfolio home page.",
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <div className="shadow-win95-program flex flex-col grow pb-16">
          <TitleBar pageName="About Me" iconSource="/msg_question-1.png" />
<div className="lg:m-2.5 lg:gap-6 ">
  <Image 
    src="/LinkedInNoCircle.png" 
    width={400} 
    height={400} 
    alt="Anthony Eryan's Professional Photo" 
    className="float-none lg:float-left mx-auto lg:mx-0 lg:mr-6 w-36 lg:w-48 h-auto border-6 border-primary mb-4 lg:mb-0 mt-2.5 lg:mt-0"
  />
  <div className="flex flex-col justify-center">
    <div className="border-b mx-2 lg:mx-0 border-[rgba(0,0,0,0.25)]  flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
      <h1 className="text-2xl font-bold text-center lg:text-left shrink-0">Hi, I'm Anthony!</h1>
      
      <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center lg:justify-start items-center mb-0.5 ">
        <Link href="https://www.linkedin.com/in/anteryan/" target="_blank" className="flex items-center gap-1 hover:text-primary shrink-0">
          <Image src="/linkedinportfolio-icon 1.svg" width={30} height={30} alt="LinkedIn" className="w-7 h-auto"/>
          <span className="text-base underline underline-offset-2">/anteryan</span>
        </Link>
        
        <Link href="https://github.com/a-eryan" target="_blank" className="flex items-center gap-1 hover:text-primary shrink-0">
          <Image src="/githubportfolio-icon 1.svg" width={30} height={30} alt="GitHub" className="w-7 h-auto"/>
          <span className="text-base underline underline-offset-2">/a-eryan</span>
        </Link>
        
        <Link href="mailto:eryananthony@gmail.com" target="_blank" className="flex items-center gap-1 hover:text-primary shrink-0">
          <Image src="/mail-icon.svg" width={34} height={26} alt="Email" className="w-7 h-auto"/>
          <span className="text-base underline underline-offset-2">
            <span className="hidden lg:inline">eryananthony@gmail.com</span>
            <span className="lg:hidden">Email</span>
          </span>
        </Link>
      </div>
    </div>
    
    <p className="text-base lg:text-lg leading-relaxed text-center lg:text-left">
      Stevens Institute of Technology student majoring in Computer Science residing in the New York City Metropolitan Area.
      I'm passionate about product design (UX/UI) with the integration of front-end web development.
    </p>
  </div>
</div>
          <h2 className="text-xl ml-2.5 border-b border-[rgba(0,0,0,0.25)] font-bold"> Featured Projects </h2>
            <div className="m-2.5 flex items-stretch flex-wrap lg:flex-nowrap lg:flex-row gap-4 w-auto h-full max-w-2200 mt-4">
              <Link href="/projects/better-mystevens" className="shadow-win95-button p-4 flex items-stretch flex-col w-auto gap-2  hover:shadow-win95-button-hover">
                <Image src = "/better-mystevens-preview.png" width={3200} height={2100} alt="Better MyStevens project preview screenshot" className="inline-block border-4 border-primary "/>
                <h3 className="text-lg text-center underline font-bold"> Better MyStevens</h3>
                <p className="text-sm leading-relaxed text-center"> A student-researched redesigned student portal focused on improving navigation and user efficiency. </p>
              </Link>
              <Link href="/projects/sentiment-analysis.ai" className="shadow-win95-button p-4 flex flex-col w-auto gap-2 items-stretch hover:shadow-win95-button-hover">
                <Image src = "/sentiment-analysis.ai.png" width={3200} height={2100} alt="Better MyStevens project preview screenshot" className="inline-block border-4 border-primary "/>
                <h3 className="text-lg text-center underline font-bold"> sentiment-analysis.ai</h3>
                <p className="text-sm leading-relaxed text-center">AI-centric SaaS high fidelity prototype. </p>
              </Link>
              <Link href="/projects/duck-study-hub" className="shadow-win95-button p-4 flex flex-col gap-2  hover:shadow-win95-button-hover">
                <Image src = "/duck-study-hub-preview.png" width={3200} height={2100} alt="Project 2 Screenshot" className="inline-block border-4 border-primary"/>
                <h3 className="text-lg text-center underline font-bold"> Duck Study Hub </h3>
                <p className="text-sm leading-relaxed text-center">On-campus social networking app connecting students through  study groups and locations. </p>
              </Link>
              <Link href="/projects/fuelme" className="shadow-win95-button p-4 flex flex-col gap-2  hover:shadow-win95-button-hover">
                <Image src = "/fuelme-preview.png" width={3200} height={2100} alt="Project 2 Screenshot" className="inline-block border-4 border-primary"/>
                <h3 className="text-lg text-center underline font-bold"> FuelMe </h3>
                <p className="text-sm leading-relaxed text-center"> Nutrition tracking app for achieving fitness goals through  personalized macro targets. </p>
              </Link>                            
            </div>
          <Link href="/projects" className="ml-2.5 text-md underline underline-offset-2 hover:text-primary">
            View All Projects
          </Link>
        <h2 className="text-xl m-2.5 border-b border-[rgba(0,0,0,0.25)] font-bold">Experience</h2>
          {/*four-column grid where the the first and third columns are auto-width for the icons, and the second and fourth columns take up the remaining space for the text.*/}
          <div className="ml-2.5 grid grid-cols-[auto_1fr_auto_1fr] gap-x-3 gap-y-2 items-center">
            {/*four distinct sizes seperated by underscores: auto for the 1st and third column, 1fr for the 2nd and 4th */}
            <Image src="/stevens-S-logo.svg" width={30} height={30} alt="Stevens Institute of Technology Logo"/>
            <h3 className="text-lg font-bold">Student Digital Strategist, Stevens Institute of Technology</h3>
            <Image src="/meta-logo.svg" width={30} height={20} alt="Meta Logo"/>
            <h3 className="text-lg font-bold">Client Solutions Manager Intern, Meta</h3>
            <Image src ="/map-flat-icon.svg" width={30} height={30} alt="Location Icon" />
            <p>Hoboken, NJ | 09/2024 - 05/2025, 09/2025 - Present</p>
            <Image src ="/map-flat-icon.svg" width={30} height={30} alt="Location Icon"/>
            <p>New York, NY | 01/2022 - 07/2022</p>
          </div>
          <Link href="/resume" className="ml-2.5 text-md underline underline-offset-2 hover:text-primary">
            View Full Resume
          </Link>           
        </div>
        <Taskbar currentPage="About Me"/> 
      </div>
    </>
  );
}
