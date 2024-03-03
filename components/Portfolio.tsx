import * as React from "react";
import Image, { StaticImageData } from "next/image";
import recipe from "../public/ai_world_recipes.jpg";
import photography from "../public/analissa_longoria.jpg";
import met from "../public/met.jpg";
import gol from "../public/gol.jpg";
import bakery from "../public/bakery.jpg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { ButtonIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  techStack: string;
};
const projects: Project[] = [
  {
    title: "AI Recipe App - Live",
    description:
      "An AI recipe app that lets you discover and save world recipes based on your dietary preferences.",
    image: recipe,
    link: "https://ai-world-recipes.vercel.app/",
    techStack:
      "Next.js, TypeScript, Tailwind CSS, Auth, SMTP, PostgreSQL, Prisma, ChatGPT API, Vercel Deployment",
  },
  {
    title: "Analissa Longoria Photography - Live",
    description:
      "A photographers work that features fashion and lifestyle. Featured in many magazines and brands.",
    image: photography,
    link: "http://analissalongoria.com/",
    techStack: "Vanilla JavaScript, HTML, CSS, PHP, FTP Server Deployment",
  },
  {
    title: "MET Art Museum - Local",
    description: "Search and discover art from NY's famous MET Museum.",
    image: met,
    link: "localhost:3000",
    techStack: "React, Tailwind CSS, TypeScript, Prisma, PostgreSQL",
  },
  {
    title: "Full Stack Bakery App - Local",
    description: "A mock bakery app that lets you order and track your orders.",
    image: bakery,
    link: "localhost:3000",
    techStack:
      "React, MVC Architecture, Express, Nodemon, Axios, MongoDB, Local Storage",
  },
  {
    title: "John Conway's Game of Life - Local",
    description: "A simulation model of John Conway's, Game of Life.",
    image: gol,
    link: "localhost:3000",
    techStack:
      "Vanilla JavaScript, HTML, Bootstrap, Object-Oriented-Programming",
  },
];

export default function Portfolio() {
  return (
    <>
      <div className="text-white text-5xl text-center my-10 md:my-20">
        Portfolio
      </div>
      <div className="flex justify-center items-center">
        <Carousel className="w-[60vw] md:w-full max-w-5xl">
          <CarouselPrevious />
          <CarouselNext />
          <CarouselContent className="-ml-10 md:ml-10">
            {projects.map((project, index) => (
              <CarouselItem className="flex flex-col md:max-w-2xl" key={index}>
                <Link className="my-10" target="_blank" href={project.link}>
                  <Image
                    className="rounded-3xl"
                    src={project.image}
                    alt={project.title}
                  />
                </Link>
                <h2 className="text-white text-xl mx-auto text-center w-[50vw] mb-5">
                  {project.title}
                </h2>
                <p className="text-white font-thin my-1 mx-auto text-center w-[50vw] md:w-[30vw] mb-5">
                  {project.description}
                </p>
                <div className="mx-auto flex flex-col justify-center items-center md:flex-row md:justify-center md:items-start">
                  <span className="font-bold text-white md:w-[7vw]">
                    Tech Stack:
                  </span>{" "}
                  <span className="font-thin text-white w-[50vw] md:w-[30vw]">
                    {project.techStack}
                  </span>
                </div>
                <div className="my-10 mx-auto text-white border border-white p-3 flex justify-center items-center w-5 h-5 rounded-full">
                  {index + 1}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
