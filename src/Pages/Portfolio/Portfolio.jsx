import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Design from "../../Components/Design/Design";

function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState(null);
  const toggler = event => {
    setCategory(event.target.value);
  };
  useEffect(() => {
    fetch("projects.json")
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, []);
  const mainFunction = (items, selected) => {
    let mainData = items;
    if (selected) {
      mainData = mainData.filter(
        item => item?.category.toLowerCase() === selected.toLowerCase()
      );
    }
    return mainData.map(item => (
      <div key={item?.id}>
        <img src={item?.image} alt="" />
        <h4 className="text-[16px] pt-2">{item?.title}</h4>
        <div className="flex items-center gap-2">
          <Link
            className="bg-gray-600 p-1 rounded text-[12px]"
            to={item?.live_link}
            target="_blank"
          >
            Live Link
          </Link>
          <Link className="bg-gray-600 p-1 rounded text-[12px]">
            Source Code
          </Link>
        </div>
      </div>
    ));
  };
  const result = mainFunction(items, category);
  return (
    <div>
      <div data-aos="fade-up" className="p-5 relative top-0 left-0 z-40 text-white">
        <div className="pb-5">
          <h2 className="text-[24px]">Portfolio</h2>
        </div>
        <div>
          <ul className="flex items-center lg:space-x-7 space-x-5 mb-3">
            <button
              className="text-[16px] cursor-pointer"
              onClick={toggler}
              value=""
            >
              All
            </button>
            <button
              className="text-[16px] cursor-pointer"
              onClick={toggler}
              value="Web design"
            >
              Web Design
            </button>
            <button
              className="text-[16px] cursor-pointer"
              onClick={toggler}
              value="Web development"
            >
              Web DevelopMent
            </button>
          </ul>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {result}
          </div>
        </div>
      </div>
      <div className="absolute lg:block hidden left-0 lg:w-[76%] lg:top-0 h-screen z-10">
        <Design />
      </div>
    </div>
  );
}

export default Portfolio;
