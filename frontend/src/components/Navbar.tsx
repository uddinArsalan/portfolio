import portfolio from "../assets/Profile.png";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link} from "react-scroll";

interface NavbarProp {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ showNav, setShowNav }: NavbarProp) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const [showBar, setShowBar] = useState(false);
  useEffect(() => {
    if (isDesktopOrLaptop) {
      setShowNav(true);
      setShowBar(false);
    } else {
      setShowBar(true);
    }
  }, [isDesktopOrLaptop]);

  return (
    <>
      {showBar && (
        <i
          className="fa-solid fa-bars absolute top-0 pt-12 pl-6 text-white text-5xl font-light cursor-pointer z-40"
          onClick={() => setShowNav((prev: boolean) => !prev)}
        ></i>
      )}
      {showNav ? (
        <div className="bg-[#151515] font-semibold text-2xl text-[#bebebe] grid grid-rows-6 place-items-center p-10 cursor-pointer h-screen md:sticky top-0 bottom-0 left-0 z-20">
          <div className="flex justify-center items-center">
            <img
              src={portfolio}
              alt=""
              className="rounded-full border-none w-32 p-0 flex"
            />
          </div>
          <div className="text-[rgb(136,206,2)] text-4xl mt-8 font-bold">
            ARSALAN
          </div>
          {/* <div className="text-[#989494] ">Home</div> */}
          <div className="items-end">
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
          <div className="items-end">
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
          <div className="items-end">
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
          <div className="items-end">
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
