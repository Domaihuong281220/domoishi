import React from "react";

import { Row, Col } from "antd";


import BannerImg from "../../assets/HomePage/Banner.png"
import Rectangle315 from "../../assets/HomePage/Rectangle315.png";
import Rectangle316 from "../../assets/HomePage/Rectangle316.png"

const Banner = () => {
    return (

        <div className="w-full h-[100vh] lg:h-fit relative">
            <img src={BannerImg} alt="Healthy meal" className="w-full object-contain 2xl:pr-40 pl-56 pt-16 h-[100vh] lg:h-fit lg:pt-0 lg:object-cover" />
            <div className="absolute top-0 h-[100vh] flex flex-col justify-center  2xl:ml-[20rem] lg:ml-60 2xl:pt-20 lg:pt-32">
            <p className="font-nexa_light text-left 2xl:text-[70px] lg:text-[50px] 2xl:leading-[68px] lg:leading-[45px]  ">DON'T <br></br> EAT LESS. <br></br>JUST <br></br>EAT REAL.</p>
            <button className="bg-[#B2CC60] px-6 py-3 rounded-full font-shopee_bold mt-12 ">ORDER CATHERING ONLINE</button>
            <div className="flex mt-16 lg:mt-8 space-x-2">
                <img src={Rectangle315} alt="" className="lg:w-5 lg:h-5"/>
                <img src={Rectangle316} alt="" className="lg:w-5 lg:h-5"/>
                <img src={Rectangle316} alt="" className="lg:w-5 lg:h-5"/>
            </div>
            </div>
        </div>

    );
}
export default Banner;