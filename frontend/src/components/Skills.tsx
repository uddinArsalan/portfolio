import svgs from "../../public/assets/skills svgs/";

const Skills = () => {
  return (
    <div className="bg-hero bg-center bg-no-repeat bg-cover flex flex-col p-6 md:p-12 justify-center items-center gap-6 md:gap-12">
      <div className="text-[rgb(136,206,2)] text-5xl font-bold">My Skills</div>
      <div className="grid grid-cols-4 gap-10 items-center">
        {Object.keys(svgs).map((key) => (
          <div key={key}>
            <img src={(svgs as any)[key]} key={key} alt=""  className="w-20 md:w-24 object-cover bg-cover p-4 bg-[rgb(0,0,0)] border-2 border-opacity-20 border-gray-200 rounded-xl hover:scale-105 cursor-pointer transition-transform"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
