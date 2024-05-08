/** @format */

import React from "react";
import imgBanner_event from "../../assets/News/banner_event.png";
import imgIcon_left from "../../assets/News/iconleft.png";
import { Icon, loadIcon } from "@iconify/react";
import axios from "axios";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
// import { eventProductDataDetail } from "../../models/mockdata";
import { useState } from "react";
import { useEffect } from "react";
const NewsDetail = () => {
  let { code } = useParams();
  const location = useLocation();
  const data = location.state;
  console.log(data);
  // console.log(code);

  const navigate = useNavigate();
  return (
    <div className=" ">
      <div className="w-[76%] mx-auto pv:max-ph:w-[90%] md:max-lg:w-[90%]">
        <p className="font-nexa_bold text-[50px] pv:max-md:text-[24px] ">
          EVENT
        </p>
        <p className="font-nexa_light text-[25px]  pv:max-ph:text-[16px] ph:max-md:text-[20px]">
          Follow Our Fanpage To Not Miss Out On Attractive Offers.
        </p>
      </div>
      <div className="w-full h-full pt-[15px]">
        <img className="object-cover w-full" src={data.imgDetail}></img>
      </div>
      <div className="pt-[108px] pb-[10px]  mx-auto w-[76%]  pv:max-ph:w-[90%] md:max-lg:w-[90%] pv:max-ph:pt-10">
        <div className="flex  items-center gap-[20px] pv:max-ph:gap-2">
          <div className="h-[20px] w-[20px] bg-black rotate-45 pv:max-ph:w-[16px] pv:max-ph:h-[16px] "></div>
          <p className="font-nexa_bold text-[49px] pv:max-md:text-[24px]">
            {data.title}
          </p>
        </div>
        <div className="w-full h-[1px] bg-black "></div>
        <div className="pt-[80px] pv:max-md:pt-4 ">
          <p className="font-nexa_light text-[30px] text-left pv:max-md:text-[16px] ">
            {data.longdescription}
          </p>
        </div>
        <div className="flex justify-start pt-[172px] pv:max-md:pt-[16px] ">
          <button className="bg-[#cb1313] px-4 py-2">
            <p className="text-white font-shopee_bold text-[20px] pv:max-ph:text-[16px]  ">
              ORDER NOW
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
