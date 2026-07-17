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
  code_link?: string;
  technologies: string[];
  status?: "building" | "live" | "archived";
}

export const Projects: Project[] = [
  {
    id: 14,
    name: "DEVDEPLOY",
    description:
      "A self-hosted PaaS in Go that clones repos, auto-detects the app stack with Railpack to build container images without a Dockerfile, and deploys them behind unique public URLs via Cloudflare Tunnels. A multi-tenant reverse proxy resolves hostnames through Redis to route requests to the right container with zero manual config. Deployments run through an async pipeline on RabbitMQ quorum queues with delayed retries and dead-letter handling, and live container logs stream to multiple consumers over Redis Streams with support for replaying history from any offset.",
    project_link: "",
    code_link: "https://github.com/uddinArsalan/DevDeploy",
    imgSrc: "",
    technologies: [
      "Golang",
      "Docker",
      "Railpack",
      "PostgreSQL",
      "RabbitMQ",
      "Redis Streams",
      "Cloudflare Tunnels",
      "JWT",
      "Argon2id",
    ],
    status: "live",
  },
  {
    id: 13,
    name: "FILEANALYZER",
    description:
      "An AI-powered document Q&A platform built in idiomatic Go with Chi router, dependency injection, and repository pattern for a clean, swappable architecture. Document ingestion runs through a Redis Streams worker: file retrieval from Backblaze S3, chunk-respecting parsing, Cohere embedding generation, and Qdrant vector insertion, with processing completion pushed to the frontend over Redis Pub/Sub via SSE. Answers are generated through a full RAG pipeline — query embeddings searched against Qdrant, top results reranked via Cohere Rerank, and reranked chunks passed to the LLM with citations. Validated on a real document producing 676 chunks with accurate, cited responses.",
    project_link: "https://github.com/uddinArsalan/File_Analyzer",
    imgSrc: "",
    technologies: [
      "Golang",
      "Chi",
      "Redis Streams",
      "Redis Pub/Sub",
      "Qdrant",
      "Cohere API",
      "Backblaze S3",
      "Neon DB",
      "SSE",
      "JWT",
      "PostgreSQL",
    ],
    status: "live",
  },
  {
    id: 12,
    name: "URL SHORTENER",
    description:
      "A scalable URL shortening service built with Go and SvelteKit. Every click event is pushed to Redis Streams and consumed by a dedicated Go worker that asynchronously writes enriched analytics to PostgreSQL, keeping the main redirect path fast. The dashboard breaks down clicks by country, state, city, device type, referrer, and hourly trends — all visualized on interactive maps. Authentication is handled by Keycloak, and Redis caching keeps lookups performant at scale.",
    project_link: "https://lnklyweb.vercel.app/",
    code_link: "",
    imgSrc: UrlShortenerImg,
    technologies: [
      "Go",
      "Redis Streams",
      "PostgreSQL",
      "SvelteKit",
      "Keycloak",
    ],
    status: "live",
  },
  {
    id: 2,
    name: "INTERVIEWMATE",
    description:
      "An AI-powered mock interview platform where users pick a domain and a Ready Player Me 3D avatar, then conduct a full interview entirely through voice. The Web Speech API handles speech-to-text and vice versa with pause detection and buffering. After the interview, an LLM queries the stored questions and answers through relational joins to generate a structured feedback report with scores and areas to focus on. Auth is handled by Supabase with row-level security policies enforcing data isolation per user.",
    project_link: "https://interview-mate-one.vercel.app/",
    code_link: "",
    imgSrc: InterviewMate,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "Supabase",
      "Cohere API",
      "Web Speech API",
      "Ready Player Me",
      "PostgreSQL",
    ],
    status: "live",
  },
  {
    id: 4,
    name: "TRUVIEW",
    description:
      "A full-featured social media platform built with Next.js and Prisma. The feed uses infinite scroll via Intersection Observer with optimistic updates on likes and comments through TanStack Query's setQueryData, so interactions feel instant. Media uploads go to a private Backblaze S3 bucket and are served through a Cloudflare Worker proxy, keeping the bucket private while delivering files efficiently.",
    project_link: "https://truview-one.vercel.app/",
    code_link: "",
    imgSrc: Truview,
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Auth0",
      "Backblaze",
      "Cloudflare Workers",
      "TanStack Query",
    ],
    status: "live",
  },
  {
    id: 3,
    name: "PRODO",
    description:
      "A task management app built on Next.js 15 with Drizzle ORM and Neon DB. State is managed with Zustand and data fetching handled through TanStack Query for optimized caching and refetching. Secured with JWT authentication and built with a responsive Shadcn UI.",
    project_link: "https://prodo-task.vercel.app/",
    code_link: "",
    imgSrc: Prodo,
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Neon DB",
      "Drizzle ORM",
      "Zustand",
      "TanStack Query",
      "JWT",
    ],
    status: "live",
  },
  {
    id: 5,
    name: "DYNAMICOG",
    description:
      "A web app for generating dynamic Open Graph images from user-defined content using predefined templates, making social shares more visual and branded. Built with React and Zustand for state, Express on the backend, MongoDB with Mongoose for storage, and secured with JWT authentication.",
    project_link: "https://dynamic-og-alpha.vercel.app/",
    code_link: "",
    imgSrc: DynamicOg,
    technologies: [
      "React.js",
      "TypeScript",
      "Zustand",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
      "JWT",
    ],
    status: "live",
  },
  {
    id: 6,
    name: "SHOPSTREAM",
    description:
      "A full-stack e-commerce platform with server-side rendering for SEO, secure JWT session handling via jose, and MongoDB for product and user data management.",
    project_link: "https://shopstream.vercel.app/",
    code_link: "",
    imgSrc: Shopstream,
    technologies: ["Next.js", "MongoDB", "jose", "JWT"],
    status: "live",
  },
  {
    id: 7,
    name: "THREAD IT",
    description:
      "A tool that converts Hashnode blog posts into Twitter threads for one-click publishing. Parses blog HTML with Cheerio, handles posting via the Twitter API, uses GraphQL for data fetching, and Firebase for authentication.",
    project_link: "https://thread-it-one.vercel.app/",
    code_link: "",
    imgSrc: ThreadIt,
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Twitter API",
      "GraphQL",
      "Firebase",
      "Cheerio",
      "Tailwind CSS",
    ],
    status: "live",
  },
  {
    id: 8,
    name: "SKETCH SYNC",
    description:
      "A collaborative drawing platform where multiple users can draw together in real time. Built with the Canvas API for drawing interactions and Firebase Realtime Database for live synchronization across sessions. Secured with Firebase authentication.",
    project_link: "https://sketchsync.vercel.app/",
    code_link: "",
    imgSrc: Sketchsync,
    technologies: ["React.js", "TypeScript", "Canvas API", "Firebase", "CSS"],
    status: "live",
  },
  {
    id: 9,
    name: "BEYOND SKILL",
    description:
      "An e-learning platform with course content and secure Stripe-powered payments. Built with React.js and Express.js, styled with Tailwind CSS.",
    project_link: "https://beyondskill.vercel.app/",
    code_link: "",
    imgSrc: BeyondSkill,
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "Express.js",
    ],
    status: "live",
  },
  {
    id: 10,
    name: "ADDICTSY",
    description:
      "A community platform for addiction recovery with private real-time chat powered by the TalkJS API. Built with React.js and Tailwind CSS.",
    project_link: "https://addictsy.vercel.app/",
    code_link: "",
    imgSrc: Addictsy,
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Talk JS API"],
    status: "live",
  },
  {
    id: 11,
    name: "FLIX NEST",
    description:
      "A movie discovery platform using the TMDB API to browse upcoming releases and trailers. Users can bookmark favorites for later viewing.",
    project_link: "https://flixnest.vercel.app/",
    code_link: "",
    imgSrc: Flixnest,
    technologies: ["JavaScript", "HTML", "CSS", "TMDB API"],
    status: "live",
  },
];
