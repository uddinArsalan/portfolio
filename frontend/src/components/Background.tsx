import bgImg from "../assets/video.mp4";
import { Link } from "react-scroll";

const Background = () => {

  //bg-[#151515]
  return (
    <>
      <div className="text-white min-h-screen md:static h-full">
        <video
          autoPlay={true}
          loop
          muted
          className="cursor-pointer object-cover h-full"
        >
          <source src={bgImg} type="video/mp4" className="" />
          Your browser does not support the video tag.
        </video>
        <div className="text-blue-700 flex justify-center items-center">
          <div className="grid grid-rows-3 absolute place-items-center place-content-center md:top-60 justify-center
           font-bold text-6xl">
            <div className="flex text-center justify-center items-center">
              WELCOME TO MY PORTFOLIO
            </div>
            <div className="bg-green-300 hover:bg-green-400 text-black font-semibold text-sm pt-2 pb-2 pr-3 pl-3 rounded-md w-32 flex justify-center items-center cursor-pointer">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              // offset={10}
              duration={1000}
            >
              Get Started
            </Link>
            </div>
            <div className="flex gap-8 text-gray-500 text-5xl cursor-pointer">
              <i className="fa-brands fa-square-x-twitter hover:text-white"></i>
              <i className="fa-brands fa-github hover:text-gray-400"></i>
              <i className="fa-brands fa-linkedin hover:text-blue-800"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
