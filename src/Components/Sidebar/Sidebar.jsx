import React from "react";
import Image from "../../assets/guljer.jpg";
import { Link, NavLink } from "react-router-dom";
import {
  FaUserGraduate,
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { MdStorage } from "react-icons/md";

function Sidebar() {
  return (
    <div className="text-white z-50 h-screen bg-slate-800 p-[30px] rounded">
      <div className="text-center">
        <img
          src={Image}
          alt=""
          className="rounded h-[160px] w-[140px] mx-auto"
        />
        <h4 className="text-[18px] font-semibold mt-2">Md. Guljer Hossain</h4>
        <div className="flex items-center justify-center space-x-3 pt-2">
          <Link to="https://github.com/guljer77" target="_blank" className="text-[18px] cursor-pointer shadow-lg w-[30px] h-[30px] bg-slate-700 rounded-full flex items-center justify-center">
            <FaGithub className="block" />
          </Link>
          <Link to="https://www.linkedin.com/in/guljer-hossain77ab/" target="_blank" className="text-[18px] cursor-pointer shadow-lg w-[30px] h-[30px] bg-slate-700 rounded-full flex items-center justify-center">
            <FaLinkedinIn className="block" />
          </Link>
          <Link to="https://www.facebook.com/guljer.hossain.311/" target="_blank" className="text-[18px] cursor-pointer shadow-lg w-[30px] h-[30px] bg-slate-700 rounded-full flex items-center justify-center">
            <FaFacebook className="block" />
          </Link>
        </div>
      </div>
      <hr className="border border-gray-600 my-5" />
      <div>
        <ul>
          <li className="text-[16px] font-light bg-gray-600 mb-2 p-1 rounded-sm">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              <span className="flex items-center gap-1">
                <p className="w-[30px] rounded-sm h-[30px] bg-gray-600 flex items-center justify-center">
                  <IoHome className="text-[20px] text-teal-500" />
                </p>
                Home
              </span>
            </NavLink>
          </li>
          <li className="text-[16px] font-light bg-gray-600 mb-2 p-1 rounded-sm">
            <NavLink
              to="/resume"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              <span className="flex items-center gap-1">
                <p className="w-[30px] rounded-sm h-[30px] bg-gray-600 flex items-center justify-center">
                  <FaUserGraduate className="text-[20px] text-teal-500" />
                </p>
                Resume
              </span>
            </NavLink>
          </li>
          <li className="text-[16px] font-light bg-gray-600 mb-2 p-1 rounded-sm">
            <NavLink
              to="/service"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              <span className="flex items-center gap-1">
                <p className="w-[30px] rounded-sm h-[30px] bg-gray-600 flex items-center justify-center">
                  <MdStorage className="text-[20px] text-teal-500" />
                </p>
                Service
              </span>
            </NavLink>
          </li>
          <li className="text-[16px] font-light bg-gray-600 mb-2 p-1 rounded-sm">
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              <span className="flex items-center gap-1">
                <p className="w-[30px] rounded-sm h-[30px] bg-gray-600 flex items-center justify-center">
                  <MdDashboard className="text-[20px] text-teal-500" />
                </p>
                Portfolio
              </span>
            </NavLink>
          </li>
          <li className="text-[16px] font-light bg-gray-600 mb-2 p-1 rounded-sm">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              <span className="flex items-center gap-1">
                <p className="w-[30px] rounded-sm h-[30px] bg-gray-600 flex items-center justify-center">
                  <FaEnvelope className="text-[20px] text-teal-500" />
                </p>
                Contact
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
