import logo from "./new-icon.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import "./navbar.css";
import { useLocation } from "react-router-dom";
import "./../navbar/navbar.css";

let Navbar = () => {
  let location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // {name: <FaGithub /> , link: "https://github.com/12rgilang"},
  // {name: <FaLinkedinIn /> , link: "https://www.linkedin.com/in/gilang-ramadhan-fullstackdev2022"},
  // {name: <FaInstagramSquare /> , link: "https://www.instagram.com/12rgilang/"},
  // {name: <FaTwitterSquare /> , link: "https://twitter.com/G_R12/status/1574050538693758976"},

  let Links = [
    { name: "Home", link: "/home" },
    { name: "Story", link: "/story" },
    { name: "Portofolio", link: "/porto" },
  ];

  return (
    <>
      {location.pathname === "/" ? null : (
        <div className="navbar flex items-center h-20">
          <div className="left basis-1/2">
            <div className="logo flex items-center pl-3 sm:justify-start sm:flex ">
                <a href={Links[0].link}> <img
                    src={logo}
                    alt="Logo"
                    className="w-15 h-10 sm:w-15 sm:h-20"
                    data-aos="zoom-out-right"
                />
                </a>
            </div>
          </div>
          <div
            className="middle my-salmon flex basis-1/2 justify-center items-center"
            data-aos="zoom-out-down"
          >
            <div className="text hidden sm:flex sm:justify-center sm:basis-1/2 sm:text-3xl">
              PORTOFOLIO
            </div>
            <div className="flex sm:hidden">GILANG RAMADHAN</div>
          </div>
          <div
            className="right flex items-center justify-end cursor-pointer basis-1/2 pr-2 my-fs-20 lg:flex"
            data-aos="zoom-out-left"
          >
            <div className="wraper flex-col lg:flex sm:text-3xl">
              <ul className="hidden sm:flex md:flex lg:flex items-center cursor-pointer">
                {Links.map((value) => {
                  return (
                    <li key={value.name} className="px-2 my-salmon ">
                      <a href={value.link}> {value.name}</a>
                    </li>
                  );
                })}
              </ul>

              {/* dropdown */}
              <div className="relative">
                <button
                  className="flex my-bg-secondary items-center px-3 py-2 rounded my-salmon sm:hidden"
                  onClick={toggleMenu} // Add an event handler to toggle the value of "isOpen"
                >
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                <div
                  className={`fixed top-0 right-0 left-auto z-50 flex group-focus:block group-focus:opacity-100 transition-opacity duration-150 ease-in-out ${
                    isOpen ? "block" : "hidden"
                  }`} // Show or hide the menu options based on the value of "isOpen"
                >
                  <div className="relative w-full my-bg-secondary ">
                    <div
                      className="flex py-2 px-4 font-semibold my-salmon"
                    >
                        <div className="my-bg-secondary mr-3 px-4 py-2 ">
                            {
                              Links.map((value) => {
                                return(
                                  <div key={value.name} className="hover:opacity-75 focus:opacity-75="> 
                                  <a href={value.link}>
                                    {value.name}
                                  </a>
                                  </div>
                                )
                              })
                            }
                        </div>
                    </div>
                  </div>
                  <button
                    className="absolute top-0 right-0 pt-4 mr-4 my-dark"
                    onClick={toggleMenu} // Add an event handler to toggle the value of "isOpen"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
