import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  axiom,
  nss,
  nasa,
  vocab,
  teamroster,
  bearwatcher,
  todo,
  sortinghat,
  threejs,
  postgresql,
  sass,
  linkedin,
  github,
  instagram,
  twitter,
  facebook,
} from "../assets";

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
    name: "SASS",
    icon: sass,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Docker",
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
    name: "Vocab-YOU-lary",
    description:
      "An application that allows users to Create, Read, Update, and Delete (CRUD) vocabulary cards, authenticate with Google, and filter.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: vocab,
    source_code_link: "https://github.com/albertchitta/Vocab-YOU-lary",
    website: "https://awc-vocab-you-lary.netlify.app/",
    video: "https://www.loom.com/embed/6a192ddbd51d4b2ca6433a3c9a430467?sid=94d9980e-6ef5-413a-8922-52c3e004de31",
  },
  {
    name: "Team Roster",
    description:
      "Create a team roster or your starting line-up with your favorite players from the Los Angeles Lakers!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: teamroster,
    source_code_link: "https://github.com/albertchitta/ASSIGNMENT-Team-Roster-react",
    website: "https://awc-team-roster.netlify.app/",
    video: "https://www.loom.com/embed/b466cb8a2c6349f89d67e1dfe6863db8?sid=aad18431-055a-46da-aa0c-2abc5da5be4e",
  },
  {
    name: "Bear Watcher",
    description:
      "Each year between July and September, brown bears in the Katmai National Park congregate along the Brooks River. This river is one of the main rivers that Sockeye Salmon swim up to spawn. The brown bears wait in the shallows of the river and catach the salmon as they jump over rocks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bearwatcher,
    source_code_link: "https://github.com/albertchitta/ASSIGNMENT-Bear-Watcher",
    website: "https://awc-bear-watcher.netlify.app/",
    video: "https://www.loom.com/embed/ee9a427632d64b2c925d6337baf486d4?sid=5ec30378-2cd2-4306-b7ce-f53773d4225c",
  },
  {
    name: "YOU-DO",
    description:
      "A to-do list using React.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/albertchitta/YOU-DO-App",
    website: "https://awc-you-do.netlify.app/",
    video: "https://www.loom.com/embed/6aa0e77349494e449a6e20966d4e81bc?sid=1d4ef744-dbd0-45d3-ae5d-354eca60a6c9",
  },
  {
    name: "Sorting Hat",
    description:
      "In the Sorting Hat project, the users will enter their name and will be sorted into a random house. The user can filter the students by house and can even expel students. Once students are expelled, they will be removed from the First Years and into Voldemort's Army. This project is focused on creating an array of objects and printing them to the DOM. The project utilizes loops, event listeners, and filter buttons all built with functions.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sortinghat,
    source_code_link: "https://github.com/albertchitta/sorting-hat",
    website: "https://awc-sorting-hat.netlify.app/",
    video: "https://www.loom.com/embed/c8d85532094a4b48b69199ee2a240804?sid=5bf034de-8ffa-4b0e-967c-71c8cdd86b88",
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
