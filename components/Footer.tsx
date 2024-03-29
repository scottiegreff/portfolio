import React from "react";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="mb-20">
      <div className="flex justify-center">
        <a
          href="https://www.linkedin.com/in/scott-greff-607341282/"
          className="w-10 h-10"
          target="_blank"
        >
          {" "}
          <CiLinkedin className="text-5xl text-white mx-auto" />
        </a>
        <a
          href="https://www.instagram.com/scottiegreff/?hl=en"
          className="w-10 h-10"
          target="_blank"
        >
          {" "}
          <CiInstagram className="text-5xl text-white mx-auto" />
        </a>
      </div>

      <div className="text-white font-light flex flex-col justify-center my-5 p-3 items-center">
        <p className="text-xs md:text-medium">Scott Greff</p>
        <p className="text-xs md:text-medium">© 2024 All rights reserved.</p>

        <a
          className="text-xs md:text-medium text-right"
          href="mailto:scottiegreff@gmail.com text-white"
        >
          scottiegreff@gmail.com
        </a>
        <p className="text-xs md:text-medium text-right">
          Text: &#40;778&#41; 389-0344
        </p>
      </div>
    </footer>
  );
}
