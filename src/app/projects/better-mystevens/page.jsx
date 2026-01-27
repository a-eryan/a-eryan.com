import TitleBar from "../../ui/TitleBar";
import Taskbar from "../../ui/Taskbar";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
		title: "Better MyStevens", 
		description: "Student-researched redesigned student portal focused on improving user efficiency from the current student portal, Workday.",
};

export default function Projects() {
		return (
				<div className="flex flex-col min-h-screen justify-between "> {/*stack children vertically and make sure the taskbar is always at the bottom*/}
						<div className="shadow-win95-program flex flex-col grow  ">
						<TitleBar pageName="Projects" iconSource="/shell_window5-1.png" />
							<div className="flex flex-row gap-2 items-center mx-2.5 border-b border-[rgba(0,0,0,0.25)] p-1">
								<h1 className="text-2xl text-center p-1 font-bold">Better MyStevens</h1>
								<Link href = "https://www.figma.com/design/R6eU7a5rBj1AIen1rv8yZU/CS-545-Better-MyStevens-Prototype?node-id=0-1&t=a8kJkwaxML5j24Cs-1" target="_blank" className="inline-block underline underline-offset-2 hover:text-primary text-2xl">
									<Image src = "/figma-logo.svg" width={20} height={30} alt="Figma Logo" className="inline-block w-4 h-auto"/>Figma Prototype
								</Link>
								<Link href = "https://github.com/a-eryan/CS545_Project" target="_blank" className="inline-block underline underline-offset-2 hover:text-primary text-2xl">
									<Image src = "/githubportfolio-icon 1.svg" width={30} height={30} alt="Github Logo" className="inline-block w-6 h-auto"/>Github Repository
								</Link>
							</div>    						     
						{/* <Image src="/better-mystevens-preview.png" width={3200} height={2100} alt="Better MyStevens project preview screenshot" className="w-full max-w-4xl object-cover mx-auto"/> */}
					<video src="/BetterMyStevensBefore-After.mp4" width={3200} height={1800} controls autoPlay muted playsInline className="w-full max-w-7xl aspect-video object-cover  mt-2 m-auto">
						Your browser does not support the video tag.
					</video>						
						<div className="mb-4 ml-2.5 pb-16">
								<h2 className="text-xl mb-2 font-bold">Project Overview</h2>
										<div className="flex flex-row justify-start flex-wrap gap-2 text-center items-center " aria-label="Technologies used">
											<p>Technologies Used: </p>
											<Image src="/figma-logo.svg" width={20} height={30} alt="Figma Icon" className="inline-block w-4 h-auto"/>
											<p>Figma</p>
											<Image src="/react-logo.svg" width={24} height={24} alt="React Icon" className="inline-block w-6.5 h-auto "/>
											<p>React</p>
											<Image src="/tailwind-css-logo.svg" width={24} height={24} alt="CSS Icon" className="inline-block w-6 h-auto "/>
											<p>Tailwind CSS</p>                                                                         
										</div>
										<p> Role: UX/UI Designer & Full-Stack Developer </p>
										<p> Timeline: February 2025 - May 2025</p>            
										<p className="leading-relaxed"> Student-researched redesigned student portal focused on improving user efficiency from the current student portal, Workday. This was a semester-long project for Human Computer Interaction (CS 545), which included low, medium and our last iteration, the high fidelity prototype that included student-backed data via Jakob Nielsen's Heuristic Evaluation list to measure efficiency, brand authenticity, and prototype functionality.</p>
										<h2 className="text-xl mt-4 mb-2 font-bold">Design & Development Process</h2>
										<p className="leading-relaxed"> As a collective of three, we identified that our primary E (effective, efficient, engaging, error tolerant, easy to learn) is efficient. We chose to revise our student portal for two reasons:</p>
										<ul className="list-disc list-inside leading-relaxed">
												<li>Ease of access to the target audience in a campus setting</li>
												<li>The product aimed to revise is notoriously known to be difficult and unintuitive</li>
										</ul>             
										<p className="leading-relaxed"> We began collecting data from a local community college and identified that:</p>
										<ul className="list-disc list-inside leading-relaxed">
												<li>Our current portal takes 3 more clicks for the semester statement</li>
												<li>Our current portal takes 4 more clicks for the course catalog</li>
										</ul>             
										<p className="leading-relaxed"> Moreover, we decided on Jakob Nielsen's Heuristic Evaluation with designated tasks for our users to compare and contrast our proposed revision and our current student portal, including: </p>
										<ul className="list-disc list-inside leading-relaxed">
												<li>Accessing their course schedule</li>
												<li>Searching/filtering courses to take for next semester</li>
												<li>Viewing financial information</li>
												<li>Viewing Grades</li>
												<li>Viewing the campus resources directory (our MyStevens integration)</li>
										</ul>             
										<h2 className="text-xl mt-4 mb-2 font-bold">Results & Learning</h2>
										<p className="leading-relaxed">
											We surveyed 5 students from our campus to measure efficiency as well as how they felt with their user experience with our high fidelity prototype and how their experience compares with the current student portal. The overall results are as follows: 
										</p>
										<ul className="list-disc list-inside leading-relaxed">
											<li>100% of users could see themselves enjoying the prototype over the current portal, with 40% agreeing and 60% strongly agreeing</li>
											<li>100% of users found that the our buttons were well integrated, with 20% agreeing and 80% strongly agreeing</li>
											<li>80% of users disagreed that the prototype was not accommodating enough for both advanced users and inexperienced users</li>
											<li>All users indicated a reduction in the number of clicks and time to navigate on each designated task, showing up to a 60% reduction of average clicks</li>
										</ul>             
										<p className="leading-relaxed">Based on our feedback, we developed our high fidelity prototype via React and Tailwind CSS, to which I systematically refactored the React codebase to match our Figma specifications and fixed styling inconsistencies.
										</p>
						</div>
				</div>
						<Taskbar currentPage="Projects" />
				</div>    
		)


}