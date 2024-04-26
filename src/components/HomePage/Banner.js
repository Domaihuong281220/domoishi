import React from "react";

import { Row, Col } from "antd";


import BannerImg from "../../assets/HomePage/Banner.png"
import Rectangle315 from "../../assets/HomePage/Rectangle315.png";
import Rectangle316 from "../../assets/HomePage/Rectangle316.png"

const Banner = () => {
    return (

        <div className="w-full h-[100vh] ph:max-md:h-[15rem] pv:max-ph:h-[13rem] pv:max-md:px-[12%] lg:h-fit relative">
            <img src={BannerImg} alt="Healthy meal" className=" img_healthy w-full object-contain pv:max-md:h-fit pv:max-md:pl-0 pv:max-md:pt-0 pv:max-md:w-[20rem] 2xl:pr-40 pl-56 pt-16 h-[100vh] lg:h-fit lg:pt-0 lg:object-cover " />
            <div className="absolute z-40 top-0 h-[100vh] md:h-[25rem] lg:ml-[12%] pv:max-md:h-fit flex flex-col justify-center  2xl:ml-[20rem] xl:ml-60 2xl:pt-20 lg:pt-32 pv:max-md:mt-12">
                <p className="font-nexa_light text-left 2xl:text-[70px] lg:text-[50px] 2xl:leading-[68px] lg:leading-[45px] pv:max-md:leading-[16px]  ">DON'T <br></br> EAT LESS. <br></br>JUST <br></br>EAT REAL.</p>
                <button className="bg-[#B2CC60] pv:max-md:text-[7px] pv:max-md:p-[10px] px-6 py-3 rounded-full font-shopee_bold mt-12 pv:max-md:mt-4 ">ORDER CATHERING ONLINE</button>
                <div className="flex mt-16 lg:mt-8 pv:max-md:mt-2 space-x-2">
                    <img src={Rectangle315} alt="" className="lg:w-5 lg:h-5 pv:max-md:w-3 pv:max-md:h-3" />
                    <img src={Rectangle316} alt="" className="lg:w-5 lg:h-5 pv:max-md:w-3 pv:max-md:h-3" />
                    <img src={Rectangle316} alt="" className="lg:w-5 lg:h-5 pv:max-md:w-3 pv:max-md:h-3" />
                </div>
            </div>
        </div>

    );
}
export default Banner;