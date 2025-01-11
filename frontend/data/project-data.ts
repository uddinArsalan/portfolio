import ThreadIt from "/assets/Thread It.png"
import Sketchsync from "/assets/Sketchsync.png"
import Addictsy from "/assets/Addictsy.png"
import Flixnest from "/assets/Flixnest.png"
import BeyondSkill from "/assets/BeyondSkill.png"
import InterviewMate from "/assets/InterviewMate.png"
import Truview from "/assets/Truview.png";
import Shopstream from "/assets/Shopstream.png";
import DynamicOg from "/assets/DynamicOg.png";

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
  description: "An AI-powered interview preparation platform offering personalized practice sessions with real-time feedback and immersive 3D visuals. Supabase is used for authentication and PostgreSQL for data management.",
        project_link: "https://interview-mate-one.vercel.app/",
        imgSrc: InterviewMate,
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Supabase", "Shadcn","PostgreSQL"]
    },
    {
        id : 2,
        name: "SHOPSTREAM",
        description: "A full-stack e-commerce platform built with server-side rendering for SEO and secure user authentication using jose for JWT handling. MongoDB was used for managing product and user data.",
        project_link: "https://shopstream.vercel.app/",
        imgSrc: Shopstream,
        technologies: ["Next.js", "MongoDB", "jose", "JWT", "Server-Side Rendering"]
    },
    {
        id : 3,
        name: "DYNAMICOG",
        description: "A full-stack application for dynamic OG image generation, allowing users to create personalized OG images based on their input. Secure user authentication using JWT and efficient data storage with MongoDB and Mongoose.",
        project_link: "https://dynamic-og-alpha.vercel.app/",
        imgSrc: DynamicOg,
        technologies: ["React.js", "TypeScript", "Zustand","Tailwind CSS", "MongoDB", "JWT", "Mongoose"]
    },
    {
        id: 4,
        name: "TRUVIEW",
        description: "Truview: Share your cherished memories effortlessly, engaging with likes and comments for meaningful connections.",
        project_link: "https://truview-one.vercel.app/",
        imgSrc: Truview,
        technologies: ["Next.js", "TypeScript", "Tailwind CSS","Material UI","Prisma","PostgreSQL","BlackBlaze Cloud Storage"] 
    },
    {
        id: 5,
        name: "THREAD IT",
        description: "A full-stack application that converts blogs into Twitter threads, providing one-click sharing for content creators. It integrates Firebase authentication and the Twitter API for a seamless experience.",
        project_link: "https://thread-it-one.vercel.app/",
        imgSrc: ThreadIt,
        technologies: ["React.js", "TypeScript", "Node.js (Express)", "Twitter API", "Tailwind CSS","GraphQL", "Firebase","Cheerio"]
    },
    {
        id: 6,
        name: "SKETCH SYNC",
        description: "A real-time collaborative drawing platform that uses the Canvas API for drawing and Firebase for data synchronization and user authentication. It features social sharing and a community gallery system.",
        project_link: "https://sketchsync.vercel.app/",
        imgSrc: Sketchsync,
        technologies: ["React.js", "TypeScript", "CSS", "Canvas API", "Firebase"]
    },
    {
        id: 7,
        name: "ADDICTSY",
        description: "Empowering Addiction Recovery through Personal Chats",
        project_link: "https://addictsy.vercel.app/",
        imgSrc: Addictsy,
        technologies: ["React.js", "TypeScript", "Tailwind CSS","Talk JS API"] 
    },
    {
        id: 8,
        name: "BEYOND SKILL",
        description: "Unlock Your Potential with BeyondSkill's Wide Range of Courses",
        project_link: "https://beyondskill.vercel.app/",
        imgSrc: BeyondSkill,
        technologies: ["React.js", "TypeScript", "Tailwind CSS","Stripe","Express js"] 
    },
    {
        id: 9,
        name: "FLIX NEST",
        description: "Explore & Bookmark Upcoming Movies and Trailers",
        project_link: "https://flixnest.vercel.app/",
        imgSrc: Flixnest,
        technologies: ["Javascript", "CSS", "HTML","TMDB API"] 
    },
];

