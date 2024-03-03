import React from "react";
import { CiInstagram } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="mb-20">
      <a
        href="https://www.instagram.com/scottiegreff/?hl=en"
        className="w-10 h-10"
        target="_blank"
      >
        {" "}
        <CiInstagram className="text-5xl text-white mx-auto" />
      </a>

      <div className="text-white font-thin flex flex-col p-2 justify-between items-center">
        <p className="text-xs md:text-medium text-white">Scott Greff</p>
        <p className="text-xs md:text-medium text-white">
          © 2024 All rights reserved.
        </p>

        <a
          className="text-xs md:text-medium text-right text-white"
          href="mailto:scottiegreff@gmail.com text-white"
        >
          scottiegreff@gmail.com
        </a>
        <p className="text-xs md:text-medium text-right text-white">
          Text: &#40;778&#41; 389-0344
        </p>
      </div>
    </footer>
  );
}
