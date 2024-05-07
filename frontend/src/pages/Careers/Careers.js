import React, { useState, useEffect } from "react";
import img_Careers_Banner from "../../assets/Careers/banner_career.png";
import img_subbg_Career from "../../assets/Careers/img_subbg_career.png";
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { CardCareers } from "../../components";

const Careers = () => {
  const [careerData, setCareerData] = useState([]);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await axios.get("http://103.157.218.115:8802/careers");
        setCareerData(response.data.data)
        console.log(response);
        if (Array.isArray(response.data)) {
          // Ensure you're setting the state to the correct path of your data
          setCareerData(response.data.data); // Adjusted if necessary depending on your API structure
        } else {
          console.error("Received data is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCareers();
  }, []);

  console.log(careerData);

  return (
    <div>
      <div>
        <img className="object-cover w-full" src={img_Careers_Banner} alt="Careers Banner"></img>
      </div>

      <div className="w-[76%] mx-auto py-10 pv:max-md:py-2 pv:max-md:w-[90%]">
        <div className="flex flex-col gap-4 pv:max-md:gap-2">
          <p className="font-nexa_bold text-[50px] pv:max-md:text-[16px] md:max-lg:text-[24px]">
            JOIN OUR TEAM
          </p>
          <p className="font-nexa_bold text-[24px] pv:max-md:text-[14px] md:max-lg:text-[20px]">
            THE OPPORTUNITIES ARE ENDLESS.
          </p>
          <p className="font-nexa_light text-[20px] w-[1222px] mx-auto uppercase pv:max-md:w-full pv:max-md:text-[14px] md:max-lg:text-[16px] md:max-lg:w-[100%] lg:max-2xl:w-[90%]">
            Working in a DOMOISHI store is a stepping stone toward a promising career. We are on a fast track to innovate the way we view Asian cuisine, be a part of the revolution.
          </p>
        </div>
      </div>

      {/* desktop */}
      <div className="h-[800px] bg-cover w-full flex items-center pv:max-lg:hidden" style={{ backgroundImage: `url(${img_subbg_Career})` }}>
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
            <div className="flex w-[76%] mx-auto">
              {careerData.map(item => (
                <CardCareers
                  key={item.id} // Ensure 'id' is unique
                  title={item.position}
                  desc={item.description}
                />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Other parts of the component */}
    </div>
  );
};

export default Careers;
