import React, { useState } from "react";
import Logo from "../../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  ,
  {
    id: 3,
    name: "Menu",
    link: "/#menu",
  },
  {
    id: 4,
    name: "About",
    link: "/#about",
  },
];
const Navbar = () => {
  const [ham, setHam] = useState(false);

  const handleChange = () => {
    setHam(!ham);
  };

  const closeMenu = () => {
    setHam(false);
  };
  return (
    <>
      <div className="bg-gradient-to-b from-primary to-secondary/90 shadow-lg text-white fixed top-0 w-full z-[8]">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive">
                <img src={Logo} alt="Logo" className="w-14" />
                <h2 className="text-[20px] md:text-[24px]">Caffeine Corner</h2>
              </a>
            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex justify-between items-center gap-4">
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block text-xl py-4 px-4 text-white/70 hover:text-light hover:underline underline-offset-4 hover:scale-105 duration-200">
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="hidden bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full md:flex items-center gap-3">
                Order
                <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>


              <div className="md:hidden flex items-center">
            {ham ? (
              <AiOutlineClose size={25} onClick={handleChange} className="cursor-pointer" />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} className="cursor-pointer"/>
            )}
          </div>
            {ham &&< div
                className={` ${
                  ham ? "translate-x-0" : "-translate-x-full"
                } lg:hidden flex flex-col absolute bg-secondary rounded-lg text-light right-0 top-16 text-xl text-left pt-8 pb-4 px-8 gap-8 w-[150px] h-fit transition-transform duration-300`}>
                <a href="#" onClick={closeMenu}>
                  Home
                </a>
                <a href="#services" onClick={closeMenu}>
                  Services
                </a>
                <a href="#menu" onClick={closeMenu}>
                  Menu
                </a>
                <a href="#about" onClick={closeMenu}>
                  About
                </a>
              </div>} 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
