import TitleBar from "../../ui/TitleBar";
import Taskbar from "../../ui/Taskbar";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "sentiment-analysis.ai", //TODO chore: figure out why this isnt working with layout.js title template
  description: "sentiment-analysis.ai is an actively developing AI SaaS project that enables users to leverage large language models (LLMs) to perform sentiment analysis on predefined sentiment classification presets from a spreadsheet column.",
};

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen justify-between "> {/*stack children vertically and make sure the taskbar is always at the bottom*/}
      <div className="shadow-win95-program flex flex-col grow  ">    
        <TitleBar pageName="Projects" iconSource="/shell_window5-1.png" />
        <div className="flex flex-row gap-2 items-center mx-2.5 border-b border-[rgba(0,0,0,0.25)] p-1 ">
          <h1 className="text-2xl text-center flex justify-between font-bold p-1">sentiment-analysis.ai</h1>
          <Link href = "https://www.figma.com/design/Pu2odMm0iRw3SotxzN4Suw/sentiment-analysis.ai?node-id=0-1&t=vhPsqcVgbQUPL7FN-1" target="_blank" className="inline-block underline underline-offset-2 hover:text-primary text-2xl">
            <Image src = "/figma-logo.svg" width={20} height={30} alt="Figma Logo" className="inline-block w-4 h-auto"/>Figma Prototype
          </Link>
          <Link href = "https://github.com/a-eryan/sentiment-analysis.ai" target="_blank" className="inline-block underline underline-offset-2 hover:text-primary text-2xl">
            <Image src = "/githubportfolio-icon 1.svg" width={30} height={30} alt="Github Logo" className="inline-block w-6 h-auto"/>Github Repository
          </Link>
        </div>	
        <Image src="/sentiment-analysis.ai.png" width={3200} height={2100} alt="sentiment-analysis.ai project preview screenshot" className="w-full max-w-4xl object-cover mx-auto"/>
        <div className="mb-4 ml-2.5 pb-16 ">
          <h2 className="text-xl mb-2 ">Project Overview</h2>
          <div className="flex flex-row justify-start flex-wrap gap-2 text-center items-center" aria-label="Technologies used">
            <p>Technologies Used: </p>
            <Image src="/figma-logo.svg" width={20} height={30} alt="Figma Icon" className="inline-block w-4 h-auto"/>
            <p>Figma</p>
            <Image src="/react-logo.svg" width={24} height={24} alt="React Icon" className="inline-block w-6 h-auto"/>
            <p>React</p>
            <Image src="/nextjs-logo.svg" width={24} height={24} alt="Next.js Icon" className="inline-block" />
            <p>Next.js</p>
            <Image src="/tailwind-css-logo.svg" width={24} height={24} alt="Tailwind CSS Icon" className="inline-block"/>
            <p>Tailwind CSS</p>                                                              
          </div>
          <p> Role: UX/UI Designer & Full Stack Developer</p>
          <p> Timeline: August 2025 - December 2025 </p>            
          <p className="leading-relaxed"> 
            sentiment-analysis.ai is an actively developing AI SaaS project that enables users to leverage large language models (LLMs) to perform sentiment analysis on predefined sentiment classification presets from a spreadsheet column.
          </p>
          <h2 className="text-xl mt-4 mb-2">Design & Development Process</h2>
          <p className="leading-relaxed"> 
            All personal solo projects share the same common concern – validity. I began researching products in the market over the summer of 2025 to identify if similar products existed. I discovered six products and identified pros and cons for each respective product, ranging from websites, applications, and third party and internal AI spreadsheet functions. I realized from my analysis that no product had all of these criteria:
          </p>
          <ul className="list-disc list-inside leading-relaxed">
            <li>Custom presets for sentiment analyses</li>
            <li>Simple, easy-to-use user experience with less than 6 clicks</li>
            <li>Application where it requires neither downloads or sign-ups to perform sentiment analysis</li>
            <li>Daily limits that exceeded more than approx 20,000 characters for non-paying users</li>
            <li>Sentiment analysis where performing these analyses did not strain the user's performance during runtime (e.g. using machine-learning models locally instead of LLMs from their respective vendor's servers)</li>
          </ul>
          <p className="leading-relaxed"> 
            I developed a high fidelity prototype via Figma, developing how each page possible would look like. I took great inspiration with Anthropic's Claude model where guests who visit claude.ai are greeted to a landing page that convinces the users of the benefits of using the product. This product takes it to the next step, allowing guests to submit their spreadsheets and &quot;demo&quot; the product – no login details required. When guests convert to users, authenticated users will never see the landing page again. The page will only render the product page, including access to account settings such as transparent daily usage tracking. The product in the prototype follows a conversational UI flow – mimicking the ethos of an AI chatbot. At the current minimal viable product state, each request to the product is made using a simple form rather than a robust step-by-step bot conversation.
          </p>
          <h2 className="text-xl mt-4 mb-2">Results & Learning</h2>
          <p className="leading-relaxed">
            I learned how to navigate Next.js and the backend as a service Supabase to create a modern SaaS project without having to worry about authentication and database storage. Given the state of this project, the next steps would involve user research, such as academics, marketers, and quantitative students, to identify potential pitfalls and user experience needs. Such research could also identify whether users would prefer a more efficient form experience from a chatbot experience which is less efficient while being relatively more technically impressive.
          </p>
        </div>
      </div>
      <Taskbar currentPage="Projects" />
    </div>    
  )
}