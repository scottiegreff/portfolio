import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import HardSkills from "../components/HardSkills";
import Socials from "@/components/Socials";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Footer from "../components/Footer";

import { ContactForm } from "@/components/ContactForm";

//
export default function Home() {
  return (
    <main className="mb-20 w-full m-auto">
      <Navbar />
      <div className="flex flex-col justify-around items-center  md:flex-row md:items-center h-screen">
        <iframe
          src="https://my.spline.design/welcomeblob-4e60ebf4ef3980e3eee6e23dc100691a/"
          frameBorder="0"
          
          className="w-full h-[50vh] md:h-full lg:w-[50vw] me-10"
        ></iframe>
        <div className="rounded w-full md:w-[40vw] h-auto flex flex-col justify-center items-center border drop-shadow-xl border-red-700 p-5">
          {/* <ContactForm /> */}
          <iframe className="mb-5 w-full md:w-[35vw] md:h-[35vh] " src="https://www.youtube.com/embed/HmPwVHd1VSA?si=3PbeEEeHjwgoJpbk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <Socials />
        </div>
      </div>

  
      <hr className="my-10" />
      <About />
      <hr className="mt-20" />
      <Portfolio />
      {/* <hr className="mt-20" />
      <HardSkills /> */}
      <hr className="mt-20 mb-10 md:mb-20" />
      <Footer />
    </main>
  );
}
