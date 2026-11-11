import TitleBar from "../../ui/TitleBar";
import Taskbar from "../../ui/Taskbar";
import Image from "next/image";
import SlideShow from "@/app/ui/SlideShow";
import BackgroundImage from "../../ui/BackgroundImage";

export const metadata = {
  title: "Spendly Website Redesign", //TODO chore: figure out why this isnt working with layout.js title template
  description: "Spendly is a B2B startup focused on providing innovative financial solutions for small businesses.",
};

export default function Projects() {
  return (
    <div className="case-study flex flex-col min-h-screen justify-between "> {/*stack children vertically and make sure the taskbar is always at the bottom*/}
      <div className="shadow-win95-program flex flex-col grow relative ">
        <BackgroundImage />
        <TitleBar pageName="Projects" iconSource="/shell_window5-1.png" />
        <div className="flex flex-col sm:flex-row gap-2 items-center mx-2.5 border-b border-foreground/25 p-1 ">
          <h1 className="text-center flex justify-between font-bold p-1">Spendly Website Redesign</h1>
            
            <a href = "https://www.figma.com/design/xy722Y9N54lYzzkIehin3f/Spendly-Hi-Fi-Prototype--public-?node-id=1-2424&t=N3vPGCekXarbghrF-1" target="_blank" className="inline-block underline underline-offset-2 hover:text-primary icon-link">
                <Image src = "/figma-logo.svg" width={20} height={30} alt="Figma Logo" className="inline-block w-4 h-auto"/>Figma Prototypes
            </a>          
            <a href = "https://web.archive.org/web/20260827003743/https://www.getspendly.com/" target="_blank" className="inline-block underline underline-offset-2 hover:text-primary icon-link">
                <Image src = "/website-icon.png" width={30} height={30} alt="Website Indicator Logo" className="inline-block w-6 h-auto"/>Live Website (Archive)
            </a>
            
        </div>
        <div className="flex flex-col xl:flex-row xl:items-start">
        <SlideShow slidesSources={["/getspendly-1.png", "/getspendly-2.png", "/getspendly-3.png"]} className="xl:ml-2.5 xl:w-1/2 xl:max-w-none" />
        <div className="mb-4 ml-2.5 xl:w-1/2">
          <h2 className="my-2 font-bold">Project Overview</h2>
          <div className="flex flex-row justify-start flex-wrap gap-2 text-center items-center" aria-label="Technologies used">
            <p>Technologies Used: </p>
            <Image src="/figma-logo.svg" width={20} height={30} alt="Figma Icon" className="inline-block w-4 h-auto"/>
            <p>Figma</p>

            <Image src="/webflow-logo.svg" width={24} height={24} alt="Webflow Icon" className="inline-block w-6 h-auto"/>
            <p>Webflow</p>

          </div>
          <p> Role: Product Designer & Webflow Developer</p>
          <p> Timeline: May 2026 - August 2026 </p>
          <p className="leading-relaxed">
            Summer website redesign of Spendly, a B2B startup targeting enterprise, investment banking & mergers and acquisitions, private equity, and partnership clients. Spendly went from a basic Webflow template with stock images to engaging UX illustrations and a more "dealmaking" layout and design that reached 300+ monthly unique visitors.

          </p>
        </div>
        </div>
        <div className="mb-4 ml-2.5 pb-16 ">
          <h2 className="mt-4 mb-2">Design & Development Process</h2>
          <p className="leading-relaxed"> 
            The first step in the Spendly redesign project was understanding the company's website pain points. The company claimed that the templated site felt too generic, which aligned with my initial impression given the use of stock images to seemingly compensate for the lack of strong visuals. While continually learning about Spendly throughout several meetings for syncs across this project and other ones, I conducted a competitive analysis of successful financial technology (fintech) websites to identify what exactly a Spendly website could look like, and the following sites inspired the final design:
          </p>
          <ul className="list-disc list-inside leading-relaxed">
            <li>Stripe's use of a dedicated statistics section with a stronger sense of visuals to reinforce the value proposition, as well as a stronger use of branding colors to emphasize certain sections such as the hero section.</li>
            <li>BILL's Spend & Expense's interactive yet automatic high-level step demonstration of the three steps (ingest, analyze, save).</li>
          </ul>
          <p className="leading-relaxed"> 
            Next, I began the design process by creating a low-fidelity prototype via Figma to visualize the new layout and design of the Spendly website, with team members afterwards providing a prototype of their own via Claude Design, which provided an initial pre-approved layout and "dealmaking" text content that sparked further discussion and ideas for an on-brand high-fidelity prototype. The high-fidelity prototype went through four iterations, with the primary changes involving capturing a stronger use of branding colors with custom mesh gradients and UX illustrations to personalize and provide stronger visualizations to parse the value proposition of the product. My primary UX illustrations were the three-step illustrations showing how Spendly works, which drew on BILL’s step demonstration, and the animated isometric finance stack in the hero section. I followed the same design ethos throughout the four additional pages dedicated to specific B2B verticals: stronger emphasis on branding colors, and high-level, yet concise illustrations for the target audience.
          </p>
          <h2 className="mt-4 mb-2">Results & Learning</h2>
          <blockquote className="border-l-4 border-primary pl-4 mt-4 mb-2">
            <p className="leading-relaxed">
              "The new website is a huge improvement over the old one. The design is much more modern and professional, and the content is much more clear and concise. The new website is also much more engaging, with the use of illustrations and animations. Overall, I am very happy with the new website and I think it will help us attract more customers." —Matthew Godley, Co-founder & CEO of Spendly (August 21st, 2026)
            </p>
          </blockquote>          
          <p className="leading-relaxed">
            It was a great privilege to be the sole designer and developer of a redesign project for a startup with 300+ monthly unique visitors. Despite all the pivots that were made internally and at times feeling like no initial progress was being made, I persevered due to my professionalism and commitment to the company and the project, no matter how many initial designs or directions were scrapped in the process. On the technical side, I learned how to create more complex UX illustrations (e.g., isometric illustrations via Figma) and utilized an AI workflow that didn't replace my interdisciplinary design and development skills, but rather amplified them with subtle motion design, SEO audits, and performance fixes (particularly with SVG files that were too large due to a rasterized export from Figma) that led to a high 90s PageSpeed Insights score for the website on both desktop and mobile.
          </p>
        </div>
          
      </div>
      <Taskbar currentPage="Projects" />
    </div>    
  )
}