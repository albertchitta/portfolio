import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  axiom,
  nss,
  nasa,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import { linkedin, github, instagram, twitter, facebook, } from "../assets/social";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Flight Software Engineer II and UI/UX Developer",
    company_name: "Axiom Space",
    icon: axiom,
    iconBg: "#ffffff",
    date: "January 2022 - Present",
    points: [
      "Build and integrate a custom UI library for ground and space station operations",
      "Develop and deploy subsystem web apps for Axiom astronauts and Axiom mission control operators",
      "Perform UX design research to implement feedback from stakeholders",
      "Agile work and learning environment with emphasis on team-based development",
    ],
  },
  {
    title: "Full-Stack Software Developer",
    company_name: "Nashville Software School",
    icon: nss,
    iconBg: "#ffffff",
    date: "July 2021 - June 2022",
    points: [
      "Intensive 12-month software development bootcamp with immersive individual and team-based projects",
      "Git and GitHub for version control",
    ],
  },
  {
    title: "Systems Analyst II",
    company_name: "NASA / COLSA Corporation",
    icon: nasa,
    iconBg: "#ffffff",
    date: "December 2017 - January 2022",
    points: [
      "Provide ground system support services for the International Space Station (ISS) and Space Launch System (SLS) programs at NASA's Marshall Space Flight Center",
      "Develop procedures for staging, testing, and training users for distributed applications",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const socialLinks = [
  {
    name: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/albertchittaphong/",
  },
  {
    name: "github",
    icon: github,
    link: "https://github.com/albertchitta",
  },
  {
    name: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/albertwc_/?hl=en",
  },
  {
    name: "twitter",
    icon: twitter,
    link: "https://twitter.com/albertwc_",
  },
  {
    name: "facebook",
    icon: facebook,
    link: "https://www.facebook.com/Albert.Chittaphong/",
  },
]

export { navLinks, services, technologies, experiences, testimonials, projects, socialLinks };
