import React from "react";
import Scott from "@/public/scott.png";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex flex-col justify-start items-center">
        <h1 className="text-white text-5xl">ABOUT</h1>
        <h1 className="text-white text-3xl font-thin mt-5 mb-5 md:mb-0">
          Scott Greff
        </h1>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center md:items-around h-auto w-full md:mx-10">
        <Image
          src={Scott}
          alt="Scott Greff"
          className="rounded-full w-[50vw] h-[50vw] md:w-[20vw] md:h-[20vw] md:mx-10 mb-5"
        ></Image>

        <div className="flex flex-col justify-around items-center">
          <p className="text-1.5xl md:text-2xl text-white font-thin mx-10 mb-10">
            Scott is a full-stack developer with a passion for creating
            beautiful and functional web applications.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a
          href="/resume.pdf"
          download
          className="px-4 py-3 border border-white text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-500 hover:border-transparent transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-1"
        >
          DOWNLOAD RESUME
        </a>
      </div>
    </>
  );
}
