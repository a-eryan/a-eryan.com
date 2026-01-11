import {Inconsolata } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

// const W95Font = localFont({
//   src: "../../public/W95FA.otf",
//   variable: "--font-w95",
// }); 

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata = {
  title: {
    template: `%s - Anthony Eryan's Portfolio`,
    default: "Anthony Eryan's Portfolio",
  },
  description: "Website portfolio of Anthony Eryan, showcasing web development, design projects, and the respective skills used. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.variable} antialiased font-inconsolata`}
      >
        {children} {/* all the unique components that get actively rendered in each respective page */}
      </body>
    </html>
  );
}
