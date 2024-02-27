import Image from "next/image";
import HardSkills from "./components/HardSkills";
import Portfolio from "./components/Portfolio";
import About from "./components/About";



export default function Home() {
  return (
    <main className="">
      <div className="flex justify-center min-h-[100vh]">
        <iframe
          src="https://my.spline.design/welcomeblob-4e60ebf4ef3980e3eee6e23dc100691a/"
          frameBorder="0"
          className="w-[100vw] h-[100vh]"
        ></iframe>
      </div>
      <hr />
      <HardSkills />
      <hr className="my-10" />
      <About />
      <hr className="my-10" />
      <Portfolio />
    </main>
  );
}
