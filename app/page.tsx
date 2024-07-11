import Image from "next/image";
import { NavbarDemo } from "@/components/Navbar";
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
      <NavbarDemo />
      <div className="flex flex-col md:flex-row md:items-center justify-center h-screen">
        <iframe
          src="https://my.spline.design/welcomeblob-4e60ebf4ef3980e3eee6e23dc100691a/"
          frameBorder="0"
          className="h-screen w-full lg:w-[66vw] me-10"
        ></iframe>
        {/* <div className="grid grid-cols-2 grid-rows-3 p-10 rounded-lg w-[33vw] h-[40vh] m-10"> */}
        <div className="rounded w-full md:w-[33vw] flex flex-col border drop-shadow-xl border-red-700 p-5">
          <ContactForm />
          {/* <CiLinkedin className="col-span-1 row-span-2 text-[5em] text-red-700 mx-auto" />
          <CiInstagram className="col-span-1 row-span-2 text-[5em] text-red-700 mx-auto" /> */}
          <Socials />
        </div>
      </div>

      <hr />
      <Portfolio />
      <hr className="my-20" />
      <About />
      <hr className="my-20" />
      <HardSkills />
      <hr className="mt-20 mb-10 md:mb-20" />
      <Footer />
    </main>
  );
}
