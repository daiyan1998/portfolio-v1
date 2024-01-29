import { Link, Outlet, useLocation } from "react-router-dom";
import Work from "../pages/Work/Work";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

const Main = () => {
  const location = useLocation();
  return (
    <div className="max-w-6xl mx-auto relative md:px-0 px-4">
      {location.pathname == "/" ? (
        ""
      ) : (
        <Link to={"/"}>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="500"
            className="text-white w-7 font-bold text-xl cursor-pointer fixed z-50 md:top-32 top-10 md:right-72 right-20"
          >
            <div className="transition ease-out hover:-translate-x-7 duration-200 hover:after:content-['works'] ">
              Daiyan.
            </div>
          </div>
        </Link>
      )}
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
