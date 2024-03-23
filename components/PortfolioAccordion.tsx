import { Project } from "@/app/types/Project";
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
        <AccordionTrigger className="text-white text-md font-light my-1 mx-auto w-[50vw] md:w-[40vw] xl:w-[20vw] mb-5">
          Description
        </AccordionTrigger>
        <AccordionContent className="text-white text-md font-light my-1 mx-auto w-[50vw] md:w-[40vw] xl:w-[20vw] mb-5">
          {project.description}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-white text-md font-light my-5 mx-auto w-[50vw] md:w-[40vw] xl:w-[20vw] ">
          Tech Stack
        </AccordionTrigger>
        <AccordionContent className="text-white text-md font-light my-5 mx-auto w-[50vw] md:w-[40vw] xl:w-[20vw] ">
          {project.techStack}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-white text-md font-light my-5 mx-auto w-[50vw] md:w-[40vw] xl:w-[20vw] ">
          Code Examples
        </AccordionTrigger>
        <AccordionContent className="text-white text-md font-light mx-auto w-[50vw] md:w-[40vw] xl:w-[20vw]">
          {project.codeExample.map((code, index) => (
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="text-white text-md font-light my-1 w-[50vw] md:w-[40vw] xl:w-[20vw] py-2 text-left">
                    {code.skill}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-white text-md font-light my-1 mx-auto w-[50vw] md:w-[40vw] xl:w-[20vw]">
                    {code.description}
                  </div>
                  <div className="text-white text-md font-light my-1 mx-auto w-[50vw] md:w-[40vw] xl:w-[20vw] mb-10">
                    <a
                      className="text-md font-bold my-1 mx-auto w-[50vw] md:w-[40vw] xl:w-[20vw] text-red-100 hover:text-red-400 hover:cursor-pointer"
                      href={code.link}
                      target="_blank"
                    >
                      Github Code example for: {code.skill}.
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
