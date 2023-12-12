import SectionTitle from "../SectionTitle/SectionTitle";
import profileImg from "../../../assets/logo-Portfolio.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <SectionTitle heading={"About me"}></SectionTitle>
      <div className="flex justify-between items-center gap-5">
        <div>
          <img
            className="border-4 border-[#400e0e]  "
            src={profileImg}
            alt=""
          />
        </div>
        <div className="text-slate-600 font-bold ">
          <h2 className="p-2">
            I am <span className="text-[#400e0e]">Tansim</span> Rinky
          </h2>
          <p className="p-2">
            I am a dedicated web developer with a vision to contribute to the
            tech eco-system by developing <br /> unique projects. My expertise
            lies in the MERN Stack, which means I'm proficient in MongoDB,
            Express.js, React.js, and Node.js.
          </p>
          <div className="flex gap-2 p-2">
            <a
              href="https://github.com/Tansimrinky"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-[50px] w-[50px] text-[#400e0e]" />
            </a>
            <a href="https://www.linkedin.com/in/tansim-rinky-ba79a5236/"  target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin className="h-[50px] w-[50px] text-[#400e0e]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
