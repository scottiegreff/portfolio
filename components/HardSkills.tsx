import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { title } from "process";

/**
 * Renders a component displaying a list of hard skills.
 * @returns JSX.Element
 */
export default function HardSkills() {
  const hardSkills = [
    {
      title: "Languages",
      body: [
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Python",
        "Java",
        "C++",
        "PHP",
        "SQL",
      ],
    },
    {
      title: "Front/Back Frameworks",
      body: ["React", "NextJS", "Express"],
    },
    {
      title: "Runtime Environments",
      body: ["NodeJS", "MS DOTNET"],
    },
    {
      title: "Cloud Services & Deployments",
      body: ["AWS", "Firebase", "Netlify", "Vercel"],
    },
    {
      title: "Databases",
      body: ["PostgreSQL", "MongoDB", "SQLite", "Plain JSON"],
    },
    { title: "ORMs", body: ["Mongoose", "Prisma"] },
    {
      title: "CSS",
      body: ["CSS", "Tailwind", "SASS"],
    },
    {
      title: "Component Libraries",
      body: [
        "ShadCN",
        "React-Bootstrap",
        "Chakra-UI",
        "Styled-Components",
        "Material-UI",
      ],
    },
    {
      title: "State Management",
      body: ["Redux Toolkit", "Context", "Zustand"],
    },
    {
      title: "Authentication & Authorization",
      body: [
        "OAuth",
        "Auth.js",
        "Clerk",
        "Session Based",
        "Token Based ( JWT / JWE )",
        "Adapters",
        "Providers (Google, Facebook)",
      ],
    },
    {
      title: "APIs",
      body: ["REST API", "Fetch", "Axios", "Server Actions"],
    },
    {
      title: "Form Management and Validation",
      body: ["React Hook Form", "ZOD"],
    },

    // // {
    // //   title: "Containerization",
    // //   body: ["Docker", "Kubernetes", "Vagrant", "VirtualBox"],
    // // },
    {
      title: "CI/CD",
      body: ["GitHub Actions", "Jenkins"],
    },

    // {
    //   title: "WebGL",
    //   body: ["ThreeJS", "BabylonJS", "A-Frame", "PlayCanvas", "Regl"],
    // },
    // {
    //   title: "Serverless",
    //   body: ["AWS Lambda", "Azure Functions", "Google Cloud Functions"],
    // },

    { title: "Accessibility", body: ["Aria", "Screen Readers", "UX/UI"] },
    // {
    //   title: "Package Managers",
    //   body: ["NPM", "Yarn", "PNPM", "Vite", "Webpack", "Homebrew"],
    // },

    {
      title: "Security & Prevention",
      body: [
        "SQL Injection",
        "CORS",
        "Cross-Site-Scripting",
        "CSRF",
        "XSS",
        `\u002acontinual education\u002a`,
      ],
    },
    {
      title: "SEO",
      body: [
        "Crawling",
        "Ranking",
        "On-Page Optimization",
        "Keyword Research",
        "Off-Page Optimization",
        "Backlinks",
        "Google Analytics",
        `hrefs\u002a`,
      ],
    },
    { title: "Repositories", body: ["Git", "GitHub"] },
    {
      title: "Software Architecture",
      body: ["Model-View-Controller", `Model-View-ViewModel\u002a`],
    },
    {
      title: "Methodologies",
      body: ["CI/CD", "Agile Development", "Scrum", "Jira"],
    },
    {
      title: "Coding Paradigms",
      body: [
        "Functional Programming",
        "Object-Oriented Programming",
        "Procedural Programming",
        "Declarative Programming",
        "Imperative Programming",
        "Event-Driven Programming",
      ],
    },
    // {title: "Testing", body: ["Jest"]},
    {
      title: "Animation - 2&3D",
      body: [
        "CSS",
        "Spline",
        "Adobe After Effects",
        "Framer Motion",
        "Blender",
      ],
    },
    {
      title: "Graphics Editors",
      body: [
        "Figma",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Adobe Premiere Pro",
      ],
    },
    {
      title: "Audio Recording",
      body: ["Audacity", "Logic Pro", "Cubase", "Garage Band", "Pro Tools"],
    },
  ];

  return (
    <>
      <section id="hardSkills">
        <div className="h-5"></div>
        <div className="mt-10 lg:mt-20">
          <h4 className="text-white text-[1.75rem] md:text-[3rem] font-bold mb-10 md:ms-5">
            Developers need to utilize many software tools.
          </h4>
        </div>

        <div className="mt-10 lg:mt-20">
          <h4 className="text-white text-[1.5rem] md:text-[2.25rem] font-bold mb-15 md:ms-5">
            Here are some hard skills I employ...
          </h4>
        </div>
        <div className="flex flex-row flex-wrap justify-around items-center mt-10">
          {hardSkills.map((skill, index) => (
            <PinContainer
              key={index}
              className="flex flex-col justify-center items-start ps-2 min-h-[40vw] md:min-h-[20vw] lg:min-h-[15vw] xl:min-h-[10vw] 2xl:min-h-[12vw]"
              containerClassName="rounded-lg"
              title={skill.title}
              href=""
              body={
                <ul>
                  {skill.body.map((item, index) => (
                    <li className="py-1" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>

        {/* <p className="text-white text-[1rem] md:text-[1.5rem] font-thin my-10 mx-20 ">
          {`${"*"} == always learning more!`}
        </p> */}
      </section>
    </>
  );
}
