import React from "react";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

function Socials() {
  return (
    <div className="flex flex-row gap-4 mt-5">
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/scott-greff-607341282/"
      >
        <CiLinkedin className="text-[4em] text-red-700 drop-shadow-xl" />
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
