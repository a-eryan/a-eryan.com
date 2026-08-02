import TitleBar from "./ui/TitleBar";
import Taskbar from "./ui/Taskbar";
import Image from "next/image";
import Link from "next/link";
/* simple not-found.jsx 404 page, rather than global-not-found.jsx since 
theres no conditional rendering needed based on user state or data fetching */


//make it have a pop up warning and  show the  home page in the background
export default function NotFound() {
    return (
    <div className="flex flex-col min-h-screen justify-between"> {/*stack children vertically and make sure the taskbar is always at the bottom*/}
      <div className="shadow-win95-program flex flex-col grow">
        <div className="absolute inset-0 -z-10">
          <Image src="/a-eryan-bg.png" alt="Background" fill className="opacity-75 md:opacity-100 object-cover md:object-fill object-center -z-10 brightness-300  dark:brightness-100" />
        </div>		                       
        <TitleBar pageName="404" iconSource="/shell_window5-1.png" />
        {/*TODO: make it a pop up window style*/}
        <div className="flex flex-col items-center justify-start align-middle mx-2.5 gap-2 mt-2.5">
          <Image src="/msg_warning-0.png" width={32} height={32} alt="Warning Icon" className="inline-block w-6.5 h-auto"/>
          <h1 className="text-center font-bold">Page Not Found</h1>
          <p className="text-center">You've discovered a page that doesn't exist! This is your opportunity to view this background of the exploration and adventure game <a href="https://dreamsphere.miraheze.org/wiki/Frozen_Soul_(Dream_Game)" className="underline underline-offset-2 hover:text-primary">Frozen Soul</a> in all its pixelated glory.</p>
          <Link href = "/">
          <button className="bg-background ml-auto mr-4 p-2.5 pl-0.6 shadow-win95-button flex items-center gap-2 cursor-pointer active:shadow-win95-active"> 
            Return to About Me page
            <Image src='/msg_question-1.png' width={18} height={18} alt="Home button logo" className="inline-block w-6.5 h-auto"/> 
          </button>
          </Link>
        </div>

      </div>
      <Taskbar currentPage="404" />
    </div>    
    )


}