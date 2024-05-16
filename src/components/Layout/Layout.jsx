import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Layout = (props) => {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 bg-white p-3 rounded-lg duration-high group hover:bg-primary shadow-2xl overflow-hidden" data-aos="fade-up" data-aos-delay="500">
      <div>
        <img className="rounded-xl group-hover:scale-[1.2] group-hover:rotate-6 duration-300" src={props.img} alt="img1" />
      </div>
      <div className=" p-2 mt-5">
        <div className=" flex flex-row justify-between">
          <h3 className=" font-semibold text-xl group-hover:text-light">{props.title}</h3>
          <h3 className=" font-semibold text-xl">{props.value}</h3>
        </div>
        <div className=" flex flex-row justify-between mt-3">
          <div className=" flex gap-2">
            <button className="px-3 text-sm border-2 text-light border-brandDark bg-brandDark hover:text-brandDark hover:bg-light transition-all rounded-lg">
              Hot
            </button>
            <button className="px-3 text-sm border-2 text-light border-brandDark bg-brandDark hover:text-brandDark hover:bg-light transition-all rounded-lg">
              Cold
            </button>
          </div>
          <span className=" flex items-center text-light bg-brandDark hover:text-brandDark hover:bg-light px-3 py-2 rounded-full cursor-pointer">
            <FaShoppingCart size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Layout;
