import TitleBar from "../../ui/TitleBar";
import Taskbar from "../../ui/Taskbar";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Democratizing Text Analysis? A Critical Evaluation of Google's Gemini Pro for Sentiment Classification", 
  description: "15-paged paper on the evaluation of Google's Gemini Pro model for sentiment classification tasks via statistical programming in R.",
};

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen justify-between "> {/*stack children vertically and make sure the taskbar is always at the bottom*/}
      <div className="shadow-win95-program flex flex-col grow  ">    
        <TitleBar pageName="Projects" iconSource="/shell_window5-1.png" />
        <div className="flex flex-row gap-2 items-center mx-2.5 border-b border-[rgba(0,0,0,0.25)] p-1">
          <h1 className="text-2xl text-center flex justify-between font-bold p-1">
Democratizing Text Analysis? A Critical Evaluation of Google's Gemini Pro for Sentiment Classification</h1>
          <Link href = "https://github.com/wilkflow/qssProj" target="_blank" className="inline-block underline underline-offset-2 hover:text-primary text-2xl">
            <Image src = "/githubportfolio-icon 1.svg" width={30} height={30} alt="Github Logo" className="inline-block w-6 h-auto"/>Github Repository
          </Link>
        </div>	
        <Image src="/gemini-pro-sentiment-study.png" width={3220} height={953} alt="sentiment-analysis.ai project preview screenshot" className="w-full h-full object-cover mx-auto"/>
        <div className="mb-4 ml-2.5 pb-16">
          <h2 className="text-xl mb-2 ">Project Overview</h2>
          <div className="flex flex-row justify-start flex-wrap gap-2 text-center items-center" aria-label="Technologies used">
            <p>Technologies Used: </p>
            <Image src="/r-logo.svg" width={24} height={24} alt="R Icon" className="inline-block"/>
            <p>R Programing Language</p>
                                                            
          </div>
          <p> Role: Technical Writer & Statistical Programmer </p>
          <p> Timeline: March 2024 - May 2024  </p>            
          <p className="leading-relaxed"> 
            15-paged paper on the evaluation of Google's Gemini Pro model for sentiment classification tasks via statistical programming in R.
          </p>
          <h2 className="text-xl mt-4 mb-2">Design & Development Process</h2>
          <p className="leading-relaxed"> 
After reading Steve Rathje’s and colleagues' paper “GPT is an effective tool for multilingual psychological text analysis” our group came together as a collective to pursue a similar project and contribute to further research on whether other LLMs outside of ChatGPT can meet the same performance when it came to sentiment analysis. I first began looking through publicly available datasets to benchmark the AI against human-labeled ground truth, and discovered the Appen dataset, in which crowdworkers classified tweets. Given that there were 13 sentiment categories, I began by identifying the research methodology:
          </p>
          <ul className="list-disc list-inside leading-relaxed">
            <li>Systematic sampling (every 10th tweet)</li>
            <li> Gemini 1.0 Pro API via R</li>
            <li>Temperature minimized for consistency</li>
            <li>Threshold: minimum 400 queries set</li>
          </ul>
          <p className="leading-relaxed"> 
          As a team of three, we collectively provided at least one statistical analysis involving: 
          </p>
            <ul className="list-disc list-inside leading-relaxed">
                <li>Confusion matrix for accuracy measurement</li>
                <li>Chi-squared test for statistical significance</li>
                <li>Cohen’s Kappa for adjusted accuracy given imbalanced data</li>
                <li>R packages: dplyr, tidyr, ggplot2, caret </li>
            </ul>
          <h2 className="text-xl mt-4 mb-2">Results & Learning</h2>
          <p className="leading-relaxed">
            After running our statistical analyses, we were shocked to find that the overall accuracy was 26.19%, barely above the No Information Rate (accuracy of where the most common sentiment in the dataset becomes chosen) baseline. Given that Gemini’s performance barely exceeds the NIR baseline by not randomly guessing (as evidenced by p &lt 0.001), it provides minimal practical value over simply predicting the most common sentiment for every tweet. Therefore, this implies that the model systematically confuses similar emotions, such as sadness, worry, and anger. Therefore, we found that Gemini Pro 1.0 was far worse than GPT-4’s 60-80%+ performance in comparable studies. 
          </p>
        </div>
      </div>
      <Taskbar currentPage="Projects" />
    </div>    
  )
}