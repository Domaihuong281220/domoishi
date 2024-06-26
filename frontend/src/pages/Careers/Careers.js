/** @format */

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
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { CardCareers } from "../../components";
import { SelectOutlined } from "@ant-design/icons";

const Careers = () => {
  const [careerData, setCareerData] = useState([]);
  const [careersCount, setCareersCount] = useState(0);
  const [availablePositions, setAvailablePositions] = useState([]);
  const [selected, setSelected] = useState();
  const [linkform, setLinkform] = useState();

  const handleChange = (event) => {
    // console.log("Selected:", event.target.value);
    setSelected(event.target.value);
  };

  // Updates the linkform state when selected position changes
  useEffect(() => {
    const selectedPosition = availablePositions.find(
      (available) => available.position === selected
    );
    if (selectedPosition) {
      setLinkform(selectedPosition.linkform); // Set the corresponding linkform from the found object
      // console.log(linkform);
    } else {
      setLinkform("#"); // Clear linkform if no matching position found
    }
  }, [selected, availablePositions, linkform]); // React to changes in `selected` or `availablePositions`

  // Add another useEffect to observe changes in linkform
  useEffect(() => {
    // console.log(linkform);
  }, [linkform]);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/careers`
        );
        // Log the response to ensure your API returns the expected structure
        // console.log(response.data);

        // Check if the data is in the expected array format
        if (Array.isArray(response.data.data)) {
          // Filter the data to only include items where availability is "true"
          const availableCareers = response.data.data.filter(
            (career) => career.availability === "true"
          );
          // console.log(availableCareers);
          setCareerData(availableCareers);
          setCareersCount(availableCareers.length); // Update the count based on filtered data
          setAvailablePositions(
            availableCareers.map((item) => {
              return { position: item.position, linkform: item.linkform };
            })
          );
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
        <img
          className="object-cover w-full"
          src={img_Careers_Banner}
          alt="Careers Banner"
        ></img>
      </div>

      <div className="w-[73%] mx-auto py-10 pv:max-md:py-2 pv:max-md:w-[95%]">
        <div className="flex flex-col gap-4 pv:max-md:gap-2">
          <p className="font-nexa_bold text-[50px] pv:max-md:text-[16px] md:max-lg:text-[24px]">
            JOIN OUR TEAM
          </p>
          <p className="font-nexa_bold text-[24px] pv:max-md:text-[14px] md:max-lg:text-[20px]">
            THE OPPORTUNITIES ARE ENDLESS.
          </p>
          <p className="font-nexa_light text-[20px] w-[1222px] mx-auto uppercase pv:max-md:w-full pv:max-md:text-[12px] md:max-lg:text-[16px] md:max-lg:w-[100%] lg:max-2xl:w-[90%] leading-6">
            Working in a DOMOISHI store is a stepping stone toward a promising
            career. We are on a fast track to innovate the way we view Asian
            cuisine, be a part of the revolution.
          </p>
        </div>
      </div>

      {/* desktop */}
      <div
        className="h-[800px] bg-cover w-full flex items-center pv:max-lg:hidden"
        style={{ backgroundImage: `url(${img_subbg_Career})` }}
      >
        <Swiper
          navigation={true}
          loop={true}
          slidesPerView={3}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper w-[80%] mx-auto"
        >
          {careerData.map((item, index) => {
            const isLastItem = index === careerData.length - 1;

            return (
              <SwiperSlide key={item.id}>
                <div className="">
                  <CardCareers
                    key={item.id} // Ensuring 'id' is unique
                    title={item.position}
                    desc={item.description}
                    isLast={isLastItem}
                    // Pass index if needed for something specific
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* mobile */}
      <div
        className="  h-[50vh] bg-cover bg-no-repeat w-full   lg:hidden "
        style={{ backgroundImage: `url(${img_subbg_Career})` }}
      >
        <Swiper
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation, FreeMode]}
          className="mySwiper w-[90%] mx-auto"
        >
          {careerData.map((item, index) => (
            <SwiperSlide>
              <div className="py-10 flex md:max-lg:py-20 ">
                <div className="">
                  <div className="flex justify-center py-4">
                    <div className="h-[14px] w-[14px] rotate-45 bg-yellow-300"></div>
                  </div>
                  <div className="w-[80%] ph:max-md:w-[50%] mx-auto border-[1px] border-white rounded-[30px] ">
                    <p className="text-[#e3c756] md:max-lg:text-[24px] font-nexa_bold  uppercase ">
                      {item.position}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-white mt-4 pv:max-md:w-[80%] mx-auto"></div>

                  <div className="w-[80%] ph:max-md:w-[50%] mx-auto pt-4">
                    <p className=" font-nexa_bold text-center text-white md:max-lg:text-[20px] line-clamp-4 ">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="pv:max-md:pt-4">
        <p className="font-jonitha text-[2.5vw] pv:max-md:text-[3vw]  ">
          <span className="uppercase">#Domoishi</span>
          <span>Career</span>
          <span className="uppercase">Search</span>
        </p>
      </div>
      <div className="font-nexa_bold text-[2.5vw] pt-[45px] pv:max-md:text-[3vw]   pv:pt-2">
        <p className="uppercase">Position availability at each store:</p>
      </div>
      <div className="flex justify-center gap-4 items-center pt-[25px] pv:max-sm:flex-col">
        <div className="custom-select pv:max-md:text-[16px]">
          <select
            name="positions"
            className="px-10 py-2 border-[1px] border-black rounded-lg"
            onChange={handleChange}
          >
            <option value="" clas>
              Check availability
            </option>
            {availablePositions.map((position, index) => (
              <option key={index} value={position.position}>
                <p className=" "> {position.position}</p>
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <button className="px-4 py-2 rounded-lg bg-[#b2cc60]">
            <a
              href={linkform}
              className="text-white font-nexa_bold text-[22px] pv:max-md:text-[16px]"
              target="1"
            >
              FILL YOUR APPLICATION HERE
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
