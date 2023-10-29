import bgImg from "../../public/assets/video.mp4";
import { Link } from "react-scroll";

const Background = () => {

  //bg-[#151515]
  return (
    <>
      <header className="relative flex justify-center items-center text-white h-screen ">
        <div className="mt-10 absolute grid grid-rows-3 place-items-center place-content-center justify-center z-20
           ">
          <div className="font-bold text-6xl text-blue-700 text-center">WELCOME TO MY PORTFOLIO</div>
          <div className="bg-green-300 hover:bg-green-400 text-black font-semibold text-sm pt-2 pr-3 pb-2 pl-3 rounded-md w-32 flex justify-center items-center cursor-pointer">
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
        <video
          autoPlay={true}
          loop
          muted
          className="cursor-pointer object-cover h-full"
        >
          <source src={bgImg} type="video/mp4" className="" />
          Your browser does not support the video tag.
        </video>
      </header>
    </>
  );
};

export default Background;
