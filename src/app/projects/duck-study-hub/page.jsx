import TitleBar from "../../ui/TitleBar";
import Taskbar from "../../ui/Taskbar";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
		title: "Duck Study Hub", 
		description: "Duck Study Hub is a collaborative project developed using Handlebars, CSS, and JavaScript, designed to facilitate study group management and resource sharing.",
};

export default function Projects() {
		return (
				<div className="flex flex-col min-h-screen justify-between "> {/*stack children vertically and make sure the taskbar is always at the bottom*/}
						<div className="shadow-win95-program flex flex-col grow  ">    
							<TitleBar pageName="Projects" iconSource="/shell_window5-1.png" />
							<div className="flex flex-row gap-2 items-center mx-2.5 border-b border-[rgba(0,0,0,0.25)] p-1">
								<h1 className="text-2xl text-center p-1 font-bold">Duck Study Hub</h1>
								<Link href = "https://www.figma.com/design/LBbsnbGLlVahpSZpglYhKc/Duck-StudyHub?node-id=0-1&t=1PmttuJqjYhQDRjA-1" target="_blank" className="inline-block underline underline-offset-2 hover:text-primary text-2xl">
									<Image src = "/figma-logo.svg" width={20} height={30} alt="Figma Logo" className="inline-block w-4 h-auto"/>Figma Prototype
								</Link>
								<Link href = "https://github.com/a-eryan/cs-546-group-proj" target="_blank" className="inline-block underline underline-offset-2 hover:text-primary text-2xl">
									<Image src = "/githubportfolio-icon 1.svg" width={30} height={30} alt="Github Logo" className="inline-block w-6 h-auto"/>Github Repository
								</Link>
							</div> 
						<Image src="/duck-study-hub-preview.png" width={3200} height={2100} alt="Duck Study Hub project preview screenshot" className="w-full max-w-4xl object-cover mx-auto"/>
						<div className="mb-16 ml-2.5 ">
								<h2 className="text-xl mb-2 ">Project Overview</h2>
										<div className="flex flex-row justify-start flex-wrap gap-2 text-center items-center" aria-label="Technologies used">
												<p>Technologies Used: </p>
												<Image src="/figma-logo.svg" width={20} height={30} alt="Figma Icon" className="inline-block w-4 h-auto"/>
												<p>Figma</p>
												<Image src="/handlebars-logo.svg" width={24} height={24} alt="Handlebars Icon" className="inline-block w-6 aspect-square bg-[#C3C3C3]"/>
												<p>Handlebars</p>
												<Image src="/css-logo.svg" width={24} height={24} alt="CSS Icon" className="inline-block h-auto "/>
												<p>CSS</p>
												<Image src="/javascript-logo.svg" width={24} height={24} alt="JavaScript Icon" className="inline-block "/>
												<p>JavaScript</p>                                                                          
										</div>
										<p> Role: UX/UI Designer & Full Stack Developer </p>
										<p> Timeline: April 2025 - May 2025 </p>            
										<p className="leading-relaxed"> Campus-based social networking application where students rate and review study spots, discuss in forums, and filter locations by noise level and available resources.</p>
										<h2 className="text-xl mt-4 mb-2">Design & Development Process</h2>
										<p className="leading-relaxed">
											I began this project by introducing a high-fidelity Figma prototype for the project's landing page once the user is authenticated. The prototype introduces the specific styling of the entire website, following the school’s official branding guidelines that I have obtained working as a Student Digital Strategist for the School of Humanities, Arts and Social Sciences, which included primary colors, secondary colors, typography, font styling, and design guidelines. The Figma prototype’s main design is the grid approach to each study spot.  Each study spot is visualized as a card component that shows the user’s study spot thumbnail, a call-to-action to comment or rate the spot, the original poster’s username, and the average rating visualized as a five-star scale. This ensures information is consolidated in a uniform way while still being easy to process, given the common convention of reviewing sites and social media sites with the preview of a post with key details.
											The prototype served as a blueprint for translating design to CSS rules, which was our earliest form of development. Subsequently, we split development by each database collection (portion of the database) to which I was responsible for the full stack forum functionality(CRUD operations, Express.js routing, client-side validation) and additionally developed:
										</p>  
										<ul className="list-disc list-inside leading-relaxed">
											<li>A dynamic filtering and searching of campus study spots via direct DOM manipulation for a better user experience</li>         
											<li>CSS breakpoints for responsive mobile design (viewport width with less than 982 pixels)</li>
											<li>Client-side validation for forum reporting</li>
											<li>Profile picture feature, where users can upload an image to represent their profile picture </li>
										</ul>
										<h2 className="text-xl mt-4 mb-2">Results & Learning</h2>
										<p className="leading-relaxed">
											I learned from experience how useful it was to get the ball rolling with Figma, even if it was a single landing page, as well as create initial HTML elements with their respective rules. As a group of four, we met the overwhelming majority of our expectations in our codebase by preventing XSS attacks, with comprehensive input invalidation, while having the time to incorporate the full stack implementation of profile pictures as our extra credit proposal. 
											Moving forward, post-launch testing could assess whether our grid-approach of the study spots landing pages provides an eloquent user experience and how students on our campus feel about using our product throughout their user journey. 
										</p>
						</div>
				</div>
						<Taskbar currentPage="Projects" />
				</div>    
		)


}