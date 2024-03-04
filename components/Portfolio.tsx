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
    description: "A simulation model of John Conway's infamous Game of Life.",
    image: gol,
    link: "localhost:3000",
    techStack:
      "Vanilla JavaScript, HTML, Bootstrap, Object-Oriented-Programming",
  },
];

export default function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <div className="h-5"></div>
        <div className="text-white text-5xl text-center my-10 md:my-20">
          Portfolio
        </div>
        <div className="flex justify-center items-center">
          <Carousel className="w-[60vw] md:w-full max-w-5xl">
            <CarouselPrevious />
            <CarouselNext />
            <CarouselContent className="-ml-0 lg:ml-50">
              {projects.map((project, index) => (
                <CarouselItem
                  className="flex flex-col md:max-w-lg me-5 lg:me-20"
                  key={index}
                >
                  <Link className="my-10" target="_blank" href={project.link}>
                    <Image
                      className="rounded-3xl hover:shadow-2xl hover:border hover:border-red-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
                      src={project.image}
                      alt={project.title}
                    />
                  </Link>
                  <h2 className="text-white text-xl text-center mb-5 mx-auto w-[50vw] md:w-[40vw] xl:w-[20vw]">
                    {project.title}
                  </h2>
                  <p className="text-white font-thin my-1 mx-auto w-[50vw] md:w-[40vw] xl:w-[20vw] mb-10">
                    {project.description}
                  </p>
                  <div className="mx-auto w-[50vw] md:w-[40vw] xl:w-[20vw] mb-10">
                    <span className="font-bold text-white">Tech Stack:</span>{" "}
                    <span className="font-thin text-white">
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
      </section>
    </>
  );
}
