import React from "react";

import { Row, Col } from "antd";

import PromoBG from "../../assets/HomePage/Promo.png"
import Promocontent from "../../assets/HomePage/Promocontent.png"


const Promo = () => {
    return (
        <div className="w-full h-fit relative ">
          <img src={PromoBG} alt="Promo" className="object-cover" />
          <img src={Promocontent} alt="Promo" className="absolute top-1/2 left-72 transform  -translate-y-1/2 2xl:pr-[55rem]" />
          <div className="2xl:w-80 absolute top-1/2 right-72 transform  -translate-y-1/2  h-[100vh] flex flex-col items-center justify-center">
            <p className="font-jonitha text-white text-[60px]">TRY OUR <br></br>YUM DRUM <br></br>TRIO MEAL!</p>
            <p className="font-nexa_bold text-white text-[20px]">3 drums, fries, and a Korean donut are the perfect combo.</p>
            <button className="w-fit bg-black text-[20px] px-8 py-4 rounded-full font-shopee_bold mt-12 text-white ">DISCOVER NOW</button>
          </div>
        </div>
    );
}
export default Promo;