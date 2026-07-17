import { motion } from "framer-motion";
import { useState } from "react";
import { Projects } from "../../data/project-data.js";

const MAX_VISIBLE_TAGS = 5;

const statusLabel: Record<string, string> = {
  building: "Currently Building",
  archived: "Archived",
};

const ProjectSection: React.FC = () => {
  const [expandedSkills, setExpandedSkills] = useState<Set<number>>(new Set());

  return (
    <div
      className="bg-gradient-to-b from-neutral-900 to-black text-gray-300 flex flex-col items-center"
      id="projects"
    >
      <h2 className="text-5xl font-bold mt-12 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-600">
        PROJECTS
      </h2>
      <div className="flex flex-col w-full md:w-3/4 max-w-6xl">
        {Projects.map(
          ({
            id,
            name,
            description,
            imgSrc,
            project_link,
            code_link,
            technologies,
            status,
          }) => {
            const isExpanded = expandedSkills.has(id);

            const visibleTags = isExpanded
              ? technologies
              : technologies.slice(0, MAX_VISIBLE_TAGS);

            const hiddenCount = technologies.length - MAX_VISIBLE_TAGS;
            const badgeLabel = status ? statusLabel[status] : undefined;

            const linkIsGithub = project_link?.includes("github.com");
            const demoHref = linkIsGithub ? undefined : project_link;
            const codeHref =
              code_link || (linkIsGithub ? project_link : undefined);

            return (
              <motion.div
                className="mb-12 last:mb-0"
                key={id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    alt={name}
                    width={1200}
                    height={630}
                    loading="lazy"
                    className="w-full aspect-[1200/630] object-cover rounded-t-lg"
                  />
                ) : (
                  <div className="w-full aspect-[1200/630] rounded-t-lg bg-gradient-to-br from-neutral-800 to-neutral-950 border-b border-emerald-900/40 flex flex-col items-center justify-center gap-2">
                    <span className="text-2xl font-mono tracking-wide text-emerald-400/70">
                      {name}
                    </span>
                    <span className="text-xs font-mono text-emerald-600/50">
                      $ no preview available
                    </span>
                  </div>
                )}

                <div className="bg-neutral-900 p-4 md:p-6 rounded-b-lg">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-xl text-emerald-400">
                          {name}
                        </h3>
                        {badgeLabel && (
                          <span className="inline-block bg-emerald-600 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
                            {badgeLabel}
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-gray-300 mb-3">
                        {description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {visibleTags.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-neutral-800 rounded-full text-xs text-emerald-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {hiddenCount > 0 && (
                          <button
                            type="button"
                            onClick={() => {
                              setExpandedSkills((prev) => {
                                const next = new Set(prev);

                                if (next.has(id)) {
                                  next.delete(id);
                                } else {
                                  next.add(id);
                                }

                                return next;
                              });
                            }}
                            className="px-2 py-1 bg-neutral-800 rounded-full text-xs text-emerald-400 hover:bg-neutral-700 transition-colors"
                          >
                            {isExpanded ? "Show Less" : `+${hiddenCount} more`}
                          </button>
                        )}
                      </div>

                      <div className="flex gap-3">
                        {demoHref && (
                          <a
                            href={demoHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                          >
                            <i className="fa-solid fa-square-arrow-up-right"></i>
                            Live Demo
                          </a>
                        )}
                        {codeHref && (
                          <a
                            href={codeHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                          >
                            <i className="fa-brands fa-github"></i>
                            View Code
                          </a>
                        )}
                        {!demoHref && !codeHref && (
                          <span className="text-sm text-gray-500 italic">
                            Link coming soon
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          },
        )}
      </div>
    </div>
  );
};

export default ProjectSection;
