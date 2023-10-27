import svgs from "../../public/assets/skills svgs/"
// import bgSkill from "../../public/assets/skillbg.jpg"

const Skills = () => {
    return (
        <div className="bg-gray-900 bg-[url('../../public/assets/skillbg2.jpg')] bg-center bg-no-repeat bg-cover flex flex-col p-12 justify-center items-center gap-12">
            <div className="text-[rgb(136,206,2)] text-5xl font-bold">My Skills</div>
            <div className="grid grid-cols-3 place-content-center gap-y-8 gap-8 items-center  p-8 object-contain">
                <div className="">
                    <img src={svgs.react_svg} alt="" className="w-24" />
                </div>
                <div className="">
                    <img src={svgs.javascript_svg} alt="" className="w-24" />
                </div>
                <div className="">
                    <img src={svgs.tailwindcss_svg} alt="" className="w-24" />
                </div>
                <div className="">
                    <img src={svgs.typescript_svg} alt="" className="w-24" />
                </div>
                <div className="">
                    <img src={svgs.bootsrap_svg} alt="" className="w-24" />
                </div>
                <div className="">
                    <img src={svgs.graphql_svg} alt="" className="w-24" />
                </div>
                <div className="">
                    <img src={svgs.node_svg} alt="" className="w-24" />
                </div>
                <div className="">
                    <img src={svgs.firebase_svg} alt="" className="w-24" />
                </div>
                <div className="">
                    <img src={svgs.html_svg} alt="" className="w-24" />
                </div>
            </div>
        </div>
    )
}

export default Skills