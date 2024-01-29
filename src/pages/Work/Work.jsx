import { Link } from "react-router-dom";
import { projects } from "../../constants/index";

const Work = () => {
  return (
    <>
      <ul
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="500"
        className="max-w-6xl mx-auto my-72 flex flex-col gap-20"
      >
        {projects.map(({ title, live, tools }) => (
          <li key={title} className="home text-white">
            <p className="md:text-[120px] text-5xl leading-tight font-bold">
              {title}
            </p>
            <p className="font-bold my-10">
              Built With : <span className="font-light">{tools}</span>
            </p>
            <div className="text-primary font-bold mt-3 flex gap-4">
              <div className="border-2 hover:text-white border-rose-700 p-2">
                View More
              </div>
              <Link target="_blank" to={live}>
                <div className="border-2 hover:text-white border-rose-700 p-2">
                  Live Site
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Work;
