import bgImg from "../../public/assets/video.mp4";
import { Link } from "react-scroll";
import Text from "./Text";
// font-bold text-5xl bg-green-700 text-center p-4 rounded-xl

const Background = () => {

  //bg-[#151515]
  return (
    <>
      <header className="relative flex justify-center items-center text-white h-screen ">
        <div className="absolute grid grid-row-3 gap-y-8 place-items-center place-content-center justify-center z-20
           ">
            <Text className="text-green-500 font-extrabold text-4xl md:text-6xl md:m-0 m-10 flex justify-center items-center text-center" text="WELCOME TO MY PORTFOLIO" delay={200} />
          {/* <div className=""></div> */}
          <div className="bg-green-400 text-black font-semibold text-sm pt-2 pr-3 pb-2 pl-3 rounded-md w-32 flex justify-center items-center cursor-pointer">
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
          <div className="flex gap-8 text-5xl cursor-pointer">
            <a href="https://twitter.com/Arsalan_0101" target="_blank"><i className="fa-brands fa-square-x-twitter text-green-500"></i></a>
            <a href="https://github.com/uddinArsalan" target="_blank"><i className="fa-brands fa-github text-green-500"></i></a>
            <a href="https://www.linkedin.com/in/arsalan-uddin-2356b81b9" target="_blank"><i className="fa-brands fa-linkedin text-green-500"></i></a>
          </div>
        </div>
        <video
          autoPlay={true}
          loop
          muted
          className="cursor-pointer object-cover h-full"
          preload="none"
        >
          <source src={bgImg} type="video/mp4" className="" />
          Your browser does not support the video tag.
        </video>
      </header>
    </>
  );
};

export default Background;
