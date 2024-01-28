import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "Vipka Organics LLP",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "May 2023 - June 2023",
    points: [
      "Implemented agile methodologies and led development of web applications using the MERN stack, resulting in a 30% reduction in time-to-market and a 50% increase in customer satisfaction.",
      "Implemented comprehensive debugging and troubleshooting strategies for both front-end and back-end components, ensuring seamless functionality, resolved 50+ issues and achieved a 20% reduction in user-reported bugs.",
      "Collaborated with cross-functional teams, utilizing Agile methodologies and Git version control to streamline development processes, resulting in a 20% increase in team efficiency and successful delivery of projects within tight deadlines.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#fbc3bc",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#b7e4c7",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#a2d2ff",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/VaibhavKhatri8",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/vaibhavkhatri12",
  },
];

export const projects = [
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "SonicWave ",
    description:
      "Developed a full-stack eCommerce solution using React and Sanity, a headless CMS (Content Management System) for structured content.",
    link: "https://modern-ecommerce-website.vercel.app",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "ChatGPT Clone",
    description:
      "Spearheaded the development of a ChatGPT clone with real-time chat functionality, leveraging OpenAI API. Seamlessly integrated Firebase for secure authentication and chat history storage. ",
    link: "https://chatgpt-ai-bot.vercel.app",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Gericht Restaurant",
    description:
      "Developed and implemented a fully responsive restaurant website using ReactJS, resulting in a visually appealing andintuitive user interface that boosts online reservations and increase in mobile traffic.",
    link: "https://github.com/VaibhavKhatri8/gerich-restaurant",
  },
  // {
  //   iconUrl: car,
  //   theme: "btn-back-blue",
  //   name: "Car Finding App",
  //   description:
  //     "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
  //   link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  // },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "3D Portfolio",
    description:
      "Meticulously crafted a dynamic 3D portfolio utilizing cutting-edge technologies such as Three.js, React, and Tailwind CSS.",
    link: "https://vaibhavkhatri.wuaze.com",
  },
  // {
  //   iconUrl: estate,
  //   theme: "btn-back-black",
  //   name: "Real-Estate Application",
  //   description:
  //     "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
  //   link: "https://github.com/adrianhajdin/projects_realestate",
  // },
];
