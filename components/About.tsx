import React from "react";
import Scott from "@/public/scott.png";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="flex flex-col justify-start items-center"></div>
        <div className="flex flex-col items-center md:flex-row md:justify-center md:items-around h-auto w-full md:mx-10">
          <Image
            src={Scott}
            alt="Scott Greff"
            className="rounded-full w-[50vw] h-[50vw] md:w-[20vw] md:h-[20vw] md:mx-10 mb-5"
          ></Image>

          <div className="flex flex-col justify-around items-start ">
            <h1 className="text-white mb-5 text-4xl m-auto mt-5 md:mx-10">
              ABOUT
            </h1>
            <h1 className="text-white text-2xl md:text-3xl font-medium mt-5 mb-5 md:mb-10 mx-10">
              Scott Greff
            </h1>
            <p className="text-1.5xl md:text-[1.25rem] text-white font-medium mx-10 mb-10">
              A Full Stack Developer with experience in developing web
              applications, back-end services, and databases. Proficient in
              deploying and maintaining applications on cloud-based production
              environments, designing relational database systems, and
              integrating third-party services to expand features, speed, and
              security. Successfully implement event-driven microservices,
              e-commerce platforms, cross-origin applications, and data
              analytics, all while maintaining type-safe, state-managed, and
              validated codebases.
            </p>
            <div className="flex justify-center items-center mx-10">
              <a
                href="/scott_greff_resume.pdf"
                download
                className="px-4 py-3 border border-white text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-500 hover:border-transparent transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-1"
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
