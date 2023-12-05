import portfolio from "../assets/Profile.png";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";

interface NavbarProp {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ showNav, setShowNav }: NavbarProp) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const [showBar, setShowBar] = useState(false);
  useEffect(() => {
    if (isDesktopOrLaptop) {
      setShowNav(true);
      setShowBar(false);
    } else {
      setShowNav(false);
      setShowBar(true);
    }
  }, [isDesktopOrLaptop]);

  // bg-[rgb(136,206,2)]

  return (
    <>
      {showBar && (
        <i
          className="fa-solid fa-bars absolute top-0 pt-12 pl-6 text-white text-2xl font-light cursor-pointer z-40"
          onClick={() => setShowNav((prev: boolean) => !prev)}
        ></i>
      )}
      {showNav ? (
        <div className={`bg-[#151515] font-semibold text-2xl text-[#bebebe] grid grid-rows-5 md:grid-rows-6 grid-cols-1 place-items-center p-10 cursor-pointer h-screen lg:sticky lg:top-0 lg:bottom-0 lg:left-0 lg:col-span-1 col-span-2 navbar-animate navbar-transition`}>
          <div className="flex justify-center">
            <img
              src={portfolio}
              alt=""
              className="h-fit rounded-full bg-blue-500 w-24 border-4"
            />    
          </div>
          <div className="text-[rgb(136,206,2)] md:block hidden text-4xl md:mt-8 font-bold">
            ARSALAN
          </div>
          {/* <div className="text-[#989494] ">Home</div> */}
          <div className="md:items-end items-start">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              // offset={10}
              duration={1000}
            >
              About
            </Link>
          </div>
          <div className="md:items-end">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              // offset={40}
              duration={1000}
            >
              Projects
            </Link>
          </div>
          <div className="md:items-end">
            <Link
              activeClass="active"
              to="blogs"
              spy={true}
              smooth={true}
              // offset={40}
              duration={1000}
            >
              Blogs
            </Link>
          </div>
          <div className="md:items-end">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              // offset={40}
              duration={1000}
            >
              Contact
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
