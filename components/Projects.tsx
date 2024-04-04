import React from "react";
import { Project } from "@/app/types/Project";
import recipe from "../public/ai_world_recipes.jpg";
import admin from "../public/ecomm-admin.jpg";
import store from "../public/ecomm-store.jpg";
import photography from "../public/analissa_longoria.jpg";
import met from "../public/met.jpg";
import gol from "../public/gol.jpg";
import bakery from "../public/bakery.jpg";

export const Projects: Project[] = [
  {
    title: "AI Recipe App",
    description:
      "An AI recipe app that lets you discover and save world recipes based on your dietary preferences.",
    image: recipe,
    link: "https://ai-world-recipes.vercel.app/",
    techStack:
      "Next.js, TypeScript, Tailwind, Auth, SMTP, PostgreSQL, Prisma, ChatGPT API, Vercel Deployment",
    codeExample: [
      {
        skill: "Asynchronous Code",
        description:
          "Asynchronous calls are crucial when interacting with a database or performing any other non-blocking tasks. Concurrent processing maintains responsiveness by not halting the main execution thread, resulting in a better user experience.",
        image: "http://example.com/react.png",
        link: "https://github.com/scottiegreff/ai-world-recipes/blob/main/app/api/recipes/route.ts",
      },
      {
        skill: "Authentication & Authorization",
        description:
          "JWT authentication involves issuing a token upon successful user sign-in, encapsulating user credentials and preferences encrypted into the JWT for the user's session. This token is then used for subsequent requests to validate user sessions, ensuring secure and efficient authentication across the application as needed.",
        image: "http://example.com/react.png",
        link: "https://github.com/scottiegreff/ai-world-recipes/blob/main/lib/actions/authActions.ts",
      },
      {
        skill: "ChatGPT API",
        description:
          "Using OpenAI's ChatGPT API, allows for a more interactive and engaging user experience. By sending the user's request, secret token, and CORS options to the API, the client receives a custom and dynamic response.",
        image: "http://example.com/react.png",
        link: "https://github.com/scottiegreff/ai-world-recipes/blob/main/app/api/chat/route.ts",
      },
      {
        skill: "Form Validation",
        description:
          "Within user sign up form Zod and React Hook Form are integrated. Zod's schemas provide structure and constraint, and therefore increasing data integrity.",
        image:
          "https://github.com/scottiegreff/ai-world-recipes/blob/main/app/components/SignUpForm.tsx",
        link: "",
      },
      // {
      //   skill: "Middleware",
      //   description:
      //     "Used for securing routes, handling errors, logging, and more.",
      //   image: "http://example.com/react.png",
      //   link: "",
      // },
      {
        skill: "Prisma ORM",
        description:
          "Using Prisma's ORM streamlines my SQL database interactions with its schema-first approach. Once my schema is defined, Prisma migration generates a type-safe client for my database. The result is more efficient, maintainable, and readable SQL queries.",
        image: "",
        link: "https://github.com/scottiegreff/ai-world-recipes/blob/main/prisma/schema.prisma",
      },
      {
        skill: "Security",
        description:
          "By using JWT, HTTPS, and encrypting passwords mitigates common web vulnerabilities, such as SQL injection, XSS, and CSRF.",
        image: "http://example.com/react.png",
        link: "https://github.com/scottiegreff/ai-world-recipes/blob/main/lib/actions/authActions.ts",
      },
      {
        skill: "State Management",
        description:
          "Having solid and reliable state store is critical for all application. In the recipe app React's Redux Toolkit and Context is implemented. Avoiding prop drilling and having reliable access to state.",
        image: "http://example.com/react.png",
        link: "https://github.com/scottiegreff/ai-world-recipes/blob/main/app/redux/mealTime/mealTimeSlice.ts",
      },
      {
        skill: "Relational Database (SQL)",
        description:
          "PostgreSQL is used for persisting users' data, logging, and recipes.",
        image: "http://example.com/react.png",
        link: "https://github.com/scottiegreff/ai-world-recipes/blob/main/prisma/schema.prisma",
      },
      {
        skill: "Routing & Navigation",
        description:
          "Protected routes, redirects, and navigation are essential for a security and user experience. React Router and Next Navigation is used to facilitate these features.",
        image:
          "https://github.com/scottiegreff/ai-world-recipes/blob/main/app/login/page.tsx",
        link: "",
      },
      {
        skill: "User Feedback",
        description:
          "Enhancing user experience by providing real-time feedback on actions, such as notifying users with success/error toasts, displaying spinner indicators during data fetching, implementing skeletons for content loading, and offering feedback on the security level of users' passwords.",
        image: "http://example.com/react.png",
        link: "https://github.com/scottiegreff/ai-world-recipes/blob/main/app/components/PasswordStrength.tsx",
      },
    ],
  },
  {
    title: "Ecommerce Admin Site",
    description:
      "An e-commerce admin site that lets you create multiple stores to manage products AND/OR services. It creates custom products (colors and sizes, ect.) and stores them in a revalidating DB. The service side allows the admin to set multiple staff schedules and then create the services offered that fit withing the staff's timetables.",
    image: admin,
    link: "https://ecommerce-admin-scottiegreffs-projects.vercel.app/",
    techStack:
      "Next.js, TypeScript, Tailwind, Stripe, Clerk, PostgreSQL, Prisma, Vercel Deployment",
    codeExample: [
      {
        skill: "Vanilla JavaScript",
        description: "Used for interacting with the user interface",
        image: "",
        link: "https://github.com/scottiegreff/analissa-longoria/blob/main/pages/photography.html",
      },
      {
        skill: "HTML",
        description:
          "Used for building the document structure of the user interface",
        image: "",
        link: "https://github.com/scottiegreff/analissa-longoria/blob/main/pages/video.html",
      },
      {
        skill: "Cascading Style Sheets (CSS)",
        description: "Used for styling user interface",
        image: "",
        link: "https://github.com/scottiegreff/analissa-longoria/blob/main/style.css",
      },

      {
        skill: "MailChimp API",
        description: "Used for sending emails to clients",
        image: "",
        link: "https://github.com/scottiegreff/analissa-longoria/blob/main/pages/contact2.html",
      },
    ],
  },
  {
    title: "Ecommerce Store Front",
    description:
      "An e-commerce store front that connects to the admin site. Allowing customers to view, place products and services in their cart and pay with real money via the Stripe API.",
    image: store,
    link: "https://ecommerce-store-scottiegreffs-projects.vercel.app/",
    techStack:
      "Next.js, TypeScript, Tailwind, Stripe, Clerk, PostgreSQL, Prisma, Vercel Deployment",
    codeExample: [
      {
        skill: "Ecommerce Store Front",
        description:
          "An e-commerce store front that connects to the admin site. Allowing customers to view, place products and services in their cart and pay with real money via the Stripe API.",
        image: "",
        link: "https://github.com/scottiegreff/analissa-longoria/blob/main/pages/photography.html",
      },
      {
        skill: "HTML",
        description:
          "Used for building the document structure of the user interface",
        image: "",
        link: "https://github.com/scottiegreff/analissa-longoria/blob/main/pages/video.html",
      },
      {
        skill: "Cascading Style Sheets (CSS)",
        description: "Used for styling user interface",
        image: "",
        link: "https://github.com/scottiegreff/analissa-longoria/blob/main/style.css",
      },

      {
        skill: "MailChimp API",
        description: "Used for sending emails to clients",
        image: "",
        link: "https://github.com/scottiegreff/analissa-longoria/blob/main/pages/contact2.html",
      },
    ],
  },
  {
    title: "Analissa Longoria Photography",
    description:
      "This simple and back to basics site is a photographers work that features fashion and lifestyle. Featured in many magazines and brands.",
    image: photography,
    link: "http://analissalongoria.com/",
    techStack:
      "Vanilla JavaScript, HTML, CSS, MailChimp, FTP Server Deployment",
    codeExample: [
      {
        skill: "Vanilla JavaScript",
        description: "Used for interacting with the user interface",
        image: "",
        link: "https://github.com/scottiegreff/analissa-longoria/blob/main/pages/photography.html",
      },
      {
        skill: "HTML",
        description:
          "Used for building the document structure of the user interface",
        image: "",
        link: "https://github.com/scottiegreff/analissa-longoria/blob/main/pages/video.html",
      },
      {
        skill: "Cascading Style Sheets (CSS)",
        description: "Used for styling user interface",
        image: "",
        link: "https://github.com/scottiegreff/analissa-longoria/blob/main/style.css",
      },

      {
        skill: "MailChimp API",
        description: "Used for sending emails to clients",
        image: "",
        link: "https://github.com/scottiegreff/analissa-longoria/blob/main/pages/contact2.html",
      },
    ],
  },
  {
    title: "MET Art Museum - Local",
    description: "Search and discover art from NY's famous MET Museum.",
    image: met,
    link: "localhost:3000",
    techStack: "React, Tailwind CSS, TypeScript, MET API",
    codeExample: [
      {
        skill: "React",
        description: "Used for building user interface",
        image: "http://example.com/react.png",
        link: "http://example.com/react",
      },
      // More code examples...
    ],
  },
  {
    title: "Full Stack Bakery App - Local",
    description: "A mock bakery app that lets you order and track your orders.",
    image: bakery,
    link: "localhost:3000",
    techStack: "React, MVC Architecture, Express, Nodemon, Axios, MongoDB",
    codeExample: [
      {
        skill: "React",
        description: "Used for building user interface",
        image: "http://example.com/react.png",
        link: "http://example.com/react",
      },
      // More code examples...
    ],
  },
  {
    title: "John Conway's Game of Life - Local",
    description: "A simulation model of John Conway's infamous Game of Life.",
    image: gol,
    link: "localhost:3000",
    techStack:
      "Vanilla JavaScript, HTML, Bootstrap, Object-Oriented-Programming",
    codeExample: [
      {
        skill: "React",
        description: "Used for building user interface",
        image: "http://example.com/react.png",
        link: "http://example.com/react",
      },
      {
        skill: "React",
        description: "Used for building user interface",
        image: "http://example.com/react.png",
        link: "http://example.com/react",
      },
      {
        skill: "React",
        description: "Used for building user interface",
        image: "http://example.com/react.png",
        link: "http://example.com/react",
      },
    ],
  },
];
