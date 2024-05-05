/** @format */

import React from "react";

const CardCareer = ({ title, desc }) => {
  return (
    <div className="py-10 flex lg:max-2xl:py-52 ">
      <div className="">
        <div className="flex justify-center py-4">
          <div className="h-[14px] w-[14px] rotate-45 bg-yellow-300"></div>
        </div>
        <div className="w-[80%] lg:max-xl:w-[95%] mx-auto border-[1px] border-white rounded-[30px] ">
          <p className="text-[#e3c756] font-nexa_bold text-[24px] lg:max-xl:text-[20px] xl:max-2xl:text-[20px] uppercase ">
            {title}
          </p>
        </div>
        <div className="w-full h-[1px] bg-white mt-4"></div>

        <div className="w-[80%] mx-auto pt-4">
          <p className="text-[25px] font-nexa_bold text-left text-white lg:max-xl:text-[20px] xl:max-2xl:text-[20px]">
            {desc}
          </p>
        </div>
      </div>
      <div className="h-full w-[1px] bg-white"></div>
    </div>
  );
};

export default CardCareer;
