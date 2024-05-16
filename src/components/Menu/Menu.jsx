import React from "react";
import img1 from "../../assets/website/menu1.jpg";
import img2 from "../../assets/website/menu2.jpg";
import img3 from "../../assets/website/menu3.jpg";
import img4 from "../../assets/website/menu4.jpg";
import img5 from "../../assets/website/menu5.jpg";
import img6 from "../../assets/website/menu6.jpg";
import Layout from "../Layout/Layout";

const Menu = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor relative z-1" id="menu">
      <h1 className=" font-bold font-cursive capitalize text-center text-4xl mt-24 mb-8 text-gray-800 underline underline-offset-8">
        Our Menu
      </h1>

      <div className=" flex flex-wrap pb-8 gap-14 justify-center">
        <Layout img={img1} title="Espresso" />
        <Layout img={img2} title="Cappuccino" />
        <Layout img={img3} title="Latte" />
        <Layout img={img4} title="Americano" />
        <Layout img={img5} title="Macchiato" />
        <Layout img={img6} title="Doppio" />
      </div>
    </div>
  );
};

export default Menu;
