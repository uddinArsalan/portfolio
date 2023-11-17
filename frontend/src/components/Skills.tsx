import svgs from "../../public/assets/skills svgs/";

const Skills = () => {
  return (
    <div className="bg-gray-900 bg-hero bg-center bg-no-repeat bg-cover flex flex-col p-12 justify-center items-center gap-12">
      <div className="text-[rgb(136,206,2)] text-5xl font-bold">My Skills</div>
      <div className="grid md:grid-cols-4 grid-cols-3 place-content-center gap-8 items-center p-8 object-contain">
        {Object.keys(svgs).map((key) => (
          <div key={key}>
            <img src={(svgs as any)[key]} key={key} alt=""  className="w-24 object-cover bg-cover md:p-2 bg-black rounded-lg hover:scale-105 cursor-vertical-text transition-transform"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
