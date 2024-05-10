/** @format */

import React from "react";

import { Row, Col } from "antd";

import PromoBG from "../../assets/HomePage/promo4.png"
// import Promocontent from "../../assets/HomePage/Promocontent.png"


const Promo2 = () => {
    return (
        <div className="w-full h-fit relative ">
          <img src={PromoBG} alt="Promo" className="object-cover" />
        {/* <img src={Promocontent} alt="Promo" className="absolute top-1/2 2xl:left-72 ph:max-md:left-16 ph:max-md:w-56 pv:max-ph:w-[12rem] pv:max-ph:left-12  xl:left-52 lg:left-32 transform  -translate-y-1/2 2xl:w-[68rem] xl:w-[40rem] lg:w-[35rem] laptop:w-[45rem]" /> */}
          <div className=" w-[20.5vw]  absolute  top-1/2 right-[15vw] transform  -translate-y-1/2  h-fit flex flex-col items-start justify-center space-y-[3vw]">
            <p className="font-jonitha text-start text-white leading-[3vw] text-[2.69vw]  uppercase">Ramen: where every noodle tells a story.</p>
            {/* <p className="font-nexa_bold text-white 2xl:text-[20px] lg:text-lg pv:max-md:w-[5rem] pv:max-md:text-[5px]">3 drums, fries, and a Korean donut are the perfect combo.</p> */}
            <button className="w-fit bg-black text-[1.2vw] py-[1.1vw] px-[3.3vw] rounded-full font-shopee_bold mt-12 lg:mt-4 text-white  ">DISCOVER NOW</button>
          </div>
        </div>
    );
}
export default Promo2;
