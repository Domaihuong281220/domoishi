/** @format */

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { About, Banner, Promo, Promo2, Promo3, WhyDommoishi } from "../../components";
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HomePage = () => {
  const [metaTags, setMetaTags] = useState([]);

  const handlegetCareers = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}/metatag`)
      .then((res) => {
        setMetaTags(res.data.data);
        // setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    handlegetCareers();
  }, []);
  

  return (
    <div className="w-full h-fit">
      {metaTags === null || metaTags.length === 0 ? (
        ""
      ) : (
        <Helmet>
          <title>Home - Domoishi</title>
          {metaTags.map((tag) => (
            <meta name={tag.name} content={tag.content} key={tag._id} />
          ))}
        </Helmet>
      )}

      <Banner />

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 400000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Promo />
        </SwiperSlide>
        <SwiperSlide>
          <Promo2 />
        </SwiperSlide>
        <SwiperSlide>
          <Promo3  />
        </SwiperSlide>
      </Swiper>

      <WhyDommoishi />
      <About />
    </div>
  );
};

export default HomePage;
