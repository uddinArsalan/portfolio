import { Link } from "react-scroll";
import { BackgroundBeams } from "./BackgroundBeams";

const Background = () => {
  return (
    <>
      <header className="relative flex justify-center items-center text-white h-screen">
        <div className="h-screen bg-neutral-950 w-full">
          {/* <div className="h-96 relative w-full flex flex-col items-center justify-center rounded-lg"> */}
              <BackgroundBeams />
          <div className="flex flex-col gap-6 justify-center items-center h-full ">
            <div className="text-black font-bold md:font-extrabold text-5xl md:text-6xl p-6 flex justify-center items-center text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
              Welcome to my Portfolio
            </div>
            <div className="text-sm pt-3 pr-5 pb-3 pl-5 rounded-md flex justify-center items-center cursor-pointer font-bold text-white bg-gradient-to-br from-green-600 to-green-800 hover:from-green-800 hover:to-green-700 shadow">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                className="z-40"
              >
                Get Started
              </Link>
            </div>
            <div className="flex gap-8 text-5xl cursor-pointer z-40">
              <a href="https://twitter.com/Arsalan_0101" target="_blank">
                <i className="fa-brands fa-square-x-twitter text-gray-600 "></i>
              </a>
              <a href="https://github.com/uddinArsalan" target="_blank">
                <i className="fa-brands fa-github text-gray-600 "></i>
              </a>
              <a
                href="https://www.linkedin.com/in/arsalan-uddin-2356b81b9"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin text-gray-600 "></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Background;
