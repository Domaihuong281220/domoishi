/** @format */

import React from "react";
import { About, Banner, Promo, WhyDommoishi } from "../../components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const HomePage = () => {
  return (
    <div className="w-full h-fit">
      <Banner />

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
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
