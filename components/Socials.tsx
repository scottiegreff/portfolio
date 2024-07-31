import React from "react";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";

function Socials() {
  return (
    <div className="flex flex-row gap-4">
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/scott-greff-607341282/"
      >
        <CiLinkedin className="text-[4em] text-red-700 drop-shadow-xl" />
      </Link>
      <Link
        target="_blank"
        href="https://github.com/scottiegreff"
        className="flex items-center justify-center"
      >
        <VscGithub className="text-[3.15em] text-red-700 drop-shadow-xl" />
      </Link>
      <Link
        target="_blank"
        href="https://www.instagram.com/scottiegreff/?hl=en"
      >
        <CiInstagram className="text-[4em] text-red-700 drop-shadow-xl" />
      </Link>
    </div>
  );
}

export default Socials;
