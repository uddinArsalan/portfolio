import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import { useEffect,useRef } from "react";
import Projects from "./project-data.js";

const ProjectSection = () => {
    const controlsArray = Projects.map(() => useAnimation());
    const refs = Projects.map(() => useRef<HTMLDivElement>(null));
//   const [ref, inView] = useInView({
//     triggerOnce: true, // Only trigger the animation once
//     threshold: 0.5, // Adjust this threshold as needed
//   });
// 
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
          { threshold: 0.4 }
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
      className="bg-gray-900 text-gray-300 flex flex-col items-center cursor-pointer "
      id="projects"
    >
      <div className="text-[rgb(136,206,2)] text-5xl font-bold mt-8">
        PROJECTS
      </div>
      <div
        className="flex flex-col md:w-3/4"
      >
        {Projects.map(({ id, name, description, imgSrc, project_link },index) => (
          <motion.div
            className="flex flex-col md:p-12 p-9"
            key={id}
            ref={refs[index]}
            initial="hidden"
            animate={controlsArray[index]}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.5}}
          >
            <img src={imgSrc} alt="" className="" />
            <a href={project_link} target="_blank">
              <div className="bg-[#0b0b0b] p-6 rounded-br-md rounded-bl-md flex justify-between">
                <div>
                  <div>
                    <span className="font-bold">{name}</span>{" "}
                  </div>
                  <div className="text-sm">{description}</div>
                </div>
                <i className="fa-solid fa-square-arrow-up-right text-[rgb(136,206,2)] text-4xl"></i>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
