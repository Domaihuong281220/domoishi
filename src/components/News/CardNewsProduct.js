/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { path } from "../../utils/Constant";
const CardNewsProduct = ({ title, img, desc, note, code }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("../" + path.NEWS_DETAIL + `/${code}`);
  };

  return (
    <div className="pt-[72px] flex items-center gap-[70px] px-[30px] pv:max-md:grid pv:max-md:grid-cols-1  pv:max-md:pt-10 pv:max-md:gap-0 md:max-xl:grid-cols-2 md:max-xl:grid">
      <div className="flex flex-col gap-[30px] pv:max-ph:gap-4 md:max-xl:gap-4 ph:max-md:gap-2">
        <div className="flex  flex-col  gap-[20px]  pv:max-md:gap-4 ">
          <div className="h-[20px] w-[20px] bg-black rotate-45 pv:max-md:w-[10px] pv:max-md:h-[10px]"></div>
          <p className="font-nexa_bold text-[49px] text-start pv:max-md:text-[20px] md:max-xl:text-[24px] ph:max-md:text-[24px] ">
            {title}
          </p>
        </div>
        <div className="flex justify-start">
          <button
            className="text-start text-[#cb1313] font-nexa_bold text-[40px] pv:max-md:text-[16px] md:max-xl:text-[20px] ph:max-md:text-[20px]  hover:underline cursor-pointer "
            onClick={() => {
              handleClick();
            }}
          >
            <p className=" ">Detail</p>
          </button>
        </div>

        <div className="">
          <p className="text-start  font-nexa_light text-[30px] pv:max-md:text-[14px] md:max-xl:text-[16px] ">
            {desc}
          </p>
          <p className="text-start  font-nexa_light text-[30px] pv:max-md:text-[14px] md:max-xl:text-[16px] ">
            {note}
          </p>
        </div>
      </div>
      <div className="">
        <img className="" src={img}></img>
      </div>
      <div className="w-full h-[1px] bg-black mt-20 md:hidden"></div>
    </div>
  );
};

export default CardNewsProduct;
