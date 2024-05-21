import React from "react";

import { Row, Col } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import BannerBG from "../../assets/HomePage/BannerBG.png"


const Banner = () => {
    const navigate = useNavigate();
    return (

        <div className="w-full h-[100vh]  md:max-lgmax:h-[50vw] pv:max-md:h-[45vw]  pv:max-lg:pl-[10%] pv:max-md:pr-0 relative">
            {/* <img src={BannerImg} alt="Healthy meal" className=" img_healthy w-full object-contain pv:max-md:h-fit pv:max-md:pl-0 pv:max-lg:pt-0 pv:max-md:w-[25rem] 2xl:pr-20 pl-[5vw] pt-16 h-[100vh] lg:h-fit lg:pt-0 lg:object-cover " /> */}
            <img src={BannerBG} alt=""/>
            <div className="absolute z-40 top-0 md:h-[38vw] mdmax:h-[25vw] lg:ml-[13vw] pv:max-md:h-fit flex flex-col justify-center  ml-[4vw]  pt-[25vw] pv:max-lg:pt-[8vw]">
                <p className="font-nexa_light text-left text-[5vw] leading-[5vw] md:max-mdmax:text-[6vw] md:max-mdmax:leading-[5vw]  pv:max-md:leading-[5vw] pv:max-md:text-[5vw]  ">DON'T <br></br> EAT LESS. <br></br>JUST <br></br>EAT REAL.</p>
                <button className="bg-[#B2CC60] pv:max-md:text-[7px] pv:max-md:p-[8px] px-6 py-3 rounded-full font-shopee_bold mt-[2vw]" onClick={()=>{navigate('/locations')}}>ORDER ONLINE</button>

            </div>
        </div>

    );
}
export default Banner;