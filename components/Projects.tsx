import React from "react";
import { Project } from "@/app/types/Project";
import recipe from "../public/ai_world_recipes.jpg";
import admin from "../public/admin-overview.jpg";
import adminVideo from "../public/ecomm-video.jpg";
import store from "../public/ecomm-store.jpg";
import photography from "../public/analissa_longoria.jpg";
import met from "../public/met.jpg";
import gol from "../public/gol.jpg";
import bakery from "../public/bakery.jpg";

export const Projects: Project[] = [
  {
    title: "Video Overview of E-Commerce App",
    description:
      "This video describes an e-commerce platform that includes an admin site and a storefront site. The admin site serves the storefront, where you can create both goods (products) and services. Once created, customers can buy goods or book services with an employee. On the admin side, the app allows for store branding by uploading logos, hero images, and billboards. The admin then creates products with size and color attributes. To create a service, you will need to manage employees and their shifts, as well as create and manage customers. Once that's done, you can create a service so that customers can book appointments with employees. This can be done on either the admin or storefront site. Finally, the platform provides a basic sales analysis overview, and the admin can create multiple stores for other markets or businesses.",
    image: adminVideo,
    link: "https://www.youtube.com/watch?v=HmPwVHd1VSA&t=5s",
    techStack:
      "* See E-Commerce Admin and E-Commerce Store Front for tech stack",
    codeExample: [
    
    
    ],
  },
  {
    title: "E-Commerce Admin Site",
    description:
      "An e-commerce admin site that lets you create multiple stores to manage products AND/OR services. The Admin creates customizable products (colors and sizes, ect.), then stores the products with the correlating store's id in a revalidating DB. The service side allows the admin to set multiple staff work schedules. Create the services offered by the store, and checks if the staff timetable allows a customer to book the service requested.",
    image: admin,
    link: "https://sgreff.com",
    techStack:
      "Next.js, TypeScript, Tailwind, Stripe, Clerk, PostgreSQL, Prisma, Vercel Deployment",
    codeExample: [
      {
        skill: "App-Router ",
        description:
          "Used for routing between pages with dynamic store ids, product ids ect. As well as protecting routes from unauthorized users.",
        image: "",
        link: "https://github.com/scottiegreff/ecommerce-admin/tree/master/app",
      },
      {
        skill: "Authentication & Authorization",
        description:
          "Leveraged the Clerk API for auth which allows for sign-in through credentials and providers like Google's one click sign in. Once connected to the PostGres DB the User's table is populated by Clerk's adapter.",
        image: "http://example.com/react.png",
        link: "https://github.com/scottiegreff/ecommerce-admin/blob/master/app/api/%5BstoreId%5D/products/route.ts",
      },
      {
        skill: "Prisma ORM",
        description:
          "Used for defining the schema of the PostGres DB. This allows for the creation of a type-safe client for the database.",
        image: "",
        link: "https://github.com/scottiegreff/ecommerce-admin/blob/master/actions/get-graph-revenue.ts",
      },
      {
        skill: "Revalidating DB",
        description:
          "Keeps the DB data fresh with with every change requested by the admin and the store front. This provides the the store and the admin to have current and reliable information.",
        image: "",
        link: "https://github.com/scottiegreff/ecommerce-admin/blob/master/app/(dashboard)/%5BstoreId%5D/(routes)/orders/page.tsx",
      },
      {
        skill: "System Design",
        description:
          "Designing a system with scalability and maintainability is needed. Prior to coding, a well-structured UML diagram is crucial. A high-level system design creates development agility by preventing tightly coupled code and promoting reusability, leading to a more dynamic and maintainable system.",
        image: "",
        link: "https://github.com/scottiegreff/ecommerce-admin/blob/master/README.md",
      },
      {
        skill: "TypeScript",
        description:
          "Uses strict typing for many custom types needed to control the complexity of store marketing, products, employees, timetables, etc.",
        image: "",
        link: "https://github.com/scottiegreff/ecommerce-admin/blob/master/app/(dashboard)/%5BstoreId%5D/(routes)/categories/components/columns.tsx",
      },
      {
        skill: "Zod",
        description:
          "Used for validating the incoming data from the client. This ensures the data is correct before it is sent to the server.",
        image: "",
        link: "https://github.com/scottiegreff/ecommerce-admin/blob/master/app/(dashboard)/%5BstoreId%5D/(routes)/colors/%5BcolorId%5D/components/color-form.tsx",
      },
      {
        skill: "Zustand",
        description:
          "Used for global state management. This allows for the sharing of state between components and pages.",
        image: "",
        link: "https://github.com/scottiegreff/ecommerce-admin/blob/master/hooks/use-store-modal.tsx",
      },
    ],
  },
  {
    title: "E-Commerce Store Front",
    description:
      "An e-commerce store front that connects to the admin site. Allowing customers to view, place products and services in their cart and pay with real money via the Stripe API.",
    image: store,
    link: "https://prisoneroflovestudio.com/",
    techStack:
      "Next.js, TypeScript, Tailwind, Stripe, Clerk, PostgreSQL, Prisma, Vercel Deployment",
    codeExample: [
      {
        skill: "App-Router ",
        description:
          "Used for routing between pages with dynamic store ids, product ids ect. As well as protecting routes from unauthorized users.",
        image: "",
        link: "https://github.com/scottiegreff/ecommerce-admin/tree/master/app",
      },
      {
        skill: "Authentication & Authorization",
        description:
          "Leveraged the Clerk API for auth which allows for sign-in through credentials and providers like Google's one click sign in. Once connected to the PostGres DB the User's table is populated by Clerk's adapter.",
        image: "http://example.com/react.png",
        link: "https://github.com/scottiegreff/ecommerce-admin/blob/master/app/api/%5BstoreId%5D/products/route.ts",
      },
      {
        skill: "Prisma ORM",
        description:
          "Used for defining the schema of the PostGres DB. This allows for the creation of a type-safe client for the database.",
        image: "",
        link: "https://github.com/scottiegreff/ecommerce-admin/blob/master/actions/get-graph-revenue.ts",
      },
      {
        skill: "Revalidating DB",
        description:
          "Keeps the DB data fresh with with every change requested by the admin and the store front. This provides the the store and the admin to have current and reliable information.",
        image: "",
        link: "https://github.com/scottiegreff/ecommerce-admin/blob/master/app/(dashboard)/%5BstoreId%5D/(routes)/orders/page.tsx",
      },
      {
        skill: "Stripe API",
        description:
          "Used for processing payments from the customer. This allows for the customer to pay with real money.",
        image: "",
        link: "",
      },
      {
        skill: "System Design",
        description:
          "Designed the system to be scalable and maintainable. This allows for the system to grow with the business.",
        image: "",
        link: "",
      },
      {
        skill: "TypeScript",
        description:
          "Uses strict typing for many custom types needed to control the complexity of store marketing, products, employees, timetables, etc.",
        image: "",
        link: "https://github.com/scottiegreff/ecommerce-admin/blob/master/app/(dashboard)/%5BstoreId%5D/(routes)/categories/components/columns.tsx",
      },
      {
        skill: "Zod",
        description:
          "Used for validating the incoming data from the client. This ensures the data is correct before it is sent to the server.",
        image: "",
        link: "https://github.com/scottiegreff/ecommerce-admin/blob/master/app/(dashboard)/%5BstoreId%5D/(routes)/colors/%5BcolorId%5D/components/color-form.tsx",
      },
      {
        skill: "Zustand",
        description:
          "Used for global state management. This allows for the sharing of state between components and pages.",
        image: "",
        link: "https://github.com/scottiegreff/ecommerce-admin/blob/master/hooks/use-store-modal.tsx",
      },
    ],
  },
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
  // {
  //   title: "MET Art Museum - Local",
  //   description: "Search and discover art from NY's famous MET Museum.",
  //   image: met,
  //   link: "localhost:3000",
  //   techStack: "React, Tailwind CSS, TypeScript, MET API",
  //   codeExample: [
  //     {
  //       skill: "React",
  //       description: "Used for building user interface",
  //       image: "http://example.com/react.png",
  //       link: "http://example.com/react",
  //     },
  //     // More code examples...
  //   ],
  // },
  // {
  //   title: "Full Stack Bakery App - Local",
  //   description: "A mock bakery app that lets you order and track your orders.",
  //   image: bakery,
  //   link: "localhost:3000",
  //   techStack: "React, MVC Architecture, Express, Nodemon, Axios, MongoDB",
  //   codeExample: [
  //     {
  //       skill: "React",
  //       description: "Used for building user interface",
  //       image: "",
  //       link: "http://example.com/react",
  //     },
  //     // More code examples...
  //   ],
  // },
  // {
  //   title: "John Conway's Game of Life - Local",
  //   description: "A simulation model of John Conway's infamous Game of Life.",
  //   image: gol,
  //   link: "localhost:3000",
  //   techStack:
  //     "Vanilla JavaScript, HTML, Bootstrap, Object-Oriented-Programming",
  //   codeExample: [
  //     {
  //       skill: "React",
  //       description: "Used for building user interface",
  //       image: "",
  //       link: "http://example.com/react",
  //     },
  //     {
  //       skill: "React",
  //       description: "Used for building user interface",
  //       image: "",
  //       link: "http://example.com/react",
  //     },
  //     {
  //       skill: "React",
  //       description: "Used for building user interface",
  //       image: "",
  //       link: "http://example.com/react",
  //     },
  //   ],
  // },
];
