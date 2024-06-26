/** @format */

import React from "react";

import WhyPart1 from "./WhyPart1";
import { path } from "../../utils/Constant";
import { useNavigate } from "react-router-dom";
const WhyDomoishi = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-fit  pv:max-md:px-[8%] flex flex-col items-center justify-center">
      <p className="font-chalkboard px-[12%] text-[4.4vw] leading-[4vw] ">
        What why when <br></br> domoishi ?{" "}
      </p>
      <p className="font-nexa font-black px-[13%] text-[1.15vw] pv:max-md:m-4 leading-[3vw] w-full uppercase mt-12">
      We handpick authentic ingredients from diverse regions in Asia, infusing our recipes with a delightful fusion of popular Korean, Japanese, and other Asian dishes such as Poke, 
      Soy Garlic Crunchy Chicken, Tonkotsu Ramen, Bubble Tea, and a plethora of enticing fusion creations. This ensures that each culinary encounter with us is a truly exceptional experience.
      </p>
      
      <WhyPart1 />
      <button
        className=" w-fit bg-black text-[1.3vw] py-[1.1vw] px-[4vw] my-[3vw] rounded-full font-shopee_bold text-white"
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
