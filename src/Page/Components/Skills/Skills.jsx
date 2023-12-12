import SectionTitle from "../SectionTitle/SectionTitle";
import { FaHtml5, FaCss3,  FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import daisyImg from "../../../assets/daisyUI.png"
import expressImg from "../../../assets/icons8-express-js-50.png"

const Skills = () => {
  return (
    <div>
      <SectionTitle heading={"Skills"}></SectionTitle>
      <p className="text-center font-bold text-xl">What I Know</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {/* html */}
        <div className="text-center p-6 text-slate-700 font-semibold">
          <div className="flex justify-center"><FaHtml5 className="h-[50px] w-[50px] text-[#400e0e]" /></div>
          <p className="text-slate-700 font-bold">HTML</p>
         <div>
         <progress
            className="progress progress-info w-56"
            value="90"
            max="100"
          ></progress> 90%
         </div>
        </div>
        {/* css */}
        <div className="text-center p-6 text-slate-700 font-semibold">
          <div className="flex justify-center"><FaCss3 className="h-[50px] w-[50px] text-[#400e0e]" /></div>
          <p className="text-slate-700 font-bold">CSS</p>
         <div>
         <progress
            className="progress progress-info w-56"
            value="85"
            max="100"
          ></progress> 70%
         </div>
        </div>
        {/* Tailwind */}
        <div className="text-center p-6 text-slate-700 font-semibold">
          <div className="flex justify-center"><SiTailwindcss className="h-[50px] w-[50px] text-[#400e0e]" /></div>
          <p className="text-slate-700 font-bold">Tailwind</p>
         <div>
         <progress
            className="progress progress-info w-56"
            value="92"
            max="100"
          ></progress> 92%
         </div>
        </div>
        {/* DaisyUI */}
        <div className="text-center p-6 text-slate-700 font-semibold">
          <div className="flex justify-center"><img className="h-[70px] w-[50px] text-[#400e0e]" src={daisyImg} />
         
          </div>
         <div>
         <progress
            className="progress progress-info w-56"
            value="90"
            max="100"
          ></progress> 90%
         </div>
        </div>
        {/* BootStrap */}
        <div className="text-center p-6 text-slate-700 font-semibold">
          <div className="flex justify-center">< FaBootstrap className="h-[50px] w-[50px] text-[#400e0e]" /></div>
          <p className="text-slate-700 font-bold">BootStrap</p>
         <div>
         <progress
            className="progress progress-info w-56"
            value="60"
            max="100"
          ></progress> 60%
         </div>
        </div>
        {/* JavaScript */}
        <div className="text-center p-6 text-slate-700 font-semibold">
          <div className="flex justify-center"><IoLogoJavascript className="h-[50px] w-[50px] text-[#400e0e]" /></div>
          <p className="text-slate-700 font-bold">JavaScript</p>
         <div>
         <progress
            className="progress progress-info w-56"
            value="75"
            max="100"
          ></progress> 75%
         </div>
        </div>
        {/* React.js */}
        <div className="text-center p-6 text-slate-700 font-semibold">
          <div className="flex justify-center"><FaReact className="h-[50px] w-[50px] text-[#400e0e]" /></div>
          <p className="text-slate-700 font-bold">React</p>
         <div>
         <progress
            className="progress progress-info w-56"
            value="88"
            max="100"
          ></progress> 88%
         </div>
        </div>
        {/* Node.js */}
        <div className="text-center p-6 text-slate-700 font-semibold">
          <div className="flex justify-center"><FaNodeJs className="h-[50px] w-[50px] text-[#400e0e]" /></div>
          <p className="text-slate-700 font-bold">Node.js</p>
         <div>
         <progress
            className="progress progress-info w-56"
            value="78"
            max="100"
          ></progress> 78%
         </div>
        </div>
        {/* Express.js */}
        <div className="text-center p-6 text-slate-700 font-semibold">
          <div className="flex justify-center"><img src={expressImg} alt="" /></div>
          <p className="text-slate-700 font-bold">Express.js</p>
         <div>
         <progress
            className="progress progress-info w-56"
            value="60"
            max="100"
          ></progress> 60%
         </div>
        </div>
        {/* MongoDB */}
        <div className="text-center p-6 text-slate-700 font-semibold">
          <div className="flex justify-center"><SiMongodb className="h-[50px] w-[50px] text-[#400e0e]" /></div>
          <p className="text-slate-700 font-bold">MongoDb</p>
         <div>
         <progress
            className="progress progress-info w-56"
            value="71"
            max="100"
          ></progress> 71%
         </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
