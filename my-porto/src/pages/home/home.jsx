import "./../home/home.css";
import logo from "./../home/workspace.png";
import logo1 from "./../home/business.png";
import self from "./../home/myself.jpeg"
import "./../home/animateText.css";
import Aos from "aos";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedCharacters from "./animateText";
import Ticker from "./../ticker/ticker";
import RandomChar from "../../components/randomchar/randomchar";

let Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [replay, setReplay] = useState(true);

  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "Meet your new Favorite \n Web Dev." },
    // {
    //   type: "heading2",
    //   text: "Hello Welcome to my Portofolio Web, its responsive web so feel free to play with this web.",
    // },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  // Quick and dirt for the example
  // const handleReplay = () => {
  //   setReplay(!replay);
  //   setTimeout(() => {
  //     setReplay(true);
  //   }, 600);
  // };
  return (
    <>
      {/* header */}
      <div className="parent grid-cols-2 mt-[20px] sm:flex lg:justify-center lg:items-center ">
        <p className="text-center h-auto sm:flex sm:items-center sm:text-center sm:basis-1/2 lg:flex lg:justify-center lg:items-center">
          <motion.div
            className="App "
            initial="hidden"
            // animate="visible"
            animate={replay ? "visible" : "hidden"}
            variants={container}
          >
            <div className=" flex justify-center pt-[150px] sm:flex-col sm:items-center sm:px-[10px] sm:pt-[150px] md:container">
              {placeholderText.map((item, index) => {
                return <AnimatedCharacters {...item} key={index} />;
              })}
            </div>
          </motion.div>
        </p>
        <div
          className="icon flex justify-center sm:basis-1/2"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="30"
          data-aos-offset="0"
        >
          <img src={logo} alt="tech" className="hvr-pulse-grow " />
        </div>
        <div
          className="introduction flex justify-center "
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        ></div>
      </div>

      {/* ticker */}
      <div className="ticker mt-5">
        <div className="word flex justify-center items-center border-b text-5xl my-secondary">
          WORKING WITH 
        </div>
      </div>
      <Ticker />

      {/* pitch */}
      <div className="main-pitch grid-cols-2 mt-[20px] sm:flex lg:justify-center lg:items-center ">
        {/* left */}
        <div
          className="icon flex justify-center sm:basis-1/2 md:basis-1/2"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="30"
          data-aos-offset="0"
        >
          <img src={logo1} alt="Bussiness" className="hvr-pulse-grow " />
        </div>

        {/* right */}
        <div data-aos="zoom-out-up">
        <div className="right text-center h-auto sm:flex sm:items-center sm:text-center sm:basis-1/2 md:basis-1/2 lg:flex lg:justify-center lg:items-center">
          <div
            class="p-6 md:p-12 text-center md:text-left shadow-lg rounded-md"
          >
            <div className="flex justify-center">
              <div className="max-w-3xl">
                <div className="block p-6 rounded-lg shadow-lg my-bg-light m-4">
                  <div className="md:flex md:flex-row">
                    <div className="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
                      <img
                        src={self}
                        className="rounded-full shadow-md"
                        alt="Gilang Avatar"
                      />
                    </div>
                    <div className="md:ml-6">
                      <p className="text-gray-500 font-light mb-6">
                      "Web development skills can fuel business growth and entrepreneurship. Harness the power of technology to drive success and create new opportunities in the world of business and beyond."
                      </p>
                      <p className="font-semibold text-xl mb-2 text-gray-800">
                        Gilang Ramadhan
                      </p>
                      <p className="font-semibold text-gray-500 mb-0">
                        Full-Stack Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="h-40"></div>
      {/* <RandomChar /> */}
      <div className="h-40"></div>
    </>
  );
};

export default Home;
