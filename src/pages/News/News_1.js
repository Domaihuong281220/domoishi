/** @format */

import React from "react";
import imgBanner_event from "../../assets/News/banner_event.png";
import imgIcon_left from "../../assets/News/iconleft.png";
import { Icon } from "@iconify/react";

const News_1 = () => {
  return (
    <div className="pt-[250px] max-w-[1920px]">
      <div className="">
        <p className="font-nexa_bold text-[50px] ">EVENT</p>
        <p className="font-nexa_light text-[25px]">
          Follow Our Fanpage To Not Miss Out On Attractive Offers.
        </p>
      </div>
      <div className="w-full h-full pt-[15px]">
        <img className="" src={imgBanner_event}></img>
      </div>
      <div className="pt-[108px] pb-[10px] w-[76%] mx-auto">
        <div className="flex  items-center gap-[20px] ">
          <div className="h-[20px] w-[20px] bg-black rotate-45"></div>
          <p className="font-nexa_bold text-[49px]">BEST POKE IN TOWN</p>
        </div>
        <div className="w-full h-[2px] bg-black "></div>
        <div className="pt-[80px]">
          <p className="font-nexa_light text-[30px] text-left">
            Our commitment to exceptional taste extends beyond coffee to our
            delectable pastries. Our signature creation, the Croffle, is a
            harmonious blend of croissants and waffles. Crispy on the outside,
            soft and buttery on the inside, these delightful treats are a
            symphony of flavors that will leave you craving more. Whether you
            opt for a sweet or savory Croffle, each bite is a celebration of the
            perfect balance between textures and tastes.
          </p>
          <br></br>
          <p className="font-nexa_light text-[30px] text-left">
            For those seeking a classic pastry experience, our croissants are a
            testament to the artistry of French baking. Indulge in the flaky
            layers of buttery goodness and savor the melt-in-your-mouth
            sensation. From the simplicity of a plain croissant to the
            indulgence of chocolate, almond, or Strawberry-filled variations,
            our croissants are a true delight for the senses.
          </p>
        </div>
        <div className="flex justify-start pt-[172px]">
          <button className="bg-[#cb1313] w-[308px] h-[68px]">
            <p className="text-white font-shopee_bold text-[20px]">ORDER NOW</p>
          </button>
        </div>
        <div className="pt-48">
          <ul className="flex justify-center gap-[48px] font-shopee_bold text-[28px]">
            <li className="">
              <a className="">MENU</a>
            </li>
            <li className="">
              <a className="">LOCATIONS</a>
            </li>
            <li className="">
              <a className="">FRANCHISING</a>
            </li>
            <li className="">
              <a className="">ABOUT US</a>
            </li>
            <li className="">
              <a className="">CARRERS</a>
            </li>
            <li className="">
              <a className="">NEWS</a>
            </li>
          </ul>
          <div className="">
            <p className="font-shopee_regular text-[20px]">
              ALL RIGHTS RESERVED | DOMOISHI ©2024
            </p>
          </div>
          <div className="pt-[42px] flex justify-center items-center gap-20">
            <div className="relative">
              <button className=" rounded-[9px] w-[236px] h-[78px] bg-[#ffe05f] border-[1px] border-black">
                <p className="font-shopee_bold text-[25px] ">FOLLOW US </p>
              </button>
              <img
                className="absolute right-[-30px] top-[30px]"
                src={imgIcon_left}
              ></img>
            </div>
            <div className="flex justify-center gap-[20px]">
              <div className="h-20 w-20 bg-black rounded-xl flex justify-center items-center ">
                <Icon
                  icon={"basil:facebook-solid"}
                  className="w-16 h-16 text-white"
                />
              </div>
              <div className="h-20 w-20 bg-black rounded-xl flex justify-center items-center ">
                <Icon icon={"mdi:instagram"} className="w-16 h-16 text-white" />
              </div>
              <div className="h-20 w-20 bg-black rounded-xl flex justify-center items-center">
                <Icon icon={"mdi:twitter"} className="w-16 h-16 text-white" />
              </div>
              <div className="h-20 w-20 bg-black rounded-xl flex justify-center items-center">
                <Icon
                  icon={"ic:baseline-tiktok"}
                  className="w-16 h-16 text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News_1;
