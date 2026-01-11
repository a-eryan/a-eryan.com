import TitleBar from "../../ui/TitleBar";
import Taskbar from "../../ui/Taskbar";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
	title: "FuelMe", 
	description: "FuelMe is a web-based application to help users set and achieve their fitness goals by calculating personalized calorie and macronutrient targets based on user metadata and tracking daily intake.",
};

export default function Projects() {
	return (
		<div className="flex flex-col min-h-screen justify-between "> {/*stack children vertically and make sure the taskbar is always at the bottom*/}
			<div className="shadow-win95-program flex flex-col grow  ">    
				<TitleBar pageName="Projects" iconSource="/shell_window5-1.png" />
					<div className="flex flex-row gap-2 items-center mx-2.5 border-b border-[rgba(0,0,0,0.25)] p-1">
						<h1 className="text-2xl text-center flex justify-between font-bold p-1">FuelMe</h1>
						<Link href = "https://www.figma.com/design/J9Cw7XPO69sKsJU7dM7rxL/FuelMe?node-id=0-1&t=gonojPCZaCyOg4jN-1" target="_blank" className="inline-block underline underline-offset-2 hover:text-primary text-2xl">
							<Image src = "/figma-logo.svg" width={20} height={30} alt="Figma Logo" className="inline-block w-4 h-auto"/>Figma Prototype
						</Link>
						<Link href = "https://github.com/christendeo/EdgeRunners" target="_blank" className="inline-block underline underline-offset-2 hover:text-primary text-2xl">
							<Image src = "/githubportfolio-icon 1.svg" width={30} height={30} alt="Github Logo" className="inline-block w-6 h-auto"/>Github Repository
						</Link>
					</div>	
				
				<Image src="/fuelme-preview.png" width={3200} height={2100} alt="FuelMe project preview screenshot" className="w-full max-w-4xl object-cover mx-auto"/>
			<div className="mb-4 ml-2.5 pb-16">
				<h2 className="text-xl mb-2 ">Project Overview</h2>
					<div className="flex flex-row justify-start flex-wrap gap-2 text-center items-center " aria-label="Technologies used">
						<p>Technologies Used: </p>
						<Image src="/figma-logo.svg" width={20} height={30} alt="Figma Icon" className="inline-block w-4 h-auto"/>
						<p>Figma</p>
						<Image src="/react-logo.svg" width={24} height={24} alt="React Icon" className="inline-block w-6.5 h-auto "/>
						<p>React</p>
						<Image src="/nextjs-logo.svg" width={24} height={24} alt="Nextjs Icon" className="inline-block "/>
						<p>Nextjs</p>
						<Image src="/tailwind-css-logo.svg" width={24} height={24} alt="Tailwind CSS Icon" className="inline-block "/>
						<p>Tailwind CSS</p>                 
						<Image src="/graph-ql-logo.svg" width={24} height={24} alt="GraphQL Icon" className="inline-block "/>
						<p>GraphQL</p>                                                               
					</div>
					<p> Role: UX/UI Designer & Full Stack Developer</p>
					<p> Timeline: October 2025 - December 2025 </p>            
					<p className="leading-relaxed"> 
						FuelMe is a web-based application to help users set and achieve their fitness goals. 
						FuelMe does this by calculating personalized calorie and macronutrient targets based on user metadata 
						(height, weight, activity level, fitness goals) and having users log meals to track their daily intake 
						with their nutrition goals. 
					</p>
					<h2 className="text-xl mt-4 mb-2">Design & Development Process</h2>
					<p className="leading-relaxed"> 
						I took the initiative in our group of 5 to design the high fidelity application prototype in Figma before any development began. 
						I implemented a design system and component specifications before development. 
					</p>
					<p className="leading-relaxed">   I demonstrated how UI components should look from a design standpoint and how each UI component should function. Additionally, I designed the logo to be the fork and knife in between the speedometer, representing the playfulness of "tracking what you eat", effectively communicating the app's ethos. The typography for the logo and the headers is “Nimbu” – a playful font designed for the food business, while still being professional enough for branding. 
					</p>
					<p className="leading-relaxed"> Our team split the work via database collections, to which I was responsible for the full stack implementation of the food logs collection (portion of the database):
					</p>
					<ul className="list-disc list-inside leading-relaxed">
						<li>GraphQL: Built schema and resolvers for meal create, read, update and delete operations</li>
						<li>Redis: Implemented caching for frequently accessed user meal data, 
						offloading slower read levels from our database to high-speed reading operations for users with extensive meal histories</li>
						<li>Frontend: Developed meal logging interface with date range filtering using React and Next.js</li>
						<li>Styling: Refactored Tailwind CSS across all 5 collections to ensure brand consistency </li>
					</ul>
					<h2 className="text-xl mt-4 mb-2">Results & Learning</h2>
					<p>I successfully delivered a full stack meal logging portion of the website while implementing Redis caching for improved query performance on large datasets for the user’s respective food logs. Additionally, the Figma prototype reinforced the concept of a smooth development process by reducing mid-development design changes and aligning team expectations. In retrospect, defining the Tailwind config file with design tokens from day 1 would allow us to avoid major end-of-project Tailwind CSS refactoring, allowing us to focus on critical bugs to polish. </p>


			</div>
		</div>
			<Taskbar currentPage="Projects" />
		</div>    
	)


}