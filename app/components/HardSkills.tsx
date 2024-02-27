import React from "react";
import { PinContainer } from "../components/ui/3d-pin";

export default function HardSkills() {
  return (
    <>
      <div className="mt-10 lg:mt-20">
        <h4 className="text-white text-[1.75rem]  md:text-[3rem] font-bold mb-10">
          Developers need to utilize many software tools.
        </h4>
      </div>

      <div className="mt-10 lg:mt-20">
        <h4 className="text-white text-[1.5rem] md:text-[2.25rem] font-bold mb-15">
          Here are some hard skills I employ...
        </h4>
      </div>
      <div className="flex flex-wrap justify-center items-start my-10">
        <PinContainer
          className="p-2"
          containerClassName="relative rounded-lg mx-5"
          title="Languages"
          href="https://en.wikipedia.org/wiki/Computer_language"
          body={
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Python</li>
              <li>Java</li>
              <li>C++</li>
              <li>PHP</li>
              <li>SQL</li>
            </ul>
          }
        />
        <PinContainer
          className="p-2"
          containerClassName="relative rounded-lg mx-5"
          title="Front-End Frameworks"
          href=""
          body={
            <ul>
              <li>React</li>
              <li>NextJS</li>
              <li>Django</li>
            </ul>
          }
        />
        <PinContainer
          className="p-5"
          containerClassName="relative rounded-lg mx-5"
          title="Back-End Frameworks"
          href=""
          body={
            <ul>
              <li>Express</li>
              <li>NextJS</li>
              <li>Django</li>
            </ul>
          }
        />
        <PinContainer
          className="p-5"
          containerClassName="relative rounded-lg mx-5"
          title="Runtime Environments"
          href=""
          body={
            <ul>
              <li>NodeJS</li>
              <li>Lambda</li>
              <li>DOTNET</li>
            </ul>
          }
        />
        <PinContainer
          className="p-5"
          containerClassName="relative rounded-lg mx-5"
          title="CSS Frameworks"
          href=""
          body={
            <ul>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>Material-UI</li>
              <li>Bootstrap</li>
              <li>Styled-Components</li>
              <li>ShadCN</li>
            </ul>
          }
        />
        <PinContainer
          className="p-5"
          containerClassName="relative rounded-lg mx-5"
          title="Authentication"
          href=""
          body={
            <ul>
              <li>OAuth</li>
              <li>AuthJS</li>
              <li>JWT</li>
              <li>Sessions</li>
              <li>Database</li>
              <li>Adapters</li>
              <li>Providers (Google,Facebook, etc.)</li>
            </ul>
          }
        />
        <PinContainer
          className="p-5"
          containerClassName="relative rounded-lg mx-5"
          title="API's"
          href=""
          body={
            <ul>
              <li>REST API</li>
              <li>Public</li>
              <li>Token-Based</li>
              <li>Axios</li>
              <li>Fetch</li>
            </ul>
          }
        />
        <PinContainer
          className="p-5"
          containerClassName="relative rounded-lg mx-5"
          title="Security & Prevention"
          href=""
          body={
            <ul>
              <li>SQL Injection</li>
              <li>CORS</li>
              <li>Cross-Site-Scripting</li>
              <li>CSRF</li>
              <li>XSRF</li>
              <li>XSS</li>
            </ul>
          }
        />
        <PinContainer
          className="p-5"
          containerClassName="relative rounded-lg mx-5"
          title="Software Architecture"
          href=""
          body={
            <ul>
              <li>Model-View-Controller</li>
              <li>Client-Server</li>
            </ul>
          }
        />
        <PinContainer
          className="p-5"
          containerClassName="relative rounded-lg mx-5"
          title="State Management"
          href=""
          body={
            <ul>
              <li>Redux</li>
              <li>Context</li>
              <li>Zustands</li>
            </ul>
          }
        />
        <PinContainer
          className="p-5"
          containerClassName="relative rounded-lg mx-5"
          title="Databases"
          href=""
          body={
            <ul>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>SQLite</li>
              <li>JSON</li>
            </ul>
          }
        />
        <PinContainer
          className="p-5"
          containerClassName="relative rounded-lg mx-5"
          title="ORMs"
          href=""
          body={
            <ul>
              <li>Mongoose</li>
              <li>Prisma</li>
              <li>Sequelize</li>
            </ul>
          }
        />
        <PinContainer
          className="p-5"
          containerClassName="relative rounded-lg mx-5"
          title="Repositories"
          href=""
          body={
            <ul>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          }
        />
        <PinContainer
          className="p-5"
          containerClassName="relative rounded-lg mx-5"
          title="Coding Paradigms"
          href=""
          body={
            <ul>
              <li>Functional Programming</li>
              <li>Object-Oriented Programming</li>
              <li>Procedural Programming</li>
            </ul>
          }
        />
        <PinContainer
          className="p-5"
          containerClassName="relative rounded-lg mx-5"
          title="Libraries"
          href=""
          body={
            <ul>
              <li>jQuerry</li>
              <li>React-Redux</li>
              <li>React-Hook-Form</li>
              <li>Zod</li>
              <li>React-Toastify</li>
              <li>React-Router</li>
              <li>JWT</li>
              <li>React-Table</li>
              <li>React-Icons</li>
              <li>React-Date-Picker</li>
              <li>React-Query-Devtools</li>
            </ul>
          }
        />
        <PinContainer
          className="p-5"
          containerClassName="relative rounded-lg mx-5"
          title="3D Libraries"
          href=""
          body={
            <ul>
              <li>Blender</li>
              <li>Spline</li>
            </ul>
          }
        />
        <PinContainer
          className="p-5"
          containerClassName="relative rounded-lg mx-5"
          title="Animation Libraries"
          href=""
          body={
            <ul>
              <li>Adobe After Effects</li>
              <li>Spline</li>
            </ul>
          }
        />
        <PinContainer
          className="p-5"
          containerClassName="relative rounded-lg mx-5"
          title="Graphics Editors"
          href=""
          body={
            <ul>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Premiere Pro</li>
            </ul>
          }
        />
        <PinContainer
          className="p-5"
          containerClassName="relative rounded-lg mx-5"
          title="Audio Recording"
          href=""
          body={
            <ul>
              <li>Logic Pro</li>
              <li>Cubase</li>
              <li>Pro Tools</li>
              <li>Garage Band</li>
              <li>Ableton Live</li>
            </ul>
          }
        />{" "}
        <PinContainer
          className="p-5"
          containerClassName="relative rounded-lg mx-5"
          title="Scott Greff"
          href=""
          body={
            <ul>
              <li></li>
              <li></li>
            </ul>
          }
        />
        <PinContainer
          className="p-5"
          containerClassName="relative rounded-lg mx-5"
          title="Scott Greff"
          href=""
          body={
            <ul>
              <li></li>
              <li></li>
            </ul>
          }
        />
      </div>
    </>
  );
}
