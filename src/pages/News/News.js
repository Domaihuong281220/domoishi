/** @format */

import React from "react";

import { eventProductData } from "../../models/mockdata";
import { CardNewsProduct } from "../../components";
const News = () => {
  return (
    <div className=" max-w-[76%] mx-auto ">
      <div className="">
        <p className="font-nexa_bold text-[50px] ">EVENT</p>
        <p className="font-nexa_light text-[25px]">
          Follow Our Fanpage To Not Miss Out On Attractive Offers.
        </p>
      </div>
      <div className=" ">
        {/* <div className="flex flex-col gap-[30px]">
          <div className="flex  flex-col  gap-[20px] ">
            <div className="h-[20px] w-[20px] bg-black rotate-45"></div>
            <p className="font-nexa_bold text-[49px] text-start ">
              BEST POKE IN TOWN
            </p>
          </div>
          <p className="text-start text-[#cb1313] font-nexa_bold text-[40px]">
            Detail
          </p>
          <div className="">
            <p className="text-start  font-nexa_light text-[30px]">
              The event starts on the 6th and ends on November 30th.
            </p>
            <p className="text-start  font-nexa_light text-[30px]">
              (*) Applies to joyu’s specials.
            </p>
          </div>
        </div>
        <div className="">
          <img className="" src={""}></img>
        </div> */}
        {eventProductData.map((item, index) => {
          if (eventProductData) {
            return (
              <>
                <CardNewsProduct
                  title={item.title}
                  img={item.img}
                  desc={item.desc}
                  note={item.note}
                  code={item.key}
                />
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default News;
