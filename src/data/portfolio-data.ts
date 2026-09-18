import { Project, SkillCategory, Experience } from '../types';

export const personalInfo = {
  name: "Jainoddin Shaik",
  role: "Full Stack Developer",
  shortBio: "I build fast, scalable digital products with clean interfaces and reliable systems.",
  aboutTitle: "Passionate about building for a better tomorrow.",
  aboutParagraph: "I'm Jainoddin Shaik, a Full Stack Developer with a passion for creating modern web applications that solve real-world problems. I enjoy working across the stack — from designing clean user interfaces to building robust backend systems.",
  aboutTags: [
    { label: "Problem Solver", icon: "puzzle" },
    { label: "Continuous Learner", icon: "sparkles" },
    { label: "Product Focused", icon: "target" },
  ],
  aboutQuote: "“ Good software solves problems. Great software touches people's lives. ”",
  stats: [
    { value: "6+", label: "Projects Delivered", icon: "folder" },
    { value: "Full Stack", label: "Web & Mobile Development", icon: "code" },
    { value: "Remote", label: "Open to Global Opportunities", icon: "globe" },
  ],
  contact: {
    email: "skjainoddin36654@gmail.com",
    linkedin: "https://linkedin.com/in/sk-jainoddin-800060250",
    linkedinDisplay: "linkedin.com/in/sk-jainoddin-800060250",
    github: "https://github.com/jainoddin",
    githubDisplay: "github.com/jainoddin",
    location: "Hyderabad, India",
    availability: "Available for new opportunities",
  },
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com/in/sk-jainoddin-800060250", icon: "linkedin" },
    { name: "GitHub", url: "https://github.com/jainoddin", icon: "github" },
    { name: "X", url: "https://x.com/jainoddinsk?s=11", icon: "twitter" },
  ],
};

export const currentExperience: Experience = {
  role: "Full Stack Developer",
  company: "Tansy Solutions LLC-FZ",
  location: "Remote",
  period: "Jun 2025 – Present",
  points: [
    "Develop and maintain scalable web applications using modern technologies and best practices.",
    "Collaborate with cross-functional teams to deliver high-quality products.",
    "Work on both frontend and backend systems, ensuring performance, security, and great user experience.",
    "Continuously learn and explore new technologies to improve productivity and product quality.",
  ],
  quote: "“ I believe in building products that create real value, with clean code, thoughtful design, and a focus on people. ”",
};

export const featuredProjects: Project[] = [
  {
    id: "quicktool",
    title: "QuickTool",
    description: "All-in-one AI tools platform with 100+ tools, Google Gemini AI, payments & cloud storage.",
    tags: ["Next.js", "Node.js", "MongoDB", "Gemini AI"],
    image: "/images/projects/quicktool-v2.webp",
    liveUrl: "https://quicktool.space",
    caseStudyUrl: "https://github.com/jainoddin",
  },
  {
    id: "todayaround",
    title: "TodayAround",
    description: "Global daily intelligence platform for real-time news, weather, events and sports.",
    tags: ["Next.js", "Rust", "Actix-web", "TypeScript"],
    image: "/images/projects/todayaround-v2.webp",
    liveUrl: "https://www.todayaround.world",
    caseStudyUrl: "https://github.com/jainoddin",
  },
  {
    id: "torvadb",
    title: "TorvaDB",
    description: "High-performance self-hosted database engine with WAL, SQL parser and web dashboard.",
    tags: ["Rust", "Next.js", "TypeScript", "SQL Engine"],
    image: "/images/projects/torvadb-v2.webp",
    liveUrl: "https://torvadb.vercel.app",
    caseStudyUrl: "https://github.com/jainoddin",
  },
  {
    id: "tansy",
    title: "Tansy Academy",
    description: "Interactive online SQL & database training platform designed for non-IT professionals with courses & hands-on practice.",
    tags: ["Eleventy (11ty)", "Nunjucks", "JavaScript", "HTML", "CSS"],
    image: "/images/projects/tansy-v2.webp",
    liveUrl: "https://tansyacademy.com",
    caseStudyUrl: "https://github.com/jainoddin",
  },
  {
    id: "zaanvar",
    title: "Zaanvar",
    description: "Comprehensive pet care platform with pet health guidance, doctor services & care.",
    tags: ["Next.js", "SQL", "Pure CSS"],
    image: "/images/projects/zaanvar-v2.webp",
    liveUrl: "https://zaanvar.com",
    caseStudyUrl: "https://github.com/jainoddin",
  },
  {
    id: "rconspace",
    title: "RCON SPACE",
    description: "Construction & Real Estate ERP with project tracking, workflows and analytics.",
    tags: ["React.js", "Node.js", "SQL"],
    image: "/images/projects/rconspace-v2.webp",
    liveUrl: "https://rconspace.com",
    caseStudyUrl: "https://github.com/jainoddin",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    iconName: "monitor",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Redux Toolkit", icon: "redux" },
    ],
  },
  {
    category: "Backend",
    iconName: "server",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "REST APIs", icon: "api" },
    ],
  },
  {
    category: "Data & Tools",
    iconName: "database",
    skills: [
      { name: "PostgreSQL", icon: "postgres" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Git", icon: "git" },
      { name: "Bitbucket", icon: "bitbucket" },
      { name: "Figma", icon: "figma" },
    ],
  },
];
