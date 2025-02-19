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
    id: 1,
    name: "INTERVIEWMATE",
    description:
      "An AI-powered interview preparation platform offering personalized practice sessions with real-time feedback and immersive 3D visuals. Supabase is used for authentication and PostgreSQL for data management.",
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
    id: 2,
    name: "PRODO",
    description:
      "A modern task management application built with Next.js 15, featuring a robust PostgreSQL database (Neon DB) with Drizzle ORM for efficient data handling. It offers seamless state management with Zustand and optimized data fetching with TanStack Query. The UI is crafted with Tailwind CSS, React, and ShadCN UI, while secure JWT authentication ensures smooth user experiences. Built with TypeScript, PRODO is designed for scalability and performance.",
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
    id: 3,
    name: "TRUVIEW",
    description:
      "Share your cherished memories effortlessly, engaging with likes and comments for meaningful connections. Built with a robust tech stack for smooth performance and secure data management.",
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
    id: 4,
    name: "DYNAMICOG",
    description:
      "A full-stack application for dynamic OG image generation, allowing users to create personalized OG images with secure authentication using JWT and efficient data storage with MongoDB and Mongoose.",
    project_link: "https://dynamic-og-alpha.vercel.app/",
    imgSrc: DynamicOg,
    technologies: [
      "React.js",
      "TypeScript",
      "Vercel/Og",
      "Zustand",
      "Tailwind CSS",
      "MongoDB",
      "JWT",
      "Mongoose",
    ],
  },
  {
    id: 5,
    name: "SHOPSTREAM",
    description:
      "A full-stack e-commerce platform built with server-side rendering for SEO and secure user authentication using jose for JWT handling. MongoDB is used for managing product and user data.",
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
    id: 6,
    name: "THREAD IT",
    description:
      "An innovative application that converts blogs into Twitter threads, offering one-click sharing for content creators. It integrates Firebase authentication and the Twitter API for a seamless experience.",
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
    id: 7,
    name: "SKETCH SYNC",
    description:
      "A real-time collaborative drawing platform that leverages the Canvas API for drawing and Firebase for data synchronization and user authentication, featuring social sharing and a community gallery.",
    project_link: "https://sketchsync.vercel.app/",
    imgSrc: Sketchsync,
    technologies: ["React.js", "TypeScript", "CSS", "Canvas API", "Firebase"],
  },
  {
    id: 8,
    name: "BEYOND SKILL",
    description:
      "Unlock your potential with Beyond Skill's wide range of courses, offering an engaging learning experience with secure payment processing and interactive content.",
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
    id: 9,
    name: "ADDICTSY",
    description:
      "Empowering Addiction Recovery through Personal Chats. Connect with supportive communities via real-time messaging and an intuitive user interface.",
    project_link: "https://addictsy.vercel.app/",
    imgSrc: Addictsy,
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Talk JS API"],
  },
  {
    id: 10,
    name: "FLIX NEST",
    description:
      "Explore and bookmark upcoming movies and trailers with Flix Nest, an engaging platform powered by the TMDB API for movie data.",
    project_link: "https://flixnest.vercel.app/",
    imgSrc: Flixnest,
    technologies: ["JavaScript", "CSS", "HTML", "TMDB API"],
  },
];
