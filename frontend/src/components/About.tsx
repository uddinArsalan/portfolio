import profile from "../assets/Profile.png";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

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
        {/* Heading */}
        <motion.h2 
          className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        {/* Profile */}
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
              A passionate frontend developer specializing in creating intuitive and efficient user interfaces.
            </motion.p>
          </div>
        </div>

          <div className="flex justify-end p-4 rounded-lg shadow-lg">
            <a
              href="https://drive.google.com/file/d/1Krxp4w_qM3iqQSfuQJVI43a1RUB1SZDX/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm gap-2 px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors"
            >
              <span className="font-semibold">Resume.pdf</span>
            </a>
          </div>

        {/* Timeline */}
        <div className="space-y-12">
          <TimelineItem title="Technical Skills">
            <p className="text-gray-300">
              Proficient in: Next.js, React.js, TypeScript, JavaScript, Node.js, Tailwind CSS, GraphQL, PostgreSQL, HTML, CSS
            </p>
          </TimelineItem>

          <TimelineItem title="Professional Experience">
            <h4 className="font-semibold text-emerald-400 mb-2">Frontend Developer Software Engineer Intern at Inherit (April 2024 – June 2024)</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Developed user interfaces for Inherit financial technology platform</li>
              <li>Participated in code reviews and debugging sessions</li>
              <li>Collaborated with design and backend teams</li>
              <li>Utilized ReactJS, TypeScript, and RESTful APIs</li>
            </ul>
          </TimelineItem>

          <TimelineItem title="Key Projects">
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>InterViewMate: Next.js, TypeScript, Tailwind, Three.js, Supabase</li>
              <li>Thread It: React.js, TypeScript, Node.js, Twitter API, Firebase</li>
              <li>SketchSync: React.js, TypeScript, Canvas API, Firebase</li>
              <li>Personal Portfolio: React.js, Tailwind CSS, GraphQL</li>
            </ul>
          </TimelineItem>
        </div>


        {/* Contact Section */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-emerald-400">Let's Connect</h3>
          <p className="text-gray-300 mb-6">
            I'm passionate about creating impactful web applications and always open to new opportunities. Let's discuss how we can collaborate on innovative projects.
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
