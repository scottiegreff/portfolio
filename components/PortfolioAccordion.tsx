import { Project } from "@/app/types/Project";
import { FaGithub } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

export default function PortfolioAccordion({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <div className="flex justify-center items-center">
          <AccordionTrigger className="text-white text-md font-semibold mx-auto my-5 w-[50vw] md:w-[40vw] xl:w-[20vw]">
            Github Code Example{" "}
            <FaGithub size={50} className="text-white p-3" />
          </AccordionTrigger>
        </div>
        <AccordionContent className="text-white text-md font-semibold mx-auto w-[50vw] md:w-[40vw] xl:w-[20vw]">
          {project.codeExample.map((code, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem key={index} value="item-1">
                <AccordionTrigger key={index}>
                  <div
                    key={index}
                    className="text-white text-md font-semibold my-1 w-[50vw] md:w-[40vw] xl:w-[20vw] py-2 text-left"
                  >
                    {code.skill}
                  </div>
                </AccordionTrigger>
                <AccordionContent key={index}>
                  <div
                    key={index}
                    className="text-white text-md font-semibold my-1 mx-auto w-[50vw] md:w-[40vw] xl:w-[20vw]"
                  >
                    {code.description}
                  </div>
                  <div
                    key={index}
                    className="text-white text-md font-semibold my-1 mx-auto w-[50vw] md:w-[40vw] xl:w-[20vw] mb-10"
                  >
                    <div className="flex justify-center items-center">
                      <FaGithub className="me-2" size={25} />
                      <a
                        className="text-md font-bold my-1 mx-auto w-[50vw] md:w-[40vw] xl:w-[20vw] text-red-100 hover:text-red-400 hover:cursor-pointer"
                        href={code.link}
                        target="_blank"
                        key={index}
                      >
                        Code example for: {code.skill}.
                      </a>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-white text-md font-semibold my-5 mx-auto w-[50vw] md:w-[40vw] xl:w-[20vw] ">
          Tech Stack
        </AccordionTrigger>
        <AccordionContent className="text-white text-md font-medium my-5 mx-auto w-[50vw] md:w-[40vw] xl:w-[20vw] ">
          {project.techStack}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger  className="text-white text-md font-semibold my-5 mx-auto w-[50vw] md:w-[40vw] xl:w-[20vw] ">
          Full Description
        </AccordionTrigger>
        <AccordionContent  className="text-white text-md font-medium my-5 mx-auto w-[50vw] md:w-[40vw] xl:w-[20vw] ">
          {project.description}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
