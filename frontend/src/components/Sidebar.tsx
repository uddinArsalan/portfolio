import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import portfolio from "../assets/Profile.png";

interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar, setShowSidebar }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
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

  const sidebarItems = ["About", "Projects", "Blogs", "Contact"];

  return (
    <>
      {showToggle && (
        <i
          className="fa-solid fa-bars absolute top-0 pt-12 pl-6 text-white text-2xl font-light cursor-pointer z-40"
          onClick={() => setShowSidebar((prev: boolean) => !prev)}
        ></i>
      )}
      {showSidebar && (
        <div className={`bg-gradient-to-b from-gray-900 to-black font-semibold text-xl text-gray-300 grid grid-rows-5 md:grid-rows-6 grid-cols-1 place-items-center p-8 cursor-pointer h-screen lg:sticky lg:top-0 lg:bottom-0 lg:left-0 lg:col-span-1 col-span-2 sidebar-animate sidebar-transition`}>
          <div className="flex justify-center">
            <img
              src={portfolio}
              alt="Profile"
              className="h-24 w-24 rounded-full border-2 border-emerald-500 shadow-lg"
            />    
          </div>
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500 md:block hidden text-3xl md:mt-6 font-bold">
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
              >
                {item}
              </Link>
            </div>
          ))}
          <div className="flex space-x-6 md:mt-6">
            <a href="https://github.com/uddinArsalan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="https://linkedin.com/in/arsalan-uddin-2356b81b9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="mailto:uddinarsalan91@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;