/** @format */

import React from "react";

import { eventProductData } from "../../models/mockdata";
import { CardNewsProduct } from "../../components";
const News = () => {
  return (
    <div className=" w-[76%] mx-auto pv:max-ph:w-[90%] md:max-lg:w-[90%] ">
      <div className="">
        <p className="font-nexa_bold text-[50px] pv:max-ph:text-[24px] ">
          EVENT
        </p>
        <p className="font-nexa_light text-[25px] pv:max-ph:text-[16px]">
          Follow Our Fanpage To Not Miss Out On Attractive Offers.
        </p>
      </div>
      <div className=" ">
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
