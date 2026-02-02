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
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1"></div>
      <h3 className="text-2xl font-bold mb-4 text-emerald-400">{title}</h3>
      {children}
    </motion.div>
  );
};

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
              className="text-lg text-gray-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I'm a full-stack developer currently working at NatureDots, where
              I build performant data visualization platforms and scalable React
              applications. I specialize in React.js, Next.js, and modern
              backend technologies like Go and Node.js, with hands-on experience
              delivering production features that improve performance and user
              experience. I also actively sharpen my problem-solving skills with
              900+ LeetCode problems solved across arrays,strings, graphs,
              trees, and dynamic programming.
            </motion.p>
          </div>
        </div>

        <div className="flex justify-end p-4 rounded-lg shadow-lg">
          <a
            href="https://drive.google.com/file/d/1q8UR6pE6l6B5k-LiJwT4SsjHekj8hrUx/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm gap-2 px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors"
          >
            <span className="font-semibold">Resume.pdf</span>
          </a>
        </div>

        <div className="space-y-12">
          <TimelineItem title="Technical Skills">
            <p className="text-gray-300">
              JavaScript (ES6+), TypeScript, Golang, Java, Python, React.js,
              Next.js, SvelteKit, Node.js, Express.js, Tailwind CSS, GraphQL,
              PostgreSQL, MongoDB, Redis, Firebase, Supabase, Prisma, Zustand,
              TanStack Query, REST APIs.
            </p>
          </TimelineItem>

          <TimelineItem title="Professional Experience">
            <h4 className="font-semibold text-emerald-400 mb-2">
              Frontend Developer – NatureDots (June 2025 – Present)
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>
                Developed an interactive data visualization platform with
                multi-parameter comparison graphs for monitoring waterbodies.
              </li>
              <li>
                Optimized dashboard performance, reducing load times by 40% and
                enhancing platform stability.
              </li>
              <li>
                Built an internal operations dashboard that boosted team
                efficiency by 30%.
              </li>
              <li>
                Established a library of 15+ reusable React components, cutting
                code duplication by 25%.
              </li>
            </ul>

            <h4 className="font-semibold text-emerald-400 mt-4 mb-2">
              Frontend Developer Intern – Inherit (April 2024 – June 2024)
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>
                Redesigned fintech claim workflow with OTP security, reducing
                process time to 2 minutes.
              </li>
              <li>
                Built a secure document management system using React and AWS S3
                for efficient file handling.
              </li>
              <li>
                Translated Figma designs into pixel-perfect, responsive
                dashboards across all devices.
              </li>
            </ul>
          </TimelineItem>

          <TimelineItem title="Key Projects">
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>
                AskDoc – AI-powered document Q&A with Go, Redis, Qdrant, Cohere
                API, JWT authentication
              </li>
              <li>
                URL Shortener – Go workers, Redis streams, PostgreSQL,
                SvelteKit, Keycloak
              </li>
              <li>
                InterViewMate – AI interview platform with Next.js, Cohere API,
                3D visuals
              </li>
              <li>
                Truview – Social media platform with Next.js, Auth0, Prisma,
                Cloudflare CDN
              </li>
              <li>
                PRODO – Task management with Next.js 15, Zustand, TanStack Query
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
          <p className="text-gray-300 mb-6">
            I enjoy solving real-world problems through code and am always open
            to collaborations on innovative projects. Feel free to reach out if
            you’d like to work together.
          </p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
