import ThreadIt from "../../public/assets/Thread It.png"
import Sketchsync from "../../public/assets/Sketchsync.png"
import Addictsy from "../../public/assets/Addictsy.png"
import Flixnest from "../../public/assets/Flixnest.png"
import BeyondSkill from "../../public/assets/BeyondSkill.png"

const ProjectSection = () => {
    return (
        <div className="bg-gray-900 text-gray-300 flex flex-col items-center cursor-pointer " id="projects">
            <div className="text-[rgb(136,206,2)] text-5xl font-bold mt-8" >PROJECTS</div>
            <div className="flex flex-col md:w-3/4">
                <div className="flex flex-col md:p-12 p-9">
                    <img src={ThreadIt} alt="" className="" />
                    <a href="https://thread-it-one.vercel.app/" target="_blank"><div className="bg-[#0b0b0b] p-6 rounded-br-md rounded-bl-md flex justify-between">
                        <div>
                            <div><span className="font-bold">THREAD IT </span> </div>
                            <div className="text-sm">Convert & Share Hashnode Blogs as Twitter Threads</div>
                        </div>
                        <i className="fa-solid fa-square-arrow-up-right text-[rgb(136,206,2)] text-4xl"></i>
                    </div></a>
                </div>
                <div className="flex flex-col p-12">
                    <img src={Sketchsync} alt="" className="" />
                    <a href="https://sketchsync.netlify.app/" target="_blank"><div className="bg-[#0b0b0b] p-6 rounded-br-md rounded-bl-md flex justify-between">
                        <div>
                            <div><span className="font-bold">SKETCH SYNC</span> </div>
                            <div className="text-sm">Collaborative Real-time Drawings & Creations</div>
                        </div>
                        <i className="fa-solid fa-square-arrow-up-right text-[rgb(136,206,2)] text-4xl"></i>
                    </div></a>
                </div>
                <div className="flex flex-col p-12">
                    <img src={Addictsy} alt="" className="" />
                    <a href="https://addictsy.netlify.app/" target="_blank"><div className="bg-[#0b0b0b] p-6 rounded-br-md rounded-bl-md flex justify-between">
                        <div className="flex flex-col">
                            <div><span className="font-bold">ADDICTSY</span> </div>
                            <div className="text-sm">Empowering Addiction Recovery through Personal Chats</div>
                        </div>
                        <i className="fa-solid fa-square-arrow-up-right text-[rgb(136,206,2)] text-4xl"></i>
                    </div></a>
                </div>
                <div className="flex flex-col p-12">
                    <img src={Flixnest} alt="" className="" />
                    <a href="https://flixnest.netlify.app/" target="_blank"><div className="bg-[#0b0b0b] p-6 rounded-br-md rounded-bl-md flex justify-between">
                        <div className="flex flex-col">
                            <div><span className="font-bold">FLIX NEST</span> </div>
                            <div className="text-sm">Explore & Bookmark Upcoming Movies and Trailers</div>
                        </div>
                        <i className="fa-solid fa-square-arrow-up-right text-[rgb(136,206,2)] text-4xl"></i>
                    </div></a>
                </div>
                <div className="mb-12 flex flex-col p-12">
                    <img src={BeyondSkill} alt="" className="" />
                    <a href="https://beyondskill.netlify.app/" target="_blank"><div className="bg-[#0b0b0b] p-6 rounded-br-md rounded-bl-md flex justify-between">
                        <div className="flex flex-col">
                            <div><span className="font-bold">BEYOND SKILL</span> </div>
                            <div className="text-sm">Unlock Your Potential with BeyondSkill's Wide Range of Courses</div>
                        </div>
                        <i className="fa-solid fa-square-arrow-up-right text-[rgb(136,206,2)] text-4xl"></i>
                    </div></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection