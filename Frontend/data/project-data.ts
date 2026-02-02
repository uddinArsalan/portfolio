import ThreadIt from "/assets/Thread It.png";
import Sketchsync from "/assets/Sketchsync.png";
import Addictsy from "/assets/Addictsy.png";
import Flixnest from "/assets/Flixnest.png";
import BeyondSkill from "/assets/BeyondSkill.png";
import InterviewMate from "/assets/InterviewMate.png";
import Truview from "/assets/Truview.png";
import Shopstream from "/assets/Shopstream.png";
import DynamicOg from "/assets/DynamicOg.png";
import Prodo from "/assets/Prodo.png";
import UrlShortenerImg from "/assets/linkly.png";

export interface Project {
  id: number;
  name: string;
  description: string;
  imgSrc: string;
  project_link: string;
  technologies: string[];
}

export const Projects: Project[] = [
  {
    id: 12,
    name: "ASKDOC",
    description:
      "An AI-powered document Q&A platform built with Golang, designed for scalable and secure document ingestion and querying. Uses JWT-based authentication (access + refresh tokens), Redis-backed background workers with goroutines for document chunking, Qdrant as a vector database for semantic search, and Cohere API for intelligent answer generation. Supports secure file storage with Backblaze S3 using presigned URLs.",
    project_link: "https://github.com/uddinArsalan/File_Analyzer",
    imgSrc: "",
    technologies: [
      "Golang",
      "Redis",
      "JWT",
      "Qdrant",
      "Cohere API",
      "Backblaze S3",
      "SQL",
      "Goroutines",
      "Background Workers",
      "Vector Search",
    ],
  },
  {
    id: 11,
    name: "URL SHORTENER",
    description:
      "A scalable link-shortening service built with Go, Redis, and PostgreSQL. Designed for high-performance lookups with Redis caching, secure authentication via Keycloak, and analytics tracking. Includes a SvelteKit-based dashboard for managing links, and viewing usage stats.",
    project_link: "https://lnklyweb.vercel.app/",
    imgSrc: UrlShortenerImg,
    technologies: ["Go", "Redis", "PostgreSQL", "SvelteKit", "Keycloak"],
  },
  {
    id: 2,
    name: "INTERVIEWMATE",
    description:
      "An AI-driven interview practice platform with feedback. Integrated Cohere API for dynamic question generation, Supabase for secure authentication, and PostgreSQL for data storage. Includes immersive 3D visual elements for an engaging user experience.",
    project_link: "https://interview-mate-one.vercel.app/",
    imgSrc: InterviewMate,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "Supabase",
      "Shadcn",
      "PostgreSQL",
    ],
  },
  {
    id: 3,
    name: "PRODO",
    description:
      "A task management application with secure JWT authentication, built on Next.js 15 and PostgreSQL (Neon DB) using Drizzle ORM. Features optimized state handling with Zustand and data fetching via TanStack Query. Designed responsive UI components with Tailwind CSS and ShadCN UI.",
    project_link: "https://prodo-task.vercel.app/",
    imgSrc: Prodo,
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "PostgreSQL",
      "Neon DB",
      "Drizzle ORM",
      "Zustand",
      "TanStack Query",
      "Shadcn UI",
      "JWT",
    ],
  },
  {
    id: 4,
    name: "TRUVIEW",
    description:
      "A social media platform supporting infinite scrolling feeds, real-time updates, and media uploads. Implemented authentication via Auth0, optimized file handling with Backblaze + Cloudflare CDN, and managed relational data with Prisma and PostgreSQL.",
    project_link: "https://truview-one.vercel.app/",
    imgSrc: Truview,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "Prisma",
      "PostgreSQL",
      "BlackBlaze Cloud Storage",
    ],
  },
  {
    id: 5,
    name: "DYNAMICOG",
    description:
      "A web app that generates dynamic Open Graph images from user input. Features JWT-based authentication, MongoDB storage with Mongoose, and a responsive interface built with React and Tailwind CSS.",
    project_link: "https://dynamic-og-alpha.vercel.app/",
    imgSrc: DynamicOg,
    technologies: [
      "React.js",
      "TypeScript",
      "Vercel/Og",
      "Zustand",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
      "JWT",
      "Mongoose",
    ],
  },
  {
    id: 6,
    name: "SHOPSTREAM",
    description:
      "A full-stack e-commerce platform with secure JWT handling via jose, server-side rendering for SEO, and MongoDB for product and user data. Built with a focus on performance and secure data flows.",
    project_link: "https://shopstream.vercel.app/",
    imgSrc: Shopstream,
    technologies: [
      "Next.js",
      "MongoDB",
      "jose",
      "JWT",
      "Server-Side Rendering",
    ],
  },
  {
    id: 7,
    name: "THREAD IT",
    description:
      "A tool that converts blog content (Hashnode) into Twitter threads for one-click posting. Uses the Twitter API for publishing, Firebase for authentication, and GraphQL for efficient data handling. Includes HTML parsing with Cheerio.",
    project_link: "https://thread-it-one.vercel.app/",
    imgSrc: ThreadIt,
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js (Express)",
      "Twitter API",
      "Tailwind CSS",
      "GraphQL",
      "Firebase",
      "Cheerio",
    ],
  },
  {
    id: 8,
    name: "SKETCH SYNC",
    description:
      "A collaborative drawing platform that synchronizes artwork in real time using Firebase. Built with the Canvas API for drawing features and Firebase authentication for secure user sessions.",
    project_link: "https://sketchsync.vercel.app/",
    imgSrc: Sketchsync,
    technologies: ["React.js", "TypeScript", "CSS", "Canvas API", "Firebase"],
  },
  {
    id: 9,
    name: "BEYOND SKILL",
    description:
      "An e-learning platform featuring secure payments with Stripe and interactive course content. Built with React.js and Express.js, styled using Tailwind CSS.",
    project_link: "https://beyondskill.vercel.app/",
    imgSrc: BeyondSkill,
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "Express.js",
    ],
  },
  {
    id: 10,
    name: "ADDICTSY",
    description:
      "A community-based platform for addiction recovery, featuring private chats powered by Talk JS API. Includes real-time messaging and a user-friendly interface built with React.js and Tailwind CSS.",
    project_link: "https://addictsy.vercel.app/",
    imgSrc: Addictsy,
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Talk JS API"],
  },
  {
    id: 11,
    name: "FLIX NEST",
    description:
      "A movie discovery platform using the TMDB API to fetch and display upcoming movies and trailers. Users can bookmark favorites for later viewing.",
    project_link: "https://flixnest.vercel.app/",
    imgSrc: Flixnest,
    technologies: ["JavaScript", "CSS", "HTML", "TMDB API"],
  },
];
