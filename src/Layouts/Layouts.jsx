import React, { useState } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { Outlet } from "react-router-dom";

function Layouts() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="w-full h-auto bg-slate-900 lg:flex items-start justify-between">
      <div className="w-[23%] h-screen bg-slate-800 lg:block hidden z-50">
        <div className="fixed h-screen w-[23%] z-50">
          <Sidebar />
        </div>
      </div>
      <div className="lg:hidden block z-50">
        <div className="flex items-center justify-between bg-slate-800 w-full mb-3 p-5 rounded">
          <h4 className="text-[18px] font-semibold uppercase text-white">
            DEV GULJER
          </h4>
          <span
            onClick={() => setMenu(!menu)}
            className="text-[24px] text-white"
          >
            {menu ? <IoClose className="text-red-600" /> : <IoMenuOutline />}
          </span>
        </div>
        {menu && (
          <div className="fixed h-screen w-[300px] left-0 z-50 top-[66px]">
            <Sidebar />
          </div>
        )}
      </div>
      <div className="lg:w-[76%] w-full z-40 bg-slate-800/40 rounded p-10">
        <Outlet />
      </div>
    </div>
  );
}

export default Layouts;
