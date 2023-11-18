import bgVideo from "../../public/assets/video3.webm";
import { Link } from "react-scroll";
import { RoughNotation } from "react-rough-notation";

const Background = () => {
  return (
    <>
      <header className="relative flex justify-center items-center text-white h-screen">
        <div className="absolute grid grid-row-3 gap-y-8 place-items-center place-content-center justify-center z-20
           ">
          <RoughNotation type={`box`} animationDelay={100} animationDuration={1000} color={"rgb(136,206,2)"} show={true}>
            <div className="text-black font-extrabold text-6xl md:m-0 m-10 flex justify-center items-center text-center md:p-2">Welcome To My Portfolio</div>
          </RoughNotation>
          <div className="bg-black text-sm pt-3 pr-5 pb-3 pl-5 rounded-md flex justify-center items-center cursor-pointer text-white">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Get Started
            </Link>
          </div>
          <div className="flex gap-8 text-5xl cursor-pointer">
            <a href="https://twitter.com/Arsalan_0101" target="_blank"><i className="fa-brands fa-square-x-twitter text-black "></i></a>
            <a href="https://github.com/uddinArsalan" target="_blank"><i className="fa-brands fa-github text-black"></i></a>
            <a href="https://www.linkedin.com/in/arsalan-uddin-2356b81b9" target="_blank"><i className="fa-brands fa-linkedin text-black"></i></a>
          </div>
        </div>
        <video
          autoPlay
          loop
          playsInline
          muted
          className="cursor-pointer object-cover h-full"
        >
          <source src={bgVideo} type="video/webm" className=""/>
          Your browser does not support the video tag.
        </video>
      </header>
    </>
  );
};

export default Background;
