import TitleBar from "../../ui/TitleBar";
import Taskbar from "../../ui/Taskbar";
import Image from "next/image";
import Link from "next/link";
import SlideShow from "@/app/ui/SlideShow";

export const metadata = {
	title: "Lumen Labs", 
	description: "Lumen Labs is a Senior Design capstone project at Stevens Institute of Technology, an AI-driven platform designed to democratize career prospects and research opportunities for graduate students.",
};

export default function Projects() {
	return (
		<div className="flex flex-col min-h-screen justify-between "> {/*stack children vertically and make sure the taskbar is always at the bottom*/}
			<div className="shadow-win95-program flex flex-col grow  ">    
				<TitleBar pageName="Projects" iconSource="/shell_window5-1.png" />
					<div className="flex flex-row gap-2 items-center mx-2.5 border-b border-[rgba(0,0,0,0.25)] p-1">
						<h1 className="text-2xl text-center flex justify-between font-bold p-1">Lumen Labs</h1>
						<Link href = "https://www.figma.com/design/pgnrs6JiRIQnlnjnMETaSt/Hi-Fi--Lumen-Labs?node-id=193-318&t=Jo5g32x5DVT3Devc-1" target="_blank" className="inline-block underline underline-offset-2 hover:text-primary text-2xl">
							<Image src = "/figma-logo.svg" width={20} height={30} alt="Figma Logo" className="inline-block w-4 h-auto"/>Figma Prototype
						</Link>
						<Link href = "https://lumenlabs-rose.vercel.app/" target="_blank" className="inline-block underline underline-offset-2 hover:text-primary text-2xl">
							<Image src = "/website-icon.png" width={30} height={30} alt="Website Indicator Logo" className="inline-block w-6 h-auto"/>Live Website (Preview)
						</Link>
					</div>	
				<SlideShow slidesSources={["/lumen-labs-preview.png", "/lumen-labs-career-center.png", "/lumen-labs-career-center-2.png", "/lumen-labs-community-directory.png", "/lumen-labs-faculty-directory.png"]} />
			<div className="mb-4 ml-2.5 pb-16">
				<h2 className="text-xl mb-2 ">Project Overview</h2>
					<div className="flex flex-row justify-start flex-wrap gap-2 text-center items-center " aria-label="Technologies used">
						<p>Technologies Used: </p>
						<Image src="/figma-logo.svg" width={20} height={30} alt="Figma Icon" className="inline-block w-4 h-auto"/>
						<p>Figma</p>
						<Image src="/react-logo.svg" width={24} height={24} alt="React Icon" className="inline-block w-6.5 h-auto "/>
						<p>React</p>
						<Image src="/nextjs-logo.svg" width={24} height={24} alt="Next.js Icon" className="inline-block "/>
						<p>Next.js</p>
						<Image src="/tailwind-css-logo.svg" width={24} height={24} alt="Tailwind CSS Icon" className="inline-block "/>
						<p>Tailwind CSS</p>                                                                              
					</div>
					<p> Role: Product Designer & Full Stack Developer</p>
					<p> Timeline: September 2025 - May 2026 </p>            
					<p className="leading-relaxed"> 
            Lumen Labs is a Senior Design capstone project at Stevens Institute of Technology that aims to democratize career prospects and research opportunities for graduate students via personalized AI-driven recommendations and a community directory.
            As a group of six, we validated the problem space across 30+ interviews with professors, graduate students, and advisors. 
					</p>
					<h2 className="text-xl mt-4 mb-2">Design & Development Process</h2>
					<p className="leading-relaxed"> 
            I took the initiative in the beginning of the academic year to design the low fidelity prototype in Figma to validate the user flow and core features of the application with users before any development began. 
            I also lead the initiative on the software architecture, effectively choosing the technology stack and pitching it to the team as well as our project sponsor. 
            Upon the technical development phase of the project, I was responsible for designing the high fidelity prototype in Figma, as well as the site-wide frontend.
            The Figma prototype provided is an earlier version of the design system where the typography was more playful (Poppins for headers and Inter for body), given our former name (Bright Lights). The typography for the current design is more mature and professional (Instrument Serif for headers and Inter for body) to reflect formality and seriousness of the application.
            The overall design ethos of the application was to be modern and intuitive enough that graduate students would not have to be onboarded to use the application, while still leaving a unique brand identity of a modern solution to a common problem in current academia.
            I utilized the project sponsor's existing branding guidelines involving color, typography, logo and shapes to design the UI components and the overall site. 
					</p>
					<h2 className="text-xl mt-4 mb-2">Results & Learning</h2>
					<p>Through my Senior Design experience, I gained the opportunity to speak to various stakeholders for our project, ranging from research professors at Stevens Institute of Technology to a Machine Learning Postdoctoral Researcher at Tufts.
          I was intrigued to learn about the results that were generated from our validation interviews:
          </p>
          <ul className="list-disc list-inside leading-relaxed">
            <li>Financial stress is real but accepted as structural: F-1 visa restrictions limiting income options, validating for a visa-aware career filtering feature.</li>
            <li>Students have assessed scientific feasibility yet lack basic market frameworks (value proposition, customer segmentation, market sizing).</li>
            <li>Students rely on almost exclusively on informal connections or LinkedIn, with networking inequality causing a barrier due to advisor networks and personal confidence.</li>
            <li>Not every student wants to commercialize their research, validating for the need to provide options for users with career clarity rather than commercialization.</li>
            <li>The big three for career decisions: salary, location, and work-life balance, validating the need for the career assistant to lead with these priorities.</li>
            <li>Retention: One research director explicitly noted that many platforms already exist yet students do not use them consistently.</li>
          </ul>
          <p className="leading-relaxed">
            I also learned how to navigate the complexities of working with a larger team of six, which involved more communication overhead and having to take the initiative to lead the team in terms of technical contributions and meetups with our project sponsor. 
          </p>


			</div>
		</div>
			<Taskbar currentPage="Projects" />
		</div>    
	)


}