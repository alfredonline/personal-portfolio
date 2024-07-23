import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiShadcnui, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiMongodb, DiNodejs } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";

const siteName = "AlfredWebDev";

const navItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Projects",
    url: "/side-projects",
  },
  {
    name: "Work",
    url: "/work",
  },
];

const sideProjectsSubheading =
  "As a developer with a full time job, I only have a few side projects that I work on in my free time. Here are some of them.";

const heroData = {
  Primary_hero_text: "Software developer and instructor",
  secondary_hero_text:
    "I am a web developer with a passion for building useful tools that help people learn languages. I am also an instructor who teaches web development.",
  buttonText: "Contact me",
  buttonUrl: "/contact",
};

const facts = [
  {
    id: "01",
    title: "Web Development",
    desc: "I build websites and web applications using modern technologies. I enjoy using Next.JS, TypeScript, etc.",
    icon: "💻",
  },
  {
    id: "02",
    title: "Language Learning",
    desc: "I am focused on building tools that help people learn languages. I also love learning languages myself.",
    icon: "🌍",
  },
  {
    id: "03",
    title: "Teaching",
    desc: "I work as a sofware developer and instructor teaching web development bootcamps for beginners.",
    icon: "👨‍🏫",
  },
  {
    id: "04",
    title: "Hobbies",
    desc: "Outside of programming, I enjoy hiking, going to the gym, content creation, and learning new things.",
    icon: "🏋️‍♂️",
  },
  {
    id: "05",
    title: "Future Projects",
    desc: "I am working on a language learning site with some friends. We plan to launch it in late 2024.",
    icon: "🗺️",
  },
  {
    id: "06",
    title: "YouTube",
    desc: "I have a YouTube channel where I post tutorials on web development. I enjoy making videos.",
    icon: "🎥",
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
    slug: "my-immersion-diary",
    link: "https://myimmersiondiary.com",
    repo: "https://github.com/alfredonline/immersion",
    fullWriteup: [
      {
        title: "The problem",
        content:
          "Language learners need to immerse themselves in the language they are learning to make progress. However, many learners struggle to keep track of their immersion activities or resort to just using an Excel spreadsheet. MyImmersionDiary generates graphs for them based on user data, so they can see their progress over time. ",
      },
      {
        title: "The solution",
        content:
          "MyImmersionDiary is a web application that helps language learners keep track of their immersion activities. Users can log their immersion activities and see their progress over time. It allows the user to set a daily goal and overall goal for any amount of languages they are learning. MyImmersionDiary also uses user data to generate detailed statistics about their immersion activities. User's have a tonne of options availabe when it comes to recording their immersion activities such as: reading, watching, listening, speaking, writing, and more. ",
      },
      {
        title: "Tech stack",
        content:
          "I used Next.JS, TypeScript, MongoDB, Kinde, Tailwind CSS, and Shadcn UI to build this project. I used Kinde to have a simple login / register flow for users; they don't need to remember a password, they just need to remember their email address. I used ShadCN for the vast majority of the UI components and Tailwind CSS for the rest. I use MongoDB to store user data such as immersion activities and I sync it with Kinde to store user data such as email addresses. ",
      },
      {
        title: "Future plans",
        content:
          "I plan to add more features to MyImmersionDiary, the eventual goal is to have the most useful immersion tracking tool for language learners on the web. You can find a complete roadmap of the project on the official site. ",
      },
    ],
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
    slug: "infinite-convo",
    link: "https://infiniteconvo.com",
    repo: "https://github.com/alfredonline/convo-site",
    fullWriteup: [
      {
        title: "The problem",
        content:
          "ESL teachers need to practice speaking with their students to help them improve their English. However, many teachers struggle to find the time to practice speaking with their students or resort to just using a textbook. InfiniteConvo hosts a collection of random conversation topics and questions for teachers, so they can practice speaking with their students. ",
      },
      {
        title: "The solution",
        content:
          "InfiniteConvo is a web application that has over 40 random conversation topics for ESL teachers and their students as well as a tonne of questions for each topic. What differentiates the site from competitors is that it also has collocations, example sentences, discussion images and vocabulary for each topic. Teachers can use all of the resources to have the best possible speaking sessions with their students. ",
      },
      {
        title: "Tech stack",
        content:
          "I used Next.JS, TypeScript, MongoDB, and Tailwind CSS to build this project. I used MongoDB to store user data such as conversation topics and all the associated data for each topic. I used Tailwind CSS for the UI components and Next.JS for the front-end. I also used TypeScript for the project. ",
      },
      {
        title: "Future plans",
        content:
          "I plan to add more features to InfiniteConvo in the future, but at the moment I am focusing on updating the content and making sure the site is as useful as possible for ESL teachers.",
      },
    ],
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
    slug: "alfred-web-dev",
    imgAlt: "AlfredWebDev landing page",
    link: "https://alfredwebdev.com",
    repo: "https://github.com/alfredonline/personal-portfolio",
    fullWriteup: [
      {
        title: "The problem",
        content:
          "I wanted to have a personal website where I could share my work, projects, and tutorials with the world. I also wanted to have a place where people could contact me if they wanted to work with me or collaborate on a project. ",
      },
      {
        title: "The solution",
        content:
          "AlfredWebDev is a personal website where I share my work, projects, and tutorials with the world. I have a contact form where people can contact me if they want to work with me or collaborate on a project.",
      },
      {
        title: "Tech stack",
        content:
          "I used Next.JS, TypeScript, Tailwind CSS, and Shadcn UI to build this project. I used Next.JS with Typescript for the frontend. I used Tailwind CSS for some of the styling, but mostly it is just Shadcn.",
      },
      {
        title: "Future plans",
        content:
          "I do not have any particulary elaborate plans for this site. I will just continue to update the site with more projects as I do them and perhaps integrate some YouTube tutorials in the future that I can share on the site. ",
      },
    ],
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

const hireMeParagraph =
  "I am interested in working on web apps that focus on language learning.You can contact me if you have a project that you would like to collaborate on.";

const skillsIcons = [
  { name: "React", icon: FaReact },
  { name: "MongoDB", icon: DiMongodb },
  { name: "Node.js", icon: DiNodejs },
  { name: "Tailwind CSS", icon: RiTailwindCssFill },
  { name: "Shadcn UI", icon: SiShadcnui },
  { name: "Python", icon: FaPython },
  { name: "Git", icon: FaGitAlt },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Azure DevOps", icon: SiAzuredevops },
  { name: "Next.js", icon: RiNextjsFill },
];

export {
  navItems,
  heroData,
  facts,
  experience,
  currentRole,
  socialMedia,
  projects,
  professional_life,
  siteName,
  sideProjectsSubheading,
  hireMeParagraph,
  skillsIcons,
};
