import logo from "./new-icon.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import "./navbar.css";
import { useLocation } from "react-router-dom";
import "./../navbar/navbar.css";
import { Link } from "react-router-dom";

let Navbar = () => {
  let location = useLocation();
  let [open, setOpen] = useState(false);

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
              <div className="flex justify-center sm:hidden ">
                <div>
                  <div className="dropdown relative">
                    <a
                      className="
          dropdown-toggle
          px-6
          mr-5
          py-2.5
          my-bg-secondary
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                      href="#"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div className="wrapper flex-col">
                        <div className="w-5 h-1 my-bg-salmon mb-1"></div>
                        <div className="w-5 h-1 my-bg-salmon mb-1"></div>
                        <div className="w-5 h-1 my-bg-salmon "></div>
                      </div>
                    </a>
                    <ul
                      className="
          dropdown-menu
          min-w-max
          absolute
          hidden
          my-bg-secondary
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
                      aria-labelledby="dropdownMenuButton2"
                    >
                      {Links.map((value) => {
                        return (
                          <li key={value.name}>
                            <a
                              href={value.link}
                              className="
            dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
          "
                            >
                              {value.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
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
