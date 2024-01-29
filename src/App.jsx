import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleWindowClick = () => {
      if (!isLargeScreen) {
        setIsHovered((prevHovered) => !prevHovered);
      }
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [isLargeScreen]);

  const handleHover = () => {
    if (isLargeScreen) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (isLargeScreen) {
      setIsHovered(false);
    }
  };

  return (
    <>
      <div
        className={`text-2xl text-center mt-8 ${
          isLargeScreen && !isHovered ? "hover-transition" : ""
        }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        onClick={() =>
          !isLargeScreen && setIsHovered((prevHovered) => !prevHovered)
        }
      >
        {isLargeScreen && !isHovered ? (
          <span className="text-primary cursor-pointer">Hello</span>
        ) : (
          <span className="text-secondary cursor-pointer">
            {isHovered ? "Daiyan" : "Hello"}
          </span>
        )}
      </div>
    </>
  );
};

export default App;
