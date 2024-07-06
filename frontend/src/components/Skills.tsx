import {svgs} from "../../public/assets/skills svgs/";

// w-24 object-cover bg-cover p-[6px] md:p-4 bg-[rgb(0,0,0)] border-2 rounded-xl border-opacity-20 border-gray-200 flex justify-center items-center
const Skills = () => {
  return (
    <div className="bg-gradient-to-b from-neutral-900 to-black py-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-600">
          My Skills
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 items-center">
          {Object.keys(svgs).map((key) => (
            <div key={key} className="flex justify-center">
              <img 
                src={(svgs as any)[key]} 
                alt={key}  
                className="w-16 md:w-20 hover:scale-110 transition-transform duration-300 filter hover:brightness-125"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
