import profile from "../assets/Profile.png";
import { Link } from "react-scroll";
import Text from "./Text";

const About = () => {
  return (
    <div className="text-white bg-black flex flex-col justify-center items-center gap-10 md:p-12 p-6 w-full" id="about">
      <div className="text-[#88ce02] text-5xl font-bold flex justify-center items-center w-full">About Me</div>
      <img src={profile} alt="" className="w-48 h-48 rounded-md bg-blue-900" />
      <div>
        <Text className="md:text-5xl text-3xl text-white font-mono" text="Hello My Name is " delay={100} />
        <span className="text-pink-700 font-bold text-3xl md:text-5xl">ARSALAN</span>
      </div>
      <div className="p-2 md:p-12 font-serif text-lg flex flex-col gap-6">
        <div>Hi, I'm Arsalan, a passionate frontend developer dedicated to creating immersive digital experiences through clean, efficient code and stunning design.</div>
        <div className="flex flex-col">
          <div className="font-bold text-2xl text-[rgb(136,206,2)]">My Journey</div>
          <div>I embarked on my journey in the world of web development [X years] ago, driven by an insatiable curiosity and a desire to create captivating user interfaces. Throughout my career, I've honed my skills in technologies like CSS, JavaScript,React, Typescript etc. and have actively kept pace with the evolving tech landscape.</div>
        </div>
        <div>
          <div className="font-bold text-2xl text-[rgb(136,206,2)]">What I Do</div>
          <div>I specialize in crafting responsive, user-friendly web applications and pixel-perfect designs. Whether it's building interactive websites, optimizing UI/UX, or delving into the intricacies of frontend architecture, I'm dedicated to delivering top-notch solutions.</div>
        </div>
        <div>
          <div className="font-bold text-2xl text-[rgb(136,206,2)]">What Sets Me Apart</div>
          <div>My approach combines a keen eye for aesthetics with a deep understanding of the tech stack, allowing me to bridge the gap between creativity and functionality. I thrive on challenges and love turning innovative ideas into reality.</div>
        </div>
        <div>
          <div className="font-bold text-2xl text-[rgb(136,206,2)]">Let's Connect <span><Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <i className="fa-solid fa-circle-down text-[rgb(136,206,2)] text-2xl cursor-pointer"></i>
          </Link></span></div>
          <div>I'm passionate about collaborating on exciting projects and creating remarkable digital experiences. Feel free to reach out for any potential opportunities, collaborations, or just a chat about anything frontend-related.</div>
        </div>
      </div>
    </div>

  )
}

export default About