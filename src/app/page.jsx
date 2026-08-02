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
        
        <div className="shadow-win95-program relative flex flex-col grow pb-16">
          <Image src="/a-eryan-bg.png" alt="Background" fill className="opacity-75 md:opacity-100 object-cover md:object-fill object-center -z-10 brightness-300  dark:brightness-100" />
          <TitleBar pageName="About Me" iconSource="/msg_question-1.png" />
          <div className="m-2.5 gap-6 ">
            <Image 
              src="/LinkedInNoCircle.png" 
              width={400} 
              height={400} 
              alt="Anthony Eryan's Professional Photo" 
              className="bg-background float-none lg:float-left mx-auto lg:mx-0 lg:mr-6 w-36 lg:w-48 h-auto border-6 border-primary mb-4 lg:mb-0 mt-2.5 lg:mt-0"
            />
            <div className="flex flex-col justify-center">
              <div className="border-b mx-2 lg:mx-0 border-[rgba(0,0,0,0.25)]  flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
                <h1 className="font-bold text-center lg:text-left shrink-0">Hi, I'm Anthony!</h1>
                
                <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center lg:justify-start items-center mb-0.5 ">
                  <Link href="https://www.linkedin.com/in/anteryan/" target="_blank" className="flex items-center gap-1 hover:text-primary shrink-0">
                    <Image src="/linkedinportfolio-icon 1.svg" width={30} height={30} alt="LinkedIn" className="w-7 h-auto"/>
                    <span className="social-link-label underline underline-offset-2">/anteryan</span>
                  </Link>
                  
                  <Link href="https://github.com/a-eryan" target="_blank" className="flex items-center gap-1 hover:text-primary shrink-0">
                    <Image src="/githubportfolio-icon 1.svg" width={30} height={30} alt="GitHub" className="w-7 h-auto"/>
                    <span className="social-link-label underline underline-offset-2">/a-eryan</span>
                  </Link>
                  
                  <Link href="mailto:eryananthony@gmail.com" target="_blank" className="flex items-center gap-1 hover:text-primary shrink-0">
                    <Image src="/mail-icon.svg" width={34} height={26} alt="Email" className="w-7 h-auto"/>
                    <span className="social-link-label underline underline-offset-2">
                      <span className="hidden lg:inline">eryananthony@gmail.com</span>
                      <span className="lg:hidden">Email</span>
                    </span>
                  </Link>
                </div>
              </div>
              
              <p className="leading-relaxed text-center lg:mr-2.5 lg:text-left">
                Stevens Institute of Technology Computer Science graduate residing in the New York City Metropolitan Area.
                I'm passionate about product design (UX/UI) with the integration of front-end web development.
              </p>
            </div>
          </div>
    <h2 className="ml-2.5 border-b border-[rgba(0,0,0,0.25)] font-bold"> Featured Projects </h2>
      <div className="m-2.5 flex items-stretch flex-wrap md:flex-nowrap md:flex-row gap-4 w-auto h-full max-w-2200 mt-4">
        <Link href="/projects/better-mystevens" className="featured-project-card">
          <Image src = "/better-mystevens-preview.png" width={3200} height={2100} alt="Better MyStevens project preview screenshot" className="inline-block border-4 border-primary h-auto"/>
          <h3 className="text-center underline font-bold hover:text-primary "> Better MyStevens</h3>
          <p className="leading-relaxed text-center"> A student-researched redesigned student portal focused on improving navigation and user efficiency. </p>
        </Link>
        <Link href="/projects/sentiment-analysis.ai" className="featured-project-card">
          <Image src = "/sentiment-analysis.ai-1.png" width={3200} height={2100} alt="Better MyStevens project preview screenshot" className="inline-block border-4 border-primary "/>
          <h3 className="text-center underline font-bold hover:text-primary "> sentiment-analysis.ai</h3>
          <p className="leading-relaxed text-center">AI-centric SaaS high fidelity prototype. </p>
        </Link>
        <Link href="/projects/lumen-labs" className="featured-project-card">
          <Image src = "/lumen-labs-preview.png" width={3200} height={2100} alt="Project 2 Screenshot" className="inline-block border-4 border-primary"/>
          <h3 className="text-center underline font-bold hover:text-primary  "> Lumen Labs </h3>
          <p className="leading-relaxed text-center"> AI for democratizing career prospects and research opportunities for graduate students. </p>
        </Link>           
        <Link href="/projects/duck-study-hub" className="featured-project-card">
          <Image src = "/duck-study-hub-preview.png" width={3200} height={2100} alt="Project 2 Screenshot" className="inline-block border-4 border-primary"/>
          <h3 className="text-center underline font-bold hover:text-primary "> Duck Study Hub </h3>
          <p className="leading-relaxed text-center">On-campus social networking app connecting students through  study groups and locations. </p>
        </Link>
                         
      </div>
      <Link href="/projects" className="ml-2.5 underline underline-offset-2 hover:text-primary">
        View All Projects
      </Link>
      <h2 className="m-2.5 border-b border-[rgba(0,0,0,0.25)] font-bold">Experience</h2>
      {/*four-column grid where the the first and third columns are auto-width for the icons, and the second and fourth columns take up the remaining space for the text.*/}
      {/* Parent lays experiences out 2-per-row; each child is a self-contained
          2-column grid, so an odd number of entries never misaligns dates. */}
      <div className="ml-2.5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
        {/* One experience = icon column (auto) + text column (1fr) */}

        <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 items-center">
          <Image src="/spendly-logo-8bit.svg" width={30} height={30} alt="Spendly Logo"/>
          <h3 className="font-bold">Webflow Developer Intern, Spendly</h3>
          <Image src="/map-flat-icon.svg" width={30} height={30} alt="Location Icon" />
          <p>Remote | 05/2026 - 08/2026</p>
        </div>

        {/* Empty top-right slot (only exists at 2-col breakpoint, so mobile stacks with no gap)
            — pushes Stevens to bottom-left and Meta to bottom-right. */}
        <div className="hidden sm:block" aria-hidden="true" />

        <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 items-center">
          <Image src="/stevens-S-logo.svg" width={30} height={30} alt="Stevens Institute of Technology Logo"/>
          <h3 className="font-bold">Student Digital Strategist, Stevens Institute of Technology</h3>
          <Image src="/map-flat-icon.svg" width={30} height={30} alt="Location Icon" />
          <p>Hoboken, NJ | 09/2024 - 05/2025, 09/2025 - 04/2026</p>
        </div>

        <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 items-center">
          <Image src="/meta-logo.svg" width={30} height={20} alt="Meta Logo"/>
          <h3 className="font-bold">Client Solutions Manager Intern, Meta</h3>
          <Image src="/map-flat-icon.svg" width={30} height={30} alt="Location Icon"/>
          <p>New York, NY | 01/2022 - 07/2022</p>
        </div>
      </div>
      <Link href="/resume" className="ml-2.5 underline underline-offset-2 hover:text-primary">
        View Full Resume
      </Link>           
    </div>
    <Taskbar currentPage="About Me"/> 
  </div>
  </>
  );
}
