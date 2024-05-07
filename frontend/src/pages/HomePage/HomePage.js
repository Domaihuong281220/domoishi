import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import { About, Banner, Promo, WhyDommoishi } from "../../components";
import axios from 'axios';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HomePage = () => {
  const [metaTags, setMetaTags] = useState([]);

  useEffect(() => {
    // Fetch meta tags from the API
    const fetchMetaTags = async () => {
      try {
        const response = await axios.get('http://localhost:4000/metatag');
        console.log(response);
        setMetaTags(response.data.data); // Assume the API returns data in {data: []} format
      } catch (error) {
        console.error('Error fetching meta tags:', error);
      }
    };

    fetchMetaTags();
  }, []);

  return (
    <div className="w-full h-fit">
      <Helmet>
        <title>Home - Domoishi</title>
        {metaTags.map(tag => (
          <meta name={tag.name} content={tag.content} key={tag._id} />
        ))}
      </Helmet>
      
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
        <SwiperSlide><Promo /></SwiperSlide>
        <SwiperSlide><Promo /></SwiperSlide>
        <SwiperSlide><Promo /></SwiperSlide>
      </Swiper>

      <WhyDommoishi />
      <About />
    </div>
  );
};

export default HomePage;
