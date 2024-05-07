/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";

import { eventProductData } from "../../models/mockdata";
import { CardNewsProduct } from "../../components";
const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    handlegetNews();
  }, []);
  // Call API

  // Get News
  const handlegetNews = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}/news`)
      .then((res) => {
        setNewsData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
        {newsData.map((item, index) => {
          if (newsData) {
            return (
              <>
                <CardNewsProduct
                  title={item.title}
                  imgTitle={`${process.env.REACT_APP_SERVER_URL}/${item.titlepic}`}
                  imgDetail={`${process.env.REACT_APP_SERVER_URL}/${item.detailpic}`}
                  shortdescription={item.shortdescription}
                  longdescription={item.longdescription}
                  code={item._id}
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
