import React from "react";
import Scott from "@/public/scott.png";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="h-20"></div>
        <div className="flex flex-col justify-start items-center">

        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-center md:items-around h-auto w-full md:mx-10">
          <Image
            src={Scott}
            alt="Scott Greff"
            className="rounded-full w-[50vw] h-[50vw] md:w-[20vw] md:h-[20vw] md:mx-10 mb-5"
          ></Image>

          <div className="flex flex-col justify-around items-start ">
          <h1 className="text-white mb-5 text-4xl m-auto mt-5 md:mx-10">ABOUT</h1>
          <h1 className="text-white text-3xl font-medium mt-5 mb-5 md:mb-10 mx-10">
            Scott Greff
          </h1>
            <p className="text-1.5xl md:text-[1.25rem] text-white font-medium mx-10 mb-10">
              As a dynamic and innovative web developer, my passion lies at the
              intersection of cutting-edge technology and creative solutions. I
              am dedicated to lifelong learning, constantly updating my skills
              to stay ahead in the ever- evolving tech landscape. My
              problem-solving abilities are matched by a robust set of soft
              skills that make me an invaluable team player. I am eager to
              genuinely listen and learn from others and contribute my honest
              insights only when I believe it will aid in resolving challenges.
              With a personal interest in music, cooking, and travel, I bring a
              sense of creativity to the development process, ensuring that code
              not only functions but engages. I am driven by a relentless
              pursuit of excellence, taking pride in writing clean, efficient
              code and seeing tasks through to completion. As I seek to
              contribute to a forward-thinking team, my goal is to deliver
              high-quality web solutions that drive innovation and exceed
              expectations.
            </p>
        <div className="flex justify-center items-center mx-10">
          <a
            href="/scott_greff_resume.pdf"
            download
            className="px-4 py-3 border border-white text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-500 hover:border-transparent transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-1"
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
