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
                <div className="flex flex-col p-12">
                    <img src={ThreadIt} alt="" className="" />
                    <a href="https://thread-it-one.vercel.app/" target="_blank"><div className="bg-[#0b0b0b] p-6 rounded-br-md rounded-bl-md flex justify-between">
                        <div>
                            <div><span className="font-bold">THREAD IT </span> </div>
                            <div className="text-sm">Share hashnode blogs on twitter with ease in the form of threads</div>
                        </div>
                        <i className="fa-solid fa-square-arrow-up-right text-[rgb(136,206,2)] text-4xl"></i>
                    </div></a>
                </div>
                <div className="flex flex-col p-12">
                    <img src={Sketchsync} alt="" className="" />
                    <a href="https://sketchsync.netlify.app/" target="_blank"><div className="bg-[#0b0b0b] p-6 rounded-br-md rounded-bl-md flex justify-between">
                        <div>
                            <div><span className="font-bold">SKETCH SYNC</span> </div>
                            <div className="text-sm">A Realtime Collaborative drawing app</div>
                        </div>
                        <i className="fa-solid fa-square-arrow-up-right text-[rgb(136,206,2)] text-4xl"></i>
                    </div></a>
                </div>
                <div className="flex flex-col p-12">
                    <img src={Addictsy} alt="" className="" />
                    <a href="https://addictsy.netlify.app/" target="_blank"><div className="bg-[#0b0b0b] p-6 rounded-br-md rounded-bl-md flex justify-between">
                        <div className="flex flex-col">
                            <div><span className="font-bold">ADDICTSY</span> </div>
                            <div className="text-sm">Share hashnode blogs on twitter with ease in the form of threads</div>
                        </div>
                        <i className="fa-solid fa-square-arrow-up-right text-[rgb(136,206,2)] text-4xl"></i>
                    </div></a>
                </div>
                <div className="flex flex-col p-12">
                    <img src={Flixnest} alt="" className="" />
                    <a href="https://flixnest.netlify.app/" target="_blank"><div className="bg-[#0b0b0b] p-6 rounded-br-md rounded-bl-md flex justify-between">
                        <div className="flex flex-col">
                            <div><span className="font-bold">FLIX NEST</span> </div>
                            <div className="text-sm">A Movie Website</div>
                        </div>
                        <i className="fa-solid fa-square-arrow-up-right text-[rgb(136,206,2)] text-4xl"></i>
                    </div></a>
                </div>
                <div className="mb-12 flex flex-col p-12">
                    <img src={BeyondSkill} alt="" className="" />
                    <a href="https://beyondskill.netlify.app/" target="_blank"><div className="bg-[#0b0b0b] p-6 rounded-br-md rounded-bl-md flex justify-between">
                        <div className="flex flex-col">
                            <div><span className="font-bold">BEYOND SKILL</span> </div>
                            <div className="text-sm">Share hashnode blogs on twitter with ease in the form of threads</div>
                        </div>
                        <i className="fa-solid fa-square-arrow-up-right text-[rgb(136,206,2)] text-4xl"></i>
                    </div></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection