import { Link } from "react-router-dom";
import { social } from "../../constants/index";

const Contact = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      className="max-w-7xl text-secondary mx-auto"
    >
      <h1 className="md:text-[120px] text-5xl mt-60 font-bold">
        Let&apos;s make <br /> something great!
      </h1>
      <div className="max-w-3xl mx-auto text-lg ">
        <h3 className="text-5xl mt-64  font-bold">Contact</h3>
        <p className="mt-10 leading-relaxed">
          I&apos;m actively seeking opportunities to collaborate with companies,
          agencies, and individuals, not just as an employee but as a junior
          MERN stack developer looking to bring my skills and knowledge to the
          table. I&apos;m eager to work together with experienced professionals
          to solve real business problems while optimizing our collective
          expertise. <br /> <br />
          I value collaborative environments where open-mindedness prevails and
          egos are set aside, avoiding any subjective conflicts. If this
          resonates with you, I would be delighted to discuss how we can
          collaborate effectively. <br /> <br />
          Please don&apos;t hesitate to reach out to me through any of the
          platforms listed below. I&apos;m excited to explore potential
          collaboration opportunities:
        </p>
        <div className="mt-10">
          <ul className="leading-[3.4rem] ">
            {social.map(({ title, link }) =>
              link ? (
                <Link target="_blank" to={link} key={title}>
                  <li className="text-primary font-bold transition-transform duration-300 ease-in-out hover:translate-x-9">
                    {title}
                  </li>
                </Link>
              ) : (
                <li
                  className="text-primary font-bold transition-transform duration-300 ease-in-out hover:translate-x-9"
                  key={title}
                >
                  {title}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
