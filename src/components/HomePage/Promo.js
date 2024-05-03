/** @format */

import React from "react";

import { Row, Col } from "antd";

import PromoBG from "../../assets/HomePage/promo2.png"
import Promocontent from "../../assets/HomePage/Promocontent.png"


const Promo = () => {
    return (
        <div className="w-full h-fit relative ">
          <img src={PromoBG} alt="Promo" className="object-cover" />
        <img src={Promocontent} alt="Promo" className="absolute top-1/2 2xl:left-72 ph:max-md:left-16 ph:max-md:w-56 pv:max-ph:w-[12rem] pv:max-ph:left-12  xl:left-52 lg:left-32 transform  -translate-y-1/2 2xl:w-[68rem] xl:w-[40rem] lg:w-[35rem] laptop:w-[45rem]" />
          <div className="2xl:w-80 lg:w-64 absolute pv:max-md:pr-20 pv:max-md:h-fit pv:max-md:w-full top-1/2 2xl:right-72 xl:right-56 lg:right-28 transform  -translate-y-1/2  h-fit flex flex-col pv:max-md:items-end items-center justify-center">
            <p className="font-jonitha text-white 2xl:text-[60px] lg:text-5xl pv:max-md:text-[15px]">TRY OUR <br></br>YUM DRUM <br></br>TRIO MEAL!</p>
            <p className="font-nexa_bold text-white 2xl:text-[20px] lg:text-lg pv:max-md:w-[5rem] pv:max-md:text-[5px]">3 drums, fries, and a Korean donut are the perfect combo.</p>
            <button className="w-fit bg-black text-[20px] px-8 py-4 rounded-full font-shopee_bold mt-12 lg:mt-4 text-white pv:max-md:m-1 pv:max-md:p-2 pv:max-md:text-[5px] ">DISCOVER NOW</button>
          </div>
        </div>
    );
}
export default Promo;
