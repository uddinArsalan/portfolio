import svgs from "../../public/assets/skills svgs/";

// w-24 object-cover bg-cover p-[6px] md:p-4 bg-[rgb(0,0,0)] border-2 rounded-xl border-opacity-20 border-gray-200 flex justify-center items-center

const Skills = () => {
  return (
    <div className=" bg-center bg-no-repeat bg-cover flex flex-col p-6 md:p-8 gap-12 items-center bg-zinc-950">
      <div className="text-[rgb(136,206,2)] text-4xl md:text-5xl font-bold">My Skills</div>
      <div className="grid grid-cols-4 md:grid-cols-5 gap-8 md:gap-8 items-center mb-16">
        {Object.keys(svgs).map((key) => (
          <div key={key}>
            <img src={(svgs as any)[key]} alt=""  className={`w-20 hover:scale-105 cursor-pointer transition-transform p-1`}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
