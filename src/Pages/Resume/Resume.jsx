import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  FaGraduationCap,
  FaUserCheck,
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaHome,
} from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import Design from "../../Components/Design/Design";

function Resume() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div data-aos="fade-up" className="p-5 h-auto relative top-0 left-0 z-40 text-white">
        <div className="pb-5">
          <h2 className="text-[24px]">Resume</h2>
        </div>
        <div className="lg:pl-5">
          <div className="">
            <h4 className="lg:text-[20px] text-[18px]">My Awesome Journey</h4>
            <h6 className="text-[16px] text-primary">
              <FaGraduationCap size={24} className="inline-block" /> Education
            </h6>
            <hr />
            <div className="pt-2">
              <h4 className="text-[15px] font-medium">
                Dhaka International University
              </h4>
              <h6 className="text-[14px] font-light">Bachelor of Science</h6>
              <p className="text-[14px] font-light pt-2 text-primary">
                <CiCalendarDate className="inline-block" /> 2022 - Running 6th
                semester
              </p>
            </div>
            <div className="pt-5">
              <h4 className="text-[15px] font-medium">
                Dinajpur Polytechnic Institute
              </h4>
              <h6 className="text-[14px] font-light">Diploma In Engineering</h6>
              <p className="text-[14px] font-light pt-2 text-primary">
                <CiCalendarDate className="inline-block" /> 2016 - 2020
              </p>
            </div>
          </div>
          <div className="pt-5">
            <h4 className="lg:text-[20px] text-[18px]">Tools I Use Everyday</h4>
            <h6 className="text-[16px]">Skills</h6>
            <hr />
            <div className="py-5">
              <h6 className="text-[14px] pb-2">
                <span className="font-bold">Expertise:</span> HTML, CSS,
                Tailwind CSS, Bootstrap, Javascript, React Js, Firebase, Rest
                API
              </h6>
              <h6 className="text-[14px] pb-2">
                <span className="font-bold">Comfortable:</span> ES6, ExpressJs,
                MongoDb
              </h6>
              <h6 className="text-[14px] pb-2">
                <span className="font-bold">Familiar:</span> Nodejs, JWT,
                Stripe, Redux Toolkit,
              </h6>
            </div>
            <h6 className="text-[16px]">Tools</h6>
            <hr />
            <div className="pt-2">
              <h6 className="text-[14px]">
                Visual Studio, Notepad++, Figma, Git, PostMan, Dev Tools,
                npm/yarn, Netlify, Firebase
              </h6>
            </div>
          </div>
          <div className="pt-10">
            <h4 className="lg:text-[20px] text-[18px]">About My Shelf</h4>
            <div className="lg:flex items-center justify-between gap-5 py-5">
              <div className="lg:w-[50%] w-full">
                <p className="flex items-center gap-3 text-[14px] font-light pb-2">
                  <FaUserCheck />
                  Md. Guljer Hossain
                </p>
                <p className="flex items-center gap-3 text-[14px] font-light pb-2">
                  <FaEnvelopeOpen />
                  guljer.net@gmail.com
                </p>
                <p className="flex items-center gap-3 text-[14px] font-light pb-2">
                  <FaGraduationCap />
                  BSc in CSE
                </p>
              </div>
              <div className="lg:w-[50%] w-full">
                <p className="flex items-center gap-3 text-[14px] font-light pb-2">
                  <FaPhoneAlt />
                  +880 1792790977
                </p>
                <p className="flex items-center gap-3 text-[14px] font-light pb-2">
                  <CiCalendarDate />
                  Born on 15 June, 1998
                </p>
                <p className="flex items-center gap-3 text-[14px] font-light pb-2">
                  <FaHome />
                  Dhaka
                </p>
              </div>
            </div>
            <h6 className="text-[16px] font-semibold">Language</h6>
            <hr />
            <div className="pt-5">
              <h6 className="text-[14px] font-light">Bangla, English, Hindi</h6>
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

export default Resume;
