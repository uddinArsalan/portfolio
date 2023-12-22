import ThreadIt from "../../public/assets/Thread It.png"
import Sketchsync from "../../public/assets/Sketchsync.png"
import Addictsy from "../../public/assets/Addictsy.png"
import Flixnest from "../../public/assets/Flixnest.png"
import BeyondSkill from "../../public/assets/BeyondSkill.png"

export interface Project {
    id: number;
    name: string;
    description: string;
    project_link: string;
    imgSrc: string;
  }

const Projects : Project[] = [
    {
        id : 1,
        name : "THREAD IT",
        description : "Convert & Share Hashnode Blogs as Twitter Threads",
        project_link : "https://thread-it-one.vercel.app/",
        imgSrc : ThreadIt
    },
    {
        id : 2,
        name : "SKETCH SYNC",
        description : "Collaborative Real-time Drawings & Creations",
        project_link : "https://sketchsync.vercel.app/",
        imgSrc : Sketchsync
    },
    {
        id : 3,
        name : "ADDICTSY",
        description : "Empowering Addiction Recovery through Personal Chats",
        project_link : "https://addictsy.vercel.app/",
        imgSrc : Addictsy
    },
    {
        id : 4,
        name : "BEYOND SKILL",
        description : "Unlock Your Potential with BeyondSkill's Wide Range of Courses",
        project_link : "https://beyondskill.vercel.app/",
        imgSrc : BeyondSkill
    },
    {
        id : 5,
        name : "FLIX NEST",
        description : "Explore & Bookmark Upcoming Movies and Trailers",
        project_link : "https://flixnest.vercel.app/",
        imgSrc : Flixnest
    },
]

export default Projects