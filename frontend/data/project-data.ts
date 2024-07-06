import ThreadIt from "/assets/Thread It.png"
import Sketchsync from "/assets/Sketchsync.png"
import Addictsy from "/assets/Addictsy.png"
import Flixnest from "/assets/Flixnest.png"
import BeyondSkill from "/assets/BeyondSkill.png"
import InterviewMate from "/assets/InterviewMate.png"
import Truview from "/assets/Truview.png";

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
        name: "INTERVIEW MATE",
        description: "Unlock your potential with InterviewMate: AI-interviews and real-time feedback tailored to diverse domains.",
        project_link: "https://interview-mate-one.vercel.app/",
        imgSrc: InterviewMate,
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Supabase", "Shadcn","PostgreSQL"]
    },
    {
        id: 2,
        name: "TRUVIEW",
        description: "Truview: Share your cherished memories effortlessly, engaging with likes and comments for meaningful connections.",
        project_link: "https://truview-one.vercel.app/",
        imgSrc: Truview,
        technologies: ["Next.js", "TypeScript", "Tailwind CSS","Material UI","Prisma","PostgreSQL","BlackBlaze Cloud Storage"] 
    },
    {
        id: 3,
        name: "THREAD IT",
        description: "Convert & Share Hashnode Blogs as Twitter Threads",
        project_link: "https://thread-it-one.vercel.app/",
        imgSrc: ThreadIt,
        technologies: ["React.js", "TypeScript", "Node.js", "Express", "Twitter API", "Tailwind CSS", "Cheerio", "Firebase"]
    },
    {
        id: 4,
        name: "SKETCH SYNC",
        description: "Collaborative Real-time Drawings & Creations",
        project_link: "https://sketchsync.vercel.app/",
        imgSrc: Sketchsync,
        technologies: ["React.js", "TypeScript", "CSS", "Canvas API", "Firebase"]
    },
    {
        id: 5,
        name: "ADDICTSY",
        description: "Empowering Addiction Recovery through Personal Chats",
        project_link: "https://addictsy.vercel.app/",
        imgSrc: Addictsy,
        technologies: ["React.js", "TypeScript", "Tailwind CSS","Talk JS API"] 
    },
    {
        id: 6,
        name: "BEYOND SKILL",
        description: "Unlock Your Potential with BeyondSkill's Wide Range of Courses",
        project_link: "https://beyondskill.vercel.app/",
        imgSrc: BeyondSkill,
        technologies: ["React.js", "TypeScript", "Tailwind CSS","Stripe","Express js"] 
    },
    {
        id: 7,
        name: "FLIX NEST",
        description: "Explore & Bookmark Upcoming Movies and Trailers",
        project_link: "https://flixnest.vercel.app/",
        imgSrc: Flixnest,
        technologies: ["Javascript", "CSS", "HTML","TMDB API"] 
    },
];

