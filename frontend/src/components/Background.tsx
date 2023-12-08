// import bgVideo from "../../public/assets/video3.webm";
import { Link } from "react-scroll";
// @ts-ignore
// import BIRDS from 'vanta/dist/vanta.birds.min';
import WAVE from 'vanta/dist/vanta.waves.min';
// import { RoughNotation } from "react-rough-notation";
import { useRef, useState, useEffect } from "react";

const Background = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  // const myRef = useRef(null)
  const birdBGRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(WAVE({
        el: birdBGRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        scale: 1.00,
        minHeight: 200.00,
        minWidth: 200.00,
        scaleMobile: 1.00,
        // backgroundColor: 0x12b64,
        // color1: "rgb(136,206,2)",
        // color2: "rgb(136,206,2)"
      }))
    }
    // return () => {
    //   if (vantaEffect) vantaEffect.destroy()
    // }
  }, [vantaEffect])
  // console.log(birdBGRef.current)
  return (
    <>
      <header ref={birdBGRef} className="relative flex justify-center items-center text-white h-screen">
        <div className="absolute grid grid-row-3 gap-y-8 place-items-center place-content-center justify-center z-20
           ">
          {/* <RoughNotation type="highlight" animate={true} animationDelay={100} animationDuration={1000} color={"rgb(37, 99, 235)"} show={true}> */}
          <div className="text-black opacity-90 font-extrabold text-6xl md:m-0 m-10 flex justify-center items-center text-center md:p-2">Welcome to my Portfolio</div>
          {/* </RoughNotation> */}
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
        {/* <video
          autoPlay
          loop
          playsInline
          muted
          className="cursor-pointer object-cover h-full"
        >
          <source src={bgVideo} type="video/webm" className=""/>
          Your browser does not support the video tag.
        </video> */}
      </header>
    </>
  );
};

export default Background;
