import { motion, useAnimation } from "framer-motion";
import { useEffect,useRef } from "react";
import {Projects} from "../../data/project-data.js";

const ProjectSection: React.FC = () => {
  const controlsArray = Projects.map(() => useAnimation());
  const refs = Projects.map(() => useRef<HTMLDivElement>(null));

  useEffect(() => {
    refs.forEach((ref, index) => {
      const element = ref.current;
      const controls = controlsArray[index];

      if (element && controls) {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              controls.start('visible');
            } else {
              controls.start('hidden');
            }
          },
          { threshold: 0.2 }
        );

        observer.observe(element);

        return () => {
          observer.unobserve(element);
        };
      }
    });
  }, [controlsArray, refs]);

  return (
    <div
    className="bg-gradient-to-b from-neutral-900 to-black text-gray-300 flex flex-col items-center cursor-pointer"
    id="projects"
  >
    <h2 className="text-5xl font-bold mt-12 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-600">
      PROJECTS
    </h2>
    <div className="flex flex-col w-full md:w-3/4 max-w-6xl">
      {Projects.map(({ id, name, description, imgSrc, project_link, technologies }, index) => (
        <motion.div
          className="mb-12 last:mb-0"
          key={id}
          ref={refs[index]}
          initial="hidden"
          animate={controlsArray[index]}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.5 }}
        >
          <img src={imgSrc} alt={name} className="w-full rounded-t-lg" />
          <a href={project_link} target="_blank" rel="noopener noreferrer">
            <div className="bg-neutral-900 p-4 md:p-6 rounded-b-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xl mb-2 text-emerald-400">{name}</h3>
                  <p className="text-sm text-gray-300 mb-3">{description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-neutral-800 rounded-full text-xs text-emerald-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {id <= 2 && (
                    <span className="inline-block bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">
                      Currently Building
                    </span>
                  )}
                </div>
                <i className="fa-solid fa-square-arrow-up-right text-emerald-400 text-3xl"></i>
              </div>
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  </div>
  );
};

export default ProjectSection;