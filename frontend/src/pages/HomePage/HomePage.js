/** @format */

import React from "react";
import { About, Banner, Promo, WhyDommoishi } from "../../components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HomePage = () => {
  return (
    <div className="w-full h-fit">
      <Banner />

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
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
          <Promo />
        </SwiperSlide>
        <SwiperSlide>
          <Promo />
        </SwiperSlide>
      </Swiper>

      <WhyDommoishi />
      <About />
    </div>
  );
};
export default HomePage;
