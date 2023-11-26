import svgs from "../../public/assets/skills svgs/";

const Skills = () => {
  return (
    <div className="bg-hero bg-center bg-no-repeat bg-cover flex flex-col p-6 md:p-12 gap-6 items-center">
      <div className="text-[rgb(136,206,2)] text-4xl md:text-5xl font-bold">My Skills</div>
      <div className="grid grid-cols-4 gap-6 md:gap-8 items-center mb-16">
        {Object.keys(svgs).map((key) => (
          <div key={key}>
            <img src={(svgs as any)[key]} key={key} alt=""  className="w-24 object-cover bg-cover p-[6px] md:p-4 bg-[rgb(0,0,0)] border-2 border-opacity-20 border-gray-200 rounded-lg hover:scale-105 cursor-pointer transition-transform flex justify-center items-center"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
