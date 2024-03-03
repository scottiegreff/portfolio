import React from "react";
import { CiInstagram } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="mb-20">
      <div className=" w-full text-white font-thin flex flex-row justify-around items-start">
        <div className="flex flex-col justify-between items-start">
          <p>Scott Greff</p>
          <p>© 2024 All rights reserved.</p>
        </div>
        <a
          href="https://www.instagram.com/scottiegreff/?hl=en"
          className="w-10 h-10"
          target="_blank"
        >
          <CiInstagram className="text-5xl" />
        </a>
        <div className="flex flex-col justify-between items-start">
          <p>
            Email:{" "}
            <a href="mailto:scottiegreff@gmail.com">scottiegreff@gmail.com</a>
          </p>
          <p>Text: &#40;778&#41; 389-0344</p>
        </div>
      </div>
    </footer>
  );
}
