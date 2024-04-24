/** @format */

import React from "react";
import imgBanner_event from "../../assets/News/banner_event.png";
import imgIcon_left from "../../assets/News/iconleft.png";
import { Icon } from "@iconify/react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import { eventProductDataDetail } from "../../models/mockdata";
import { useState } from "react";
import { useEffect } from "react";
const NewsDetail = () => {
  let { code } = useParams();
  const [dataDetail, setDataDetail] = useState([
    {
      key: "",
      title: "",
      img: "",
      desc: "",
      desc2: "",
    },
  ]);
  useEffect(() => {
    if (eventProductDataDetail.length > 0) {
      let data = eventProductDataDetail.filter((item) => item.key === code);
      setDataDetail(data);
    }
  }, [code]);
  console.log(dataDetail);
  const navigate = useNavigate();
  return (
    <div className="max-w-[1920px]">
      <div className="">
        <p className="font-nexa_bold text-[50px] ">EVENT</p>
        <p className="font-nexa_light text-[25px]">
          Follow Our Fanpage To Not Miss Out On Attractive Offers.
        </p>
      </div>
      <div className="w-full h-full pt-[15px]">
        <img className="" src={dataDetail[0].img}></img>
      </div>
      <div className="pt-[108px] pb-[10px] w-[76%] mx-auto">
        <div className="flex  items-center gap-[20px] ">
          <div className="h-[20px] w-[20px] bg-black rotate-45"></div>
          <p className="font-nexa_bold text-[49px]">{dataDetail[0].title}</p>
        </div>
        <div className="w-full h-[2px] bg-black "></div>
        <div className="pt-[80px]">
          <p className="font-nexa_light text-[30px] text-left">
            {dataDetail[0].desc}
          </p>
          <br></br>
          <p className="font-nexa_light text-[30px] text-left">
            {dataDetail[0].desc2}
          </p>
        </div>
        <div className="flex justify-start pt-[172px]">
          <button className="bg-[#cb1313] w-[308px] h-[68px]">
            <p className="text-white font-shopee_bold text-[20px]">ORDER NOW</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
