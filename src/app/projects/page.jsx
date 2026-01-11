import TitleBar from "../ui/TitleBar";
import Taskbar from "../ui/Taskbar";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Projects", 
  description: "Anthony Eryan's portfolio project page.",
};
export default function Projects() {
  
    return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="shadow-win95-program flex flex-col grow">    
        <TitleBar pageName="Projects" iconSource="/shell_window5-1.png" />
        <div className="mx-2.5 border-b border-[rgba(0,0,0,0.25)] flex justify-between  p-1">
          <h1 className="text-2xl font-bold">Projects</h1>
          {/* <select className="shadow-win95-button p-1 bg-background">
            <option>Sort by: Newest</option>
            <option>Sort by: Featured</option>
            <option>Sort by: Oldest</option>
          </select> */}
        </div>  
        <div className="flex flex-wrap gap-4 m-2.5 items-stretch justify-center pb-16">
          <Link href="/projects/fuelme" className="shadow-win95-button p-4 flex flex-col w-1/5 gap-2 hover:shadow-win95-button-hover min-w-70">
            <Image src="/fuelme-preview.png" width={3200} height={2100} alt="FuelMe project preview screenshot" className="w-full  border-4 border-primary object-cover"/>
            <h3 className="text-lg text-center underline hover:text-primary">FuelMe</h3>
            <div className="flex flex-row justify-center flex-wrap gap-1 items-center" aria-label="Technologies used">
              <Image src="/figma-logo.svg" width={20} height={30} alt="Figma Icon" className="inline-block w-4 h-auto"/>
              <p className="text-center">Figma</p>
              <Image src="/react-logo.svg" width={24} height={24} alt="React Icon" className="inline-block w-6 h-auto "/>
              <p className="text-center">React</p>
              <Image src="/nextjs-logo.svg" width={24} height={24} alt="Nextjs Icon" className="inline-block w-6 h-auto "/>
              <p className="text-center">Nextjs</p>
              <Image src="/tailwind-css-logo.svg" width={24} height={14} alt="Tailwind CSS Icon" className="inline-block h-auto "/>
              <p className="text-center">Tailwind CSS</p>                 
              <Image src="/graph-ql-logo.svg" width={24} height={24} alt="GraphQL Icon" className="inline-block w-6 h-auto "/>
              <p className="text-center">GraphQL</p>                                                                 
            </div>
            <p className="text-sm leading-relaxed text-center">Nutrition tracking app for achieving fitness goals through personalized macro targets.</p>
          </Link>
          
          <Link href="/projects/sentiment-analysis.ai" className="shadow-win95-button p-4 flex flex-col w-1/5  gap-2 hover:shadow-win95-button-hover min-w-70">
            <Image src="/sentiment-analysis.ai.png" width={3200} height={2100} alt="sentiment-analysis.ai project preview screenshot" className="w-full  border-4 border-primary object-cover"/>
            <h3 className="text-lg text-center underline hover:text-primary">sentiment-analysis.ai</h3>
            <div className="flex flex-row justify-center flex-wrap gap-1 items-center" aria-label="Technologies used">
              <Image src="/figma-logo.svg" width={20} height={30} alt="Figma Icon" className="inline-block w-4 h-auto"/>
              <p className="text-center">Figma</p>
              <Image src="/react-logo.svg" width={24} height={24} alt="React Icon" className="inline-block w-6 h-auto "/>
              <p className="text-center">React</p> 
              <Image src="/nextjs-logo.svg" width={24} height={24} alt="Nextjs Icon" className="inline-block w-6 h-auto "/>
              <p className="text-center">Nextjs</p>                                                                     
              <Image src="/tailwind-css-logo.svg" width={24} height={14} alt="Tailwind CSS Icon" className="inline-block w-6 h-auto "/>
              <p className="text-center">Tailwind CSS</p>                          
            </div>            
            <p className="text-sm leading-relaxed text-center">AI-centric SaaS high fidelity prototype.</p>
          </Link>
          
          <Link href="/projects/better-mystevens" className="shadow-win95-button p-4 flex flex-col w-1/5 gap-2 hover:shadow-win95-button-hover min-w-70">
            <Image src="/better-mystevens-preview.png" width={3200} height={2100} alt="Better MyStevens project preview screenshot" className="w-full  border-4 border-primary object-cover"/>
            <h3 className="text-lg text-center underline hover:text-primary">Better MyStevens</h3>
            <div className="flex flex-row justify-center flex-wrap gap-1 items-center" aria-label="Technologies used">
              <Image src="/figma-logo.svg" width={20} height={30} alt="Figma Icon" className="inline-block w-4 h-auto"/>
              <p className="text-center">Figma</p>
              <Image src="/react-logo.svg" width={24} height={24} alt="React Icon" className="inline-block w-6.5 h-auto "/>
              <p className="text-center">React</p>                                                        
              <Image src="/tailwind-css-logo.svg" width={24} height={14} alt="Tailwind CSS Icon" className="inline-block h-auto "/>
              <p className="text-center">Tailwind CSS</p>                          
            </div>            
            <p className="text-sm leading-relaxed text-center">A student-researched redesigned student portal focused on improving navigation and user efficiency.</p>
          </Link>
          {/*since the non webdev projects are in a different aspect ratio and resolution,
          aspect-3200/2100 forces all images to the same aspect ratio (~1.52:1)
          object-cover crops images to fit the forced aspect ratio
          */}
          <Link href="/projects/duck-study-hub" className="shadow-win95-button p-4 flex flex-col w-1/5 gap-2 hover:shadow-win95-button-hover min-w-70">
            <Image src="/duck-study-hub-preview.png" width={3200} height={2100} alt="Duck Study Hub project preview screenshot" className="w-full  border-4 border-primary object-cover"/>
            <h3 className="text-lg text-center underline hover:text-primary">Duck Study Hub</h3>
            <div className="flex flex-row justify-center flex-wrap gap-1 items-center" aria-label="Technologies used">
              <Image src="/figma-logo.svg" width={20} height={30} alt="Figma Icon" className="inline-block  w-4 h-auto"/>
              <p className="text-center">Figma</p>
              <Image src="/handlebars-logo.svg" width={24} height={24} alt="Handlebars Icon" className="inline-block w-6 h-auto bg-[#C3C3C3] aspect-square "/>
              <p className="text-center">Handlebars</p>                                                        
              <Image src="/css-logo.svg" width={24} height={24} alt="CSS Icon" className="inline-block w-6 h-auto "/>
              <p className="text-center">CSS</p> 
              <Image src="/javascript-logo.svg" width={24} height={24} alt="JavaScript Icon" className="inline-block w-6 h-auto "/>
              <p className="text-center">JavaScript</p>                                        
            </div>              
            <p className="text-sm leading-relaxed text-center">On-campus social networking app connecting students through study groups and locations.</p>
          </Link>
          <Link href="/projects/offbrandarm-cpu" className="shadow-win95-button p-4 flex flex-col w-1/5 gap-2 hover:shadow-win95-button-hover min-w-70">
            <Image src="/offbrandarm-cpu-preview.png" width={2559} height={1392} alt="OffBrandARM CPU project preview screenshot" className="w-full aspect-3200/2100 object-cover border-4 border-primary "/>
            <h3 className="text-lg text-center underline hover:text-primary">OffBrandARM CPU</h3>
            <div className="flex flex-row justify-center flex-wrap gap-1" aria-label="Technologies used">
              <Image src="/logisim-evolution-logo.svg" width={24} height={24} alt="Logisim Evolution Icon" className="inline-block w-6 h-auto"/>
              <p className="text-center">Logisim Evolution</p>
              <Image src="/python-logo.svg" width={24} height={24} alt="Python Icon" className="inline-block w-6 h-auto"/>
              <p className="text-center">Python</p>                                                                            
            </div>             
            <p className="text-sm leading-relaxed text-center">Eight-bit CPU with 2² binary representation of 4 total instructions, such as memory-related operations based off the Arm® architecture.</p>
          </Link>         
          <Link href="/projects/gemini-sentiment-analysis-study" className="shadow-win95-button p-4 flex flex-col w-1/5 gap-2 hover:shadow-win95-button-hover min-w-70">
            <Image src="/gemini-sentiment-analysis-study-preview.png" width={3200} height={2100} alt="Gemini Sentiment Analysis Study project preview screenshot" className="w-full  aspect-3200/2100 border-4 border-primary "/>            
            <h3 className="text-lg text-center underline hover:text-primary">Democratizing Text Analysis? A Critical Evaluation of Google's Gemini Pro for Sentiment Classification</h3>
            <div className="flex flex-row justify-center flex-wrap gap-1" aria-label="Technologies used">
              <Image src="/R-logo.svg" width={24} height={24} alt="R Icon" className="inline-block w-6 h-auto"/>
              <p className="text-center">R Programming language</p>                                                                            
            </div>     
            <p className="text-sm leading-relaxed text-center">Statistical analysis comparing the sentiment classification accuracy of Google Gemini Pro against crowdworkers with over 1000 tweets.</p>
          </Link>
        </div>
      </div>
      <Taskbar currentPage="Projects" />
    </div>    
    )


}