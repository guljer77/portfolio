import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { MdOutlineCloudDownload } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import Design from "../../Components/Design/Design";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div
        data-aos="fade-down"
        className="flex items-center relative top-0 left-0 z-40 justify-start h-screen w-full lg:pl-5"
      >
        <div>
          <h6 className="uppercase text-white pb-3 lg:text-[16px] text-[15px] font-medium tracking-widest">
            Welcome To My World
          </h6>
          <span className="block text-rose-600 text-[16px] font-semibold">
            Hi, I'm
          </span>
          <h4 className=" h-full py-3 text-white leading-tight lg:text-[42px] text-[28px] font-bold">
            Md. Guljer Hossain
          </h4>
          <h6 className="text-white text-[16px] font-medium">
            A {""}
            <span>
              <Typewriter
                words={["FrontEnd Developer", "Jr. MERN Stack Developer"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h6>
          <p className="text-[14px] font-light py-3 text-white lg:w-2/4 w-full">
            Architecting Extraordinary Web Experiences: Md Guljer Hossain -
            Inspiring MERN Stack Developer with a Proven Track Record of
            Creating Immersive User Journeys and Pushing the Boundaries of
            Digital Innovation
          </p>
          <div className="flex items-center lg:space-x-5 my-4">
            <div>
              <a
                href="GuljerCV.pdf"
                download
                className="flex lg:text-[15px] text-[14px] items-center lg:gap-3 gap-1 lg:px-5 px-3 py-2 rounded-md bg-rose-600 text-white"
              >
                Download CV <MdOutlineCloudDownload />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute lg:block hidden left-0 lg:w-[76%] lg:top-0 h-screen z-10">
        <Design />
      </div>
    </div>
  );
}

export default Home;
