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
      <div className="flex flex-col md:flex-row md:items-center justify-center h-screen">
        <iframe
          src="https://my.spline.design/welcomeblob-4e60ebf4ef3980e3eee6e23dc100691a/"
          frameBorder="0"
          
          className="h-screen w-full lg:w-[66vw] me-10"
        ></iframe>
        <div className="rounded w-full md:w-[33vw] flex flex-col border drop-shadow-xl border-red-700 p-5">
          <ContactForm />
          <Socials />
        </div>
      </div>

  
      <hr className="my-10" />
      <About />
      <hr className="mt-20" />
      <Portfolio />
      <hr className="mt-20" />
      <HardSkills />
      <hr className="mt-20 mb-10 md:mb-20" />
      <Footer />
    </main>
  );
}
