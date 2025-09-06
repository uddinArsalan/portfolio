import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import profile from "../assets/Profile.png";

interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar, setShowSidebar }) => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const [showToggle, setShowToggle] = useState(false);

  useEffect(() => {
    if (isDesktopOrLaptop) {
      setShowSidebar(true);
      setShowToggle(false);
    } else {
      setShowSidebar(false);
      setShowToggle(true);
    }
  }, [isDesktopOrLaptop, setShowSidebar]);

  const sidebarItems = ["About", "Projects", "Blogs", "Skills", "Contact"];

  const handleLinkClick = () => {
    if (!isDesktopOrLaptop) {
      setShowSidebar(false);
    }
  };

  return (
    <>
      {showToggle && (
        <button
          className="fixed top-4 left-4 z-50 p-2 text-white text-2xl bg-gray-800 rounded-md focus:outline-none"
          onClick={() => setShowSidebar((prev) => !prev)}
          aria-label="Toggle sidebar"
        >
          <i className="fa-solid fa-bars" />
        </button>
      )}
      <div
        className={`${
          isDesktopOrLaptop
            ? "bg-gradient-to-b from-gray-900 to-black font-semibold text-xl text-gray-300 flex flex-col justify-evenly place-items-center p-8 cursor-pointer h-screen lg:sticky lg:top-0 lg:bottom-0 lg:left-0 lg:col-span-1 col-span-2"
            : "fixed top-0 flex flex-col justify-evenly left-0 h-full w-64 bg-gradient-to-b from-gray-900 to-black text-gray-300 text-lg font-semibold transform transition-transform duration-300 ease-in-out z-40"
        } ${
          !isDesktopOrLaptop && !showSidebar
            ? "-translate-x-full"
            : "translate-x-0"
        }`}
      >
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="h-16 w-16 rounded-full border-2 border-emerald-500 shadow-lg"
          />
        </div>
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500 md:block hidden text-3xl md:mt-4 font-bold text-center">
          ARSALAN
        </div>
        {sidebarItems.map((item) => (
          <div key={item} className="md:items-end w-full">
            <Link
              activeClass="text-emerald-400"
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              duration={1000}
              className="block py-2 px-4 hover:bg-gray-800 transition-colors duration-200 rounded-md w-full text-center"
              onClick={handleLinkClick}
            >
              {item}
            </Link>
          </div>
        ))}
        <div className="flex justify-center space-x-6 md:mt-6">
          <a
            href="https://github.com/uddinArsalan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
          >
            <i className="fab fa-github text-2xl" />
          </a>
          <a
            href="https://linkedin.com/in/arsalan-uddin-2356b81b9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
          >
            <i className="fab fa-linkedin text-2xl" />
          </a>
          <a
            href="mailto:uddinarsalan91@gmail.com"
            className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
          >
            <i className="fas fa-envelope text-2xl" />
          </a>
        </div>
      </div>
      {showSidebar && !isDesktopOrLaptop && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
