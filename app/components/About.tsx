import React from "react";
import Scott from "@/public/scott.png";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center h-auto">
      <img
        className="w-[60vw] md:w-[20vw] my-10 rounded-full"
        src={Scott.src}
      ></img>
      <div className="flex flex-col h-[30vh] w-[] justify-around items-center">
        <h1 className="text-3xl md:text-5xl text-white mx-10 font-light mb-3">
          SCOTT GREFF'S
        </h1>
        <h3 className="text-2xl md:text-3xl text-white font-light">
          PORTFOLIO
        </h3>
        <p className="text-1.5xl md:text-2xl text-white font-thin mx-10 my-5">
          I am a full-stack developer with a passion for creating beautiful and
          functional web applications.
        </p>
        <a
          href="/resume.pdf"
          download
          className="px-4 py-2 m-auto border border-transparent text-sm font-medium rounded-md text-black bg-red-400 hover:bg-red-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-1"
        >
          DOWNLOAD RESUME
        </a>
      </div>
    </div>
  );
}
