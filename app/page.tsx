import Image from "next/image";
import HardSkills from "../components/HardSkills";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="mb-20">
      <div className="flex justify-center min-h-[100vh] mb-20">
        <iframe
          src="https://my.spline.design/welcomeblob-4e60ebf4ef3980e3eee6e23dc100691a/"
          frameBorder="0"
          className="w-[100vw] h-[100vh]"
        ></iframe>
      </div>
      <hr />
      <HardSkills />
      <hr className="mt-20 mb-10 md:mb-20" />
      <About />
      <hr className="my-20" />
      <Portfolio />
      <hr className="my-[8vh]" />
      <Footer />
    </main>
  );
}
