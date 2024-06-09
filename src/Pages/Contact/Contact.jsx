import React, { useEffect } from "react";
import {
  FaUser,
  FaRegEnvelope,
  FaPhoneAlt,
  FaBook,
  FaPen,
} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import Design from "../../Components/Design/Design";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="p-5 text-white relative top-0 left-0 z-40">
        <div data-aos="zoom-in" className="pb-5">
          <h2 className="text-[24px]">Contact</h2>
        </div>
        <div>
          <div
            data-aos="fade-up-right"
            className="lg:flex items-start justify-between gap-10"
          >
            <div className="lg:w-2/5 w-full bg-bg-primary p-10 rounded-md lg:mb-0 mb-5">
              <div className="text-center">
                <h4 className="text-[20px] text-primary pb-3">Call</h4>
                <p className="text-[14px]">+880 1792790977</p>
                <p className="text-[14px]">+880 1755313279</p>
              </div>
              <hr className="border border-primary/25 my-10" />
              <div className="text-center">
                <h4 className="text-[20px] text-primary pb-3">Mail</h4>
                <p className="text-[14px]">guljer.net@gmail.com</p>
                <p className="text-[14px]">guljer909@gmail.com</p>
              </div>
              <hr className="border border-primary/25 my-10" />
              <div className="text-center">
                <h4 className="text-[20px] text-primary pb-3">Location</h4>
                <p className="text-[14px]">
                  7232 Broadway Suite 308, Jackson Heights, 11372, NY, United
                  States
                </p>
              </div>
            </div>
            <div className="lg:w-3/5 w-full bg-bg-primary p-10 rounded-md">
              <form action="">
                <div className="flex items-center justify-between mb-3">
                  <span className="w-[10%] bg-gray-600 text-primary py-[11px] rounded-s-md flex items-center justify-center text-[18px]">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-[90%] px-3 py-2 outline-0"
                  />
                </div>
                <div className="lg:flex items-center justify-between gap-5 lg:mb-3 mb-0">
                  <div className="lg:w-2/4 w-full lg:mb-0 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="lg:w-[22%] w-[10%] bg-gray-600 text-primary py-[11px] rounded-s-md flex items-center justify-center text-[18px]">
                        <FaRegEnvelope />
                      </span>
                      <input
                        type="email"
                        placeholder="email@gmail.com"
                        className="lg:w-[78%] w-[90%] px-3 py-2 outline-0"
                      />
                    </div>
                  </div>
                  <div className="lg:w-2/4 w-full lg:mb-0 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="lg:w-[22%] w-[10%] bg-gray-600 text-primary py-[11px] rounded-s-md flex items-center justify-center text-[18px]">
                        <FaPhoneAlt />
                      </span>
                      <input
                        type="text"
                        placeholder="Ex: 0179000000"
                        className="lg:w-[78%] w-[90%] px-3 py-2 outline-0"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-[10%] bg-gray-600 text-primary py-[11px] rounded-s-md flex items-center justify-center text-[18px]">
                    <FaBook />
                  </span>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-[90%] px-3 py-2 outline-0"
                  />
                </div>
                <div className="flex items-start justify-between mb-3">
                  <span className="w-[10%] h-[240px] bg-gray-600 text-primary py-[11px] rounded-s-md flex items-start justify-center text-[18px]">
                    <FaPen />
                  </span>
                  <textarea
                    name=""
                    id=""
                    placeholder="Message"
                    className="p-3 w-[90%] h-[240px] resize-none outline-0"
                  ></textarea>
                </div>
                <div>
                  <input
                    type="submit"
                    value="Submit"
                    className="px-5 py-2 text-white bg-gray-600 rounded cursor-pointer"
                  />
                </div>
              </form>
            </div>
          </div>
          <div data-aos="fade-up-right" className="my-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49930012046!2d90.25487162624671!3d23.781067240173687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1706190963431!5m2!1sen!2sbd"
              style={{
                border: 0,
                width: "100%",
                height: "450px",
                borderRadius: "8px",
              }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="absolute lg:block hidden left-0 lg:w-[76%] lg:top-0 h-screen z-10">
        <Design />
      </div>
    </div>
  );
}

export default Contact;
