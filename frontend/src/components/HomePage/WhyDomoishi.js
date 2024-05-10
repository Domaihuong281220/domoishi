/** @format */

import React from "react";

import { Row, Col } from "antd";
import WhyDomoishi1 from "../../assets/HomePage/WhyDomoishi1.png";
import WhyDomoishi2 from "../../assets/HomePage/WhyDomoishi2.png";
import WhyDomoishi3 from "../../assets/HomePage/WhyDomoishi3.png";
import WhyDomoishi4 from "../../assets/HomePage/WhyDomoishi4.png";
import WhyDomoishi5 from "../../assets/HomePage/WhyDomoishi5.png";
import WhyPart1 from "./WhyPart1";
import { path } from "../../utils/Constant";
import { useNavigate } from "react-router-dom";
const WhyDomoishi = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-fit  pv:max-md:px-[8%] flex flex-col items-center justify-center">
      <p className="font-chalkboard px-[12%] text-[4.4vw] leading-[70px] ">
        What why when <br></br> domoishi ?{" "}
      </p>
      <p className="font-nexa_light font-black px-[13%] text-[1.3vw] pv:max-md:m-4 leading-[3vw] w-full uppercase mt-12">
      We handpick authentic ingredients from diverse regions in Asia, infusing our recipes with a delightful fusion of popular Korean, Japanese, and other Asian dishes such as Poke, 
      Soy Garlic Crunchy Chicken, Tonkotsu Ramen, Bubble Tea, and a plethora of enticing fusion creations. This ensures that each culinary encounter with us is a truly exceptional experience.
      </p>
      
      <WhyPart1 />
      <button
        className=" w-fit bg-black text-[1.3vw] py-[1.1vw] px-[4vw] my-12 rounded-full font-shopee_bold text-white"
        onClick={() => {
          navigate("../" + path.ABOUTUS);
        }}
      >
        LEARN MORE
      </button>
    </div>
  );
};
export default WhyDomoishi;
