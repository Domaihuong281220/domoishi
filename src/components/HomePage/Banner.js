import React from "react";

import { Row, Col } from "antd";


import BannerImg from "../../assets/HomePage/Banner.png"
import Rectangle315 from "../../assets/HomePage/Rectangle315.png";
import Rectangle316 from "../../assets/HomePage/Rectangle316.png"

const Banner = () => {
    return (

        <div className="w-full h-[100vh] relative">
            <img src={BannerImg} alt="Healthy meal" className="w-full object-contain pr-40 pl-56 pt-16 h-[100vh]" />
            <div className="absolute top-0 h-[100vh] flex flex-col justify-center  ml-[20rem] pt-20">
            <p className="font-nexa_light text-left text-[70px] leading-[68px]  ">DON'T <br></br> EAT LESS. <br></br>JUST <br></br>EAT REAL.</p>
            <button className="bg-[#B2CC60] px-6 py-3 rounded-full font-shopee_bold mt-12 ">ORDER CATHERING ONLINE</button>
            <div className="flex mt-16 space-x-2">
                <img src={Rectangle315} alt=""/>
                <img src={Rectangle316} alt=""/>
                <img src={Rectangle316} alt=""/>
            </div>
            </div>
        </div>

    );
}
export default Banner;