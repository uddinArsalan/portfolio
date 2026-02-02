import { Link } from "react-scroll";
import { DecorativeBeams } from "./DecorativeBeams";
import { motion } from "framer-motion";

interface SocialLinkProps {
  href: string;
  icon: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors duration-300"
  >
    <i className={icon}></i>
  </a>
);

const HeroSection = () => {
  return (
    <header className="relative flex flex-col justify-center items-center text-white min-h-screen p-4 sm:p-8">
      <div className="absolute inset-0 bg-neutral-950 overflow-hidden">
        <DecorativeBeams />
      </div>
      <div className="relative z-10 flex flex-col gap-6 justify-center items-center text-center max-w-screen-lg mx-auto">
        <motion.h1
          className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to my Portfolio
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
            className="inline-block px-4 py-2 text-lg font-bold text-white bg-gradient-to-br from-emerald-600 to-emerald-800 hover:from-emerald-700 hover:to-emerald-900 cursor-pointer rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
        </motion.div>
        <motion.div
          className="flex gap-6 text-2xl sm:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SocialLink
            href="https://twitter.com/Arsalan_0101"
            icon="fa-brands fa-square-x-twitter"
          />
          <SocialLink
            href="https://github.com/uddinArsalan"
            icon="fa-brands fa-github"
          />
          <SocialLink
            href="https://www.linkedin.com/in/arsalan-uddin-2356b81b9"
            icon="fa-brands fa-linkedin"
          />
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;
