import Link from "next/link";
import bg from 'public/bgnew.jpeg'
import { Josefin_Sans } from "next/font/google";

const Josefin = Josefin_Sans({ subsets: ['latin'] });

export default function HomePage() {  
  return (
    <div className={"HomePage " + Josefin.className} style={
     {
      backgroundImage :`url(${bg.src})`,
     }
    }>
    <h1>ElectiveGenie</h1>
    <p>Smart Elective Choices, Powered by AI.</p>
    <a href="/dashboard"><button>Get Started</button></a>
    </div>
  );
}
