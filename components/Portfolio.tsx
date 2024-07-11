import * as React from "react";
import Image from "next/image";

import { Project } from "@/app/types/Project";
import PortfolioAccordion from "./PortfolioAccordion";
import { Card, CardContent } from "@/components/ui/card";
import { Projects } from "@/components/Projects";
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

const projects: Project[] = Projects;

export default function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <div className="h-5"></div>
        <div className="text-white text-4xl text-center mt-10 md:mt-20 mb-10">
          Portfolio
        </div>
        {/* <div className="flex items-center justify-center my-10">
          <iframe
            className="rounded-3xl hover:shadow-2xl hover:border hover:border-red-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 cursor-pointer w-full h-[70vh]"
            src="https://www.youtube.com/embed/HmPwVHd1VSA?si=i6TD0XUkND6X7qr0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div> */}
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
                  <div className="mx-auto text-white border border-white p-3 flex justify-center items-center w-5 h-5 rounded-full">
                    {index + 1}
                  </div>
                  <Link className="my-10" target="_blank" href={project.link}>
                    <Image
                      className="rounded-3xl hover:shadow-2xl hover:border hover:border-red-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-103 cursor-pointer"
                      src={project.image}
                      alt={project.title}
                    />
                  </Link>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-white text-xl font-semibold text-center mb-5 mx-auto w-[45vw] md:w-[45vw] xl:w-[25vw]"
                  >
                    {project.title}
                  </Link>
                  <div className="text-white text-sm text-center mb-5 mx-auto w-[45vw] md:w-[45vw] xl:w-[25vw]">
                    {project.shortDescription}
                  </div>
                  <hr className="my-4"/>
                  <div className="mx-auto w-[50vw] md:w-[40vw] xl:w-[20vw] mb-10">
                    <PortfolioAccordion project={project} index={index} />
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
