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
    <div className="pt-[72px] flex items-center gap-[70px] px-[30px]">
      <div className="flex flex-col gap-[30px]">
        <div className="flex  flex-col  gap-[20px] ">
          <div className="h-[20px] w-[20px] bg-black rotate-45"></div>
          <p className="font-nexa_bold text-[49px] text-start ">{title}</p>
        </div>
        <div className="flex justify-start">
          <button
            className="text-start text-[#cb1313] font-nexa_bold text-[40px] hover:underline cursor-pointer "
            onClick={() => {
              handleClick();
            }}
          >
            <p className=" ">Detail</p>
          </button>
        </div>

        <div className="">
          <p className="text-start  font-nexa_light text-[30px]">{desc}</p>
          <p className="text-start  font-nexa_light text-[30px]">{note}</p>
        </div>
      </div>
      <div className="">
        <img className="" src={img}></img>
      </div>
    </div>
  );
};

export default CardNewsProduct;
