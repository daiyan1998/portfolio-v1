import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";

const links = [
  {
    main: "Hello.",
    secondary: "About",
    color: "text-secondary",
    navigate: "/about",
    transitionDelay: 0.6,
  },
  {
    main: "I am",
    secondary: "Work",
    navigate: "/work",
    transitionDelay: 0.9,
  },
  {
    main: "Daiyan",
    secondary: "Contact",
    navigate: "/contact",
    transitionDelay: 1.2,
  },
];
const Home = () => {
  const pdfHandler = () => {
    fetch("/Abdul_Dayan_Resume.pdf").then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Abdul_Dayan_Resume.pdf";
        alink.click();
      });
    });
  };

  const [hoverStates, setHoverStates] = useState(links.map(() => false));
  const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 768);

  const handleMouseEnter = (index) => {
    if (!smallScreen)
      setHoverStates((prevHoverStates) =>
        prevHoverStates.map((hoverState, i) =>
          i === index ? true : hoverState
        )
      );
  };

  const handleMouseLeave = (index) => {
    if (!smallScreen)
      setHoverStates((prevHoverStates) =>
        prevHoverStates.map((hoverState, i) =>
          i === index ? false : hoverState
        )
      );
  };

  const handleWindowClick = () => {
    if (smallScreen)
      setHoverStates((prevHoverStates) =>
        prevHoverStates.map((hoverState) => !hoverState)
      );
  };

  useEffect(() => {
    // Check if the screen size is small on component mount and when resized
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check the screen size on component mount

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Attach event listener to the window on component mount
    window.addEventListener("click", handleWindowClick);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [smallScreen]);
  return (
    <div className=" max-w-6xl mx-auto relative overflow-hidden">
      <div className="relative flex items-center bg-primary_black h-screen overflow-hidden">
        <div className="md:text-[160px] text-6xl z-10 leading-tight text-primary font-bold">
          <div>
            {links.map(
              (
                { main, secondary, color, navigate, transitionDelay },
                index
              ) => (
                <div
                  key={main}
                  className={`${smallScreen ? "" : "home"} overflow-hidden`}
                >
                  <div
                    className={`about ${color} text ${
                      hoverStates[index] ? "hidden" : "block"
                    }`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    <m.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.4, delay: transitionDelay }}
                    >
                      {main}
                    </m.div>
                  </div>

                  <Link
                    to={navigate}
                    className={`${color} ${
                      hoverStates[index] ? "block" : "hidden"
                    }`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    <m.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.4, delay: transitionDelay }}
                    >
                      {secondary}
                    </m.div>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
        <div
          data-aos="zoom-out"
          data-aos-delay="300"
          data-aos-duration="1000"
          className="md:absolute md:-right-20"
        >
          <div className="relative flex justify-center overflow-hidden">
            <div className="z-40 absolute md:bottom-36 bottom-48">
              <button
                onClick={pdfHandler}
                href="#_"
                className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-md group"
              >
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Resume
                </span>
                <span className="absolute inset-0 border-2 border-white rounded-md"></span>
              </button>
            </div>
            <img
              className="hidden md:block"
              src="/IMG_20190511_010341_303.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="md:hidden flex justify-center">
        <div className="z-40 absolute top-0 left-0">
          <button
            onClick={pdfHandler}
            href="#_"
            className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-md group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              Resume
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-md"></span>
          </button>
        </div>
        <img
          className="absolute md:hidden overflow-hidden inset-16 m-auto"
          src="/IMG_20190511_010341_303.jpg"
          alt=""
        />
      </div>
      <span className="text-secondary md:text-2xl text-lg font-light w-auto text-center italic absolute left-0 right-0 bottom-16 m-auto animate-bounce">
        {screen.width < 510 ? "tap anywhere" : "Hover on Text"}
      </span>
    </div>
  );
};

export default Home;
