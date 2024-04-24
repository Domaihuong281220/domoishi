/** @format */

import React from "react";
import img_Careers_Banner from "../../assets/Careers/banner_career.png";
import img_subbg_Career from "../../assets/Careers/img_subbg_career.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const Careers = () => {
  return (
    <div className="">
      <div className="">
        <img className="object-cover w-full " src={img_Careers_Banner}></img>
      </div>

      <div className="w-[76%] mx-auto py-10 pv:max-md:py-2 pv:max-md:w-[90%] ">
        <div className="flex flex-col gap-4 pv:max-md:gap-2">
          <p className="font-nexa_bold text-[50px] pv:max-md:text-[16px] md:max-lg:text-[24px] ">
            JOIN OUR TEAM
          </p>
          <p className="font-nexa_bold text-[24px] pv:max-md:text-[14px] md:max-lg:text-[20px]">
            THE OPPORTUNITIES ARE ENDLESS.
          </p>
          <p
            className="font-nexa_light text-[20px] w-[1222px] mx-auto uppercase pv:max-md:w-full pv:max-md:text-[14px] md:max-lg:text-[16px] md:max-lg:w-[100%] lg:max-2xl:w-[90%]
          "
          >
            Working in a DOMOISHI store is a stepping stone toward a promising
            career. We are on a fast track to innovate the way we view asian
            cuisine, be apart of the revolution.
          </p>
        </div>
      </div>

      {/* desktop */}
      <div
        className="   h-[800px] bg-cover w-full flex items-center  pv:max-lg:hidden  "
        style={{ backgroundImage: `url(${img_subbg_Career})` }}
      >
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
            <div className="flex w-[76%] mx-auto  ">
              <div className="py-10 flex lg:max-2xl:py-52 ">
                <div className="">
                  <div className="flex justify-center py-4">
                    <div className="h-[14px] w-[14px] rotate-45 bg-yellow-300"></div>
                  </div>
                  <div className="w-[80%] lg:max-xl:w-[95%] mx-auto border-[1px] border-white rounded-[30px] ">
                    <p className="text-[#e3c756] font-nexa_bold text-[24px] lg:max-xl:text-[20px] xl:max-2xl:text-[20px] uppercase ">
                      Cashier
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-white mt-4"></div>

                  <div className="w-[80%] mx-auto pt-4">
                    <p className="text-[25px] font-nexa_bold text-left text-white lg:max-xl:text-[20px] xl:max-2xl:text-[20px]">
                      The cashier’s role is to ensure that each and every
                      customer is served in a friendly, professional, and timely
                      manner. This includes greeting customers as they enter the
                      store, processing customer payments through the POS
                      system, and resolve customer issues.
                    </p>
                  </div>
                </div>
                <div className="h-full w-[1px] bg-white"></div>
              </div>
              <div className="py-10 flex lg:max-2xl:py-52">
                <div className="">
                  <div className="flex justify-center py-4">
                    <div className="h-[14px] w-[14px] rotate-45 bg-yellow-300"></div>
                  </div>
                  <div className="w-[80%] lg:max-xl:w-[90%]  mx-auto border-[1px] border-white rounded-[30px] ">
                    <p className="text-[#e3c756] font-nexa_bold text-[24px] lg:max-xl:text-[20px] xl:max-2xl:text-[20px] uppercase ">
                      Barista
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-white mt-4"></div>

                  <div className="w-[80%] mx-auto pt-4">
                    <p className="text-[25px] font-nexa_bold text-left lg:max-xl:text-[20px] xl:max-2xl:text-[20px] text-white">
                      The cashier’s role is to ensure that each and every
                      customer is served in a friendly, professional, and timely
                      manner. This includes greeting customers as they enter the
                      store, processing customer payments through the POS
                      system, and resolve customer issues.
                    </p>
                  </div>
                </div>
                <div className="h-full w-[1px] bg-white"></div>
              </div>
              <div className="py-10 flex lg:max-2xl:py-52">
                <div className="">
                  <div className="flex justify-center py-4">
                    <div className="h-[14px] w-[14px] rotate-45 bg-yellow-300"></div>
                  </div>
                  <div className="w-[80%] lg:max-xl:w-[90%]  mx-auto border-[1px] border-white rounded-[30px] ">
                    <p className="text-[#e3c756] font-nexa_bold lg:max-xl:text-[20px] text-[24px] xl:max-2xl:text-[20px] uppercase ">
                      Assistant Manager
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-white mt-4"></div>

                  <div className="w-[80%] mx-auto pt-4">
                    <p className="text-[25px] font-nexa_bold text-left lg:max-xl:text-[20px] xl:max-2xl:text-[20px] text-white">
                      The assistant manager is responsible for providing
                      operational services in the store. The assistant manager
                      provides necessary directions to other members of staff
                      through daily tasks and ensures they perform their
                      assigned duties in accordance to the store.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex w-[76%] mx-auto ">
              <div className="py-10 flex">
                <div className="">
                  <div className="flex justify-center py-4">
                    <div className="h-[14px] w-[14px] rotate-45 bg-yellow-300"></div>
                  </div>
                  <div className="w-[80%] mx-auto border-[1px] border-white rounded-[30px] ">
                    <p className="text-[#e3c756] font-nexa_bold text-[24px] uppercase ">
                      Cashier
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-white mt-4"></div>

                  <div className="w-[80%] mx-auto pt-4">
                    <p className="text-[25px] font-nexa_bold text-left text-white">
                      The cashier’s role is to ensure that each and every
                      customer is served in a friendly, professional, and timely
                      manner. This includes greeting customers as they enter the
                      store, processing customer payments through the POS
                      system, and resolve customer issues.
                    </p>
                  </div>
                </div>
                <div className="h-full w-[1px] bg-white"></div>
              </div>
              <div className="py-10 flex">
                <div className="">
                  <div className="flex justify-center py-4">
                    <div className="h-[14px] w-[14px] rotate-45 bg-yellow-300"></div>
                  </div>
                  <div className="w-[80%] mx-auto border-[1px] border-white rounded-[30px] ">
                    <p className="text-[#e3c756] font-nexa_bold text-[24px] uppercase ">
                      Barista
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-white mt-4"></div>

                  <div className="w-[80%] mx-auto pt-4">
                    <p className="text-[25px] font-nexa_bold text-left text-white">
                      The cashier’s role is to ensure that each and every
                      customer is served in a friendly, professional, and timely
                      manner. This includes greeting customers as they enter the
                      store, processing customer payments through the POS
                      system, and resolve customer issues.
                    </p>
                  </div>
                </div>
                <div className="h-full w-[1px] bg-white"></div>
              </div>
              <div className="py-10 flex">
                <div className="">
                  <div className="flex justify-center py-4">
                    <div className="h-[14px] w-[14px] rotate-45 bg-yellow-300"></div>
                  </div>
                  <div className="w-[80%] mx-auto border-[1px] border-white rounded-[30px] ">
                    <p className="text-[#e3c756] font-nexa_bold text-[24px] uppercase ">
                      Assistant Manager
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-white mt-4"></div>

                  <div className="w-[80%] mx-auto pt-4">
                    <p className="text-[25px] font-nexa_bold text-left text-white">
                      The assistant manager is responsible for providing
                      operational services in the store. The assistant manager
                      provides necessary directions to other members of staff
                      through daily tasks and ensures they perform their
                      assigned duties in accordance to the store.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* mobile */}
      <div
        className="  h-[50vh] bg-cover bg-no-repeat w-full   lg:hidden "
        style={{ backgroundImage: `url(${img_subbg_Career})` }}
      >
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="py-10 flex md:max-lg:py-20 ">
              <div className="">
                <div className="flex justify-center py-4">
                  <div className="h-[14px] w-[14px] rotate-45 bg-yellow-300"></div>
                </div>
                <div className="w-[80%] ph:max-md:w-[50%] mx-auto border-[1px] border-white rounded-[30px] ">
                  <p className="text-[#e3c756] md:max-lg:text-[24px] font-nexa_bold  uppercase ">
                    Cashier
                  </p>
                </div>
                <div className="w-full h-[1px] bg-white mt-4"></div>

                <div className="w-[80%] ph:max-md:w-[50%] mx-auto pt-4">
                  <p className=" font-nexa_bold text-left text-white md:max-lg:text-[20px]">
                    The cashier’s role is to ensure that each and every customer
                    is served in a friendly, professional, and timely manner.
                    This includes greeting customers as they enter the store,
                    processing customer payments through the POS system, and
                    resolve customer issues.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-10 flex md:max-lg:py-20">
              <div className="">
                <div className="flex justify-center py-4">
                  <div className="h-[14px] w-[14px] rotate-45 bg-yellow-300"></div>
                </div>
                <div className="w-[80%]  ph:max-md:w-[50%] mx-auto border-[1px] border-white rounded-[30px] ">
                  <p className="text-[#e3c756] md:max-lg:text-[24px] font-nexa_bold uppercase ">
                    Barista
                  </p>
                </div>
                <div className="w-full h-[1px] bg-white mt-4"></div>

                <div className="w-[80%] mx-auto pt-4 ph:max-md:w-[50%]">
                  <p className=" font-nexa_bold text-left text-white md:max-lg:text-[20px]">
                    The cashier’s role is to ensure that each and every customer
                    is served in a friendly, professional, and timely manner.
                    This includes greeting customers as they enter the store,
                    processing customer payments through the POS system, and
                    resolve customer issues.
                  </p>
                </div>
              </div>
              <div className="h-full w-[1px] bg-white"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-10 flex md:max-lg:py-20">
              <div className="">
                <div className="flex justify-center py-4">
                  <div className="h-[14px] w-[14px] rotate-45 bg-yellow-300"></div>
                </div>
                <div className="w-[80%]  ph:max-md:w-[50%] mx-auto border-[1px] border-white rounded-[30px] ">
                  <p className="text-[#e3c756] font-nexa_bold uppercase md:max-lg:text-[24px] ">
                    Assistant Manager
                  </p>
                </div>
                <div className="w-full h-[1px] bg-white mt-4"></div>

                <div className="w-[80%] ph:max-md:w-[50%]  mx-auto pt-4">
                  <p className="font-nexa_bold text-left text-white md:max-lg:text-[20px]">
                    The assistant manager is responsible for providing
                    operational services in the store. The assistant manager
                    provides necessary directions to other members of staff
                    through daily tasks and ensures they perform their assigned
                    duties in accordance to the store.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="">
        <p className="font-jonitha text-[70px] pv:max-md:text-[20px]  ">
          <span className="uppercase">#Domoishi</span>
          <span>Career</span>
          <span className="uppercase">Search</span>
        </p>
      </div>
      <div className="font-nexa_bold text-[24px] pt-[45px] pv:max-md:text-[16px] pv:pt-2">
        <p className="uppercase">Position availability at each store:</p>
      </div>
      <div className="flex justify-center gap-4 items-center pt-[25px] pv:max-sm:flex-col">
        <div className="">
          <select
            name=""
            className="px-10 py-2 border-[1px] border-black rounded-lg"
          >
            <option value="Check availability " className="">
              Check availability
            </option>
          </select>
        </div>
        <div className="">
          <button className="px-4 py-2 rounded-lg bg-[#b2cc60]">
            <p className="text-white font-nexa_bold text-[22px] pv:max-md:text-[16px]">
              FILL YOUR APPLICATION HERE
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
