
import projectOne from "../../../assets/FoodFirst _ Home.png";
import SectionTitle from "../SectionTitle/SectionTitle";

const Projects = () => {
  return (
    <div className="text-[#400e0e]">
        <SectionTitle heading={"Projects"}></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center ml-9">
      <div
        className="hero h-[500px] bg-cover"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/CtVrw79/Screenshot-18.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold ">FoodFirst </h1>
            <p className="mb-5 font-bold">
             Food donation website which have some complex feature.
            </p>
            <a href="https://donate-food-43ef0.web.app/"target="_blank"
              rel="noopener noreferrer"><button className="btn bg-[#400e0e] border-none text-white">Visit Site</button></a>
          </div>
        </div>
      </div>
      <div
        className="hero  h-[500px] "
        style={{
          backgroundImage:
            "url(https://i.ibb.co/YD8Ynzs/Screenshot-16.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">SkillBoost Hub</h1>
            <p className="mb-5">
             This is an E-Learning website.
            </p>
            <a href="https://skill-boost-hub.web.app/" target="_blank"
              rel="noopener noreferrer"><button className="btn bg-[#400e0e] border-none text-white">Visit Site</button></a>
          </div>
        </div>
      </div>
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/NSb2KcL/Screenshot-20.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">ETech-shop</h1>
            <p className="mb-5">
             Online Phone and others tech product selling platform
            </p>
            <a href="https://e-tech-shop.web.app/" target="_blank"
              rel="noopener noreferrer"><button className="btn bg-[#400e0e] border-none text-white">Visit Site</button></a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
