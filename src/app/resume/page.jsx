import TitleBar from "../ui/TitleBar";
import Taskbar from "../ui/Taskbar";
export const metadata = {
  title: "Resume ", 
  description: "Anthony Eryan's portfolio resume page.",
};
export default function Resume() {
    return (
    <div className="flex flex-col h-screen justify-between"> {/*stack children vertically and make sure the taskbar is always at the bottom*/}
      <div className="shadow-win95-program flex flex-col grow overflow-y-auto h-0 pb-16">    
        <TitleBar pageName="Resume" iconSource="/message_file-0.png" />
        <div className="px-2 flex-1">
          <embed src="/Anthony-Eryan-Resume.pdf" type="application/pdf" className="w-full h-full"/>
        </div>
      </div>
      <Taskbar currentPage="Resume" />
    </div>    
    )
}