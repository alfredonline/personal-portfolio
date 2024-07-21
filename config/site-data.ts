import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiShadcnui, SiTypescript } from "react-icons/si";

const navItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Side Projects",
    url: "/side-projects",
  },
  {
    name: "Work",
    url: "/work",
  },
];

const heroData = {
  Primary_hero_text: "Software developer and instructor",
  secondary_hero_text:
    "I am a web developer with a passion for building useful tools that help people learn languages. I am also an instructor who teaches web development.",
  buttonText: "Contact me",
  buttonUrl: "/contact",
};

const services = [
  {
    id: "01",
    title: "Web Development",
    desc: "I build websites and web applications using modern technologies. I enjoy using Next.JS, TypeScript, etc.",
    icon: "💻",
  },
  {
    id: "02",
    title: "Language Learning",
    desc: "I am focused on building tools that help people learn languages.",
    icon: "🌍",
  },
  {
    id: "03",
    title: "Teaching",
    desc: "I work as an instructor teaching web development bootcamps to beginners.",
    icon: "👨‍🏫",
  },
];

const experience =
  "I have been involved in web development for over 5 years. I have worked on a variety of projects ranging from small websites to large web applications. I have experience with both front-end and back-end technologies.";

const currentRole = {
  jobTitle: "Software Developer and instructor",
  company: "The Developer Academy",
  startDate: "September 2022",
  endDate: "Present",
  location: "Remote / Sheffield, UK",
  name: "Alfie",
};

const socialMedia = [
  {
    name: "Github",
    url: "https://github.com/alfredonline",
    icon: FaGithub,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@alfredwebdev",
    icon: FaYoutube,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/alfie-williams-39ba19264/",
    icon: FaLinkedin,
  },
];

const projects = [
  {
    id: "01",
    title: "MyImmersionDiary",
    desc: "A web application that helps language learners keep track of their immersion activities.",
    imgPreview: "/immersion-diary-preview.png",
    imgAlt: "MyImmersionDiary landing page",
    stack: [
      {
        name: "Next.JS",
        icon: RiNextjsFill,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "Kinde",
        icon: null,
      },
      {
        name: "Tailwind CSS",
        icon: RiTailwindCssFill,
      },
      {
        name: "Shadcn UI",
        icon: SiShadcnui,
      },
    ],
  },
  {
    id: "02",
    title: "InfiniteConvo",
    desc: "A web application for ESL teachers who want to practice speaking with their students.",
    imgPreview: "/infinite-convo-preview.png",
    imgAlt: "InfiniteConvo landing page",
    stack: [
      {
        name: "Next.JS",
        icon: RiNextjsFill,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "Tailwind CSS",
        icon: RiTailwindCssFill,
      },
    ],
  },
  {
    id: "03",
    title: "AlfredWebDev",
    desc: "My personal website where I share my work, etc. I will post tutorials soon as well.",
    imgPreview: "/alfredwebdev-preview.png",
    imgAlt: "AlfredWebDev landing page",
    stack: [
      {
        name: "Next.JS",
        icon: RiNextjsFill,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Tailwind CSS",
        icon: RiTailwindCssFill,
      },
      {
        name: "Shadcn UI",
        icon: SiShadcnui,
      },
    ],
  },
];

const professional_life = [
  {
    paragraph:
      "I work as a software developer and bootcamp instructor. Depending on the time of the year, you can find me doing different things. For most of the year, I am teaching intensive web development bootcamps to beginners looking to switch careers. If I am not teaching, I am preparing materials and upgrading my skills so I can be the best instructor possible.",
  },
  {
    paragraph:
      "I also build internal tools for the company where I work. The most recent project I built was a holiday booking system that allows employees to book holidays and manage similar things. I used Next.JS, TypeScript, MongoDB, Kinde, and Azure (for deployment) for this project.",
  },
  {
    paragraph:
      "Before I started working as an instructor, I dabbled in various start ups working on mobile apps with React Native as well as web apps using various tech stacks. Before doing software development, I was an ESL teacher, which is why so many of my projects are focused on education. ",
  },
  {
    paragraph:
      "I also have a YouTube channel where I post tutorials that help people learn web development. I have a small following, but I enjoy making videos and helping people learn.",
  },
];

export {
  navItems,
  heroData,
  services,
  experience,
  currentRole,
  socialMedia,
  projects,
  professional_life,
};
