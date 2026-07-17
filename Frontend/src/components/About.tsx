import profile from "../assets/Profile.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

interface TimelineItemProps {
  title: string;
  children: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, children }) => {
  return (
    <motion.div
      className="relative pl-8 border-l-2 border-emerald-500"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1"></div>
      <h3 className="text-2xl font-bold mb-4 text-emerald-400">{title}</h3>
      {children}
    </motion.div>
  );
};

const achievements = [
  "Frontend Engineer @ NatureDots",
  "10+ Production Projects",
  "900+ LeetCode Problems",
  "Go • React • Distributed Systems",
];

const About = () => {
  return (
    <section
      className="bg-gradient-to-b from-neutral-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8"
      id="about"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col sm:flex-row items-center mb-12">
          <motion.img
            src={profile}
            alt="Arsalan"
            className="w-40 h-40 rounded-full object-cover mb-6 sm:mb-0 sm:mr-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div>
            <motion.h3
              className="text-3xl sm:text-4xl font-bold mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hello, I'm <span className="text-emerald-400">ARSALAN</span>
            </motion.h3>
            <motion.p
              className="text-lg text-gray-300 leading-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I'm a Software Engineer currently building production geospatial
              applications at{" "}
              <span className="text-emerald-400 font-medium">NatureDots</span>,
              where I develop interactive mapping tools, real-time dashboards,
              and data visualization systems used by customers.
              <br />
              <br />
              Outside of work, I enjoy building backend systems in Go—from
              deployment platforms and distributed processing pipelines to
              AI-powered applications. I'm passionate about understanding how
              systems work under the hood and regularly solve algorithmic
              problems on LeetCode to sharpen my problem-solving skills.
            </motion.p>
            <div className="flex flex-wrap gap-3 mt-6">
              {achievements.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-neutral-700 bg-neutral-900 text-sm text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end mb-14">
          <a
            href="https://drive.google.com/file/d/1F42_AGuyVumsN9S3aWWwBsWPfmJR0mL9/view?usp=drive_link"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-600/20 font-medium"
          >
            Download Resume
          </a>
        </div>

        <div className="space-y-12">
          <TimelineItem title="Technical Skills">
            <div className="space-y-4 text-gray-300">
              <p>
                <span className="font-semibold text-white">Languages:</span> Go,
                TypeScript, JavaScript, Java, Python
              </p>

              <p>
                <span className="font-semibold text-white">Frontend:</span>{" "}
                React, Next.js, SvelteKit, Tailwind CSS, TanStack Query, Zustand
              </p>

              <p>
                <span className="font-semibold text-white">Backend:</span> Go,
                Node.js, Express, GraphQL, REST APIs
              </p>

              <p>
                <span className="font-semibold text-white">Databases:</span>{" "}
                PostgreSQL, Redis, MongoDB, MySQL, Supabase
              </p>

              <p>
                <span className="font-semibold text-white">
                  Infrastructure:
                </span>{" "}
                Docker, RabbitMQ, Redis Streams, Cloudflare, Git
              </p>
            </div>
          </TimelineItem>

          <TimelineItem title="Professional Experience">
            <h4 className="font-semibold text-emerald-400 mb-2">
              Frontend Developer – NatureDots (June 2025 – Present)
            </h4>

            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Built and maintained a production aquaculture platform spanning
                four repositories, delivering interactive maps, real-time
                dashboards, and geospatial visualization tools for pond and
                waterbody analysis.
              </li>

              <li>
                Implemented GeoTIFF-based raster rendering to visualize
                environmental indices as interactive map layers for field teams.
              </li>

              <li>
                Optimized rendering bottlenecks and API integrations, reducing
                dashboard load times by{" "}
                <span className="font-medium text-white">40%</span>.
              </li>

              <li>
                Built an internal operations dashboard and developed
                <span className="font-medium text-white">
                  {" "}
                  15+ reusable React components
                </span>
                , improving development velocity and reducing duplicated code.
              </li>
            </ul>

            <h4 className="font-semibold text-emerald-400 mt-6 mb-2">
              Frontend Developer Intern – Inherit (April 2024 – June 2024)
            </h4>

            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Redesigned the fintech claim submission workflow with OTP-based
                verification, reducing submission time to under 2 minutes.
              </li>

              <li>
                Built a secure document management system using React and AWS S3
                with multi-file preview and optimized downloads.
              </li>

              <li>
                Translated Figma designs into fully responsive production
                interfaces.
              </li>
            </ul>
          </TimelineItem>

          <TimelineItem title="Featured Projects">
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>
                <span className="font-semibold text-white">DevDeploy</span> —
                Built a self-hosted Platform-as-a-Service in Go that
                automatically clones Git repositories, builds container images
                using Railpack, deploys applications with unique public URLs via
                Cloudflare Tunnels, and streams live deployment logs through
                Redis Streams.
              </li>

              <li>
                <span className="font-semibold text-white">FileAnalyzer</span> —
                Built an AI-powered document intelligence platform in Go with a
                fault-tolerant RAG pipeline, Redis Streams workers, Cohere
                reranking, Qdrant vector search, Server-Sent Events, and secure
                JWT authentication.
              </li>

              <li>
                <span className="font-semibold text-white">URL Shortener</span>{" "}
                — Developed a high-performance URL shortening service with
                asynchronous analytics processing using Redis Streams, Redis
                caching, PostgreSQL, and Keycloak authentication.
              </li>

              <li>
                <span className="font-semibold text-white">InterViewMate</span>{" "}
                — Created a voice-driven AI interview platform featuring speech
                recognition, Ready Player Me avatars, automated interview
                reports, Cohere-powered evaluation, and Supabase Row Level
                Security.
              </li>

              <li>
                <span className="font-semibold text-white">Truview</span> —
                Built a social media platform with optimistic UI updates, secure
                media delivery through Cloudflare Workers, Backblaze object
                storage, and a scalable Prisma-backed social graph.
              </li>
            </ul>
          </TimelineItem>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-emerald-400">
            Let's Connect
          </h3>
          {/* <p className="text-gray-300 mb-6">
            I enjoy solving real-world problems through code and am always open
            to collaborations on innovative projects. Feel free to reach out if
            you'd like to work together.
          </p> */}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-emerald-600 rounded-full hover:bg-emerald-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-600/20"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
