/** @format */

import React from "react";
import img_Franchising_Banner from "../../assets/Franchising/Franchising_banner.png";
import BGImg from "../../assets/HomePage/AboutBG.png";
import { Select } from "antd";
const Franchising = () => {
  return (
    <div>
      <div className="">
        <img
          className="object-cover w-full "
          src={img_Franchising_Banner}
        ></img>
      </div>

      <div className="w-[76%] mx-auto pt-10 pv:max-md:w-[95%] md:max-2xl:w-[90%] ">
        <div className="pb-10">
          <p className="font-nexa_bold text-[50px] pv:max-md:text-[24px] md:max-2xl:text-[30px]">
            FRANCHISING
          </p>
          <p className="font-nexa_light text-[30px] pv:max-md:text-[16px] md:max-2xl:text-[24px]">
            Complete The Form Below, Contact One Of Our Franchise Team Members,
            <br />
            Or Call Us At
            <span className="font-bold text-[#cb1313]"> 757-453-4888</span> To
            Find Out If Domoishi Is A Good Fit For You.
          </p>
        </div>

        {/* Mobile */}
        <div className=" xl:hidden flex  justify-center gap-10 pt-10 pv:max-md:grid  pv:max-md:grid-cols-1 md:max-2xl:grid  md:max-2xl:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start 2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start gap-4">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *FIRST NAME :
              </p>
              <input
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="First Name"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start  gap-4">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *LAST NAME :{" "}
              </p>
              <input
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Last Name:"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start gap-4">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *ADDRESS :{" "}
              </p>
              <input
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Address"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start gap-4">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                COUNTRY :{" "}
              </p>
              <div className="custom-select">
                <select className="w-full pv:max-md:w-full md:max-2xl:w-full 2xl:max-dh_max:w-full   h-14 border-[1px] border-[#707070] rounded-full p-2">
                  <option value="1">option 1</option>
                  <option value="2">option 2</option>
                  <option value="3">option 3</option>
                  <option value="4">option 4</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start gap-4">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *STATE PROVIDE:
              </p>
              <div className="custom-select">
                <select className="w-full pv:max-md:w-full md:max-2xl:w-full 2xl:max-dh_max:w-full   h-14 border-[1px] border-[#707070] rounded-full p-2">
                  <option value="1">option 1</option>
                  <option value="2">option 2</option>
                  <option value="3">option 3</option>
                  <option value="4">option 4</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-10 pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start">
              <div className="w-full flex justify-end">
                <p className="w-[600px] text-right pv:max-md:text-center md:max-2xl:text-right  text-[20px] font-nexa_bold md:max-2xl:text-[14px]  2xl:max-dh_max:text-left pv:max-md:text-[14px] uppercase ">
                  *Please describe your business background/restaurant
                  experience including name(s) of franchise brands :
                </p>
              </div>
              <div className="flex justify-end pv:max-md:w-full md:max-2xl:w-full 2xl:max-dh_max:w-full">
                <input className=" w-full pv:max-md:w-full md:max-2xl:w-full 2xl:max-dh_max:w-full   h-14 border-[1px] border-[#707070] rounded-full p-2"></input>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-10">
            <div className="flex items-center justify-between pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start gap-4 ">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                CITY:{" "}
              </p>
              <div className="custom-select">
                <select className="w-full pv:max-md:w-full md:max-2xl:w-full 2xl:max-dh_max:w-full   h-14 border-[1px] border-[#707070] rounded-full p-2">
                  <option value="1">option 1</option>
                  <option value="2">option 2</option>
                  <option value="3">option 3</option>
                  <option value="4">option 4</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between  pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start gap-4 ">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] pv:max-md:flex-col pv:max-md:items-start md:max-2xl:text-[14px]">
                ZIP/POSTAL CODE:{" "}
              </p>
              <input
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Zip / Postal Code"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start gap-4">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *EMAIL :{" "}
              </p>
              <input
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Email Ex: Doce@gmail.com"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start gap-4">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *MOBILE :{" "}
              </p>
              <input
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Phone Ex: +1 (757) xxxxx"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start gap-4">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px] ">
                *PREFERRED CITY 1:{" "}
              </p>
              <input
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Preferred City 1"
              ></input>
            </div>
            <div className="flex flex-col gap-10 pv:max-xl:gap-4  ">
              <div className="flex items-center justify-between pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start   2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start gap-4">
                <p className="font-nexa_bold text-[20px] uppercase pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                  *Net Worth :
                </p>
                <div className="custom-select">
                  <select className="w-full pv:max-md:w-full md:max-2xl:w-full 2xl:max-dh_max:w-full   h-14 border-[1px] border-[#707070] rounded-full p-2">
                    <option value="1">option 1</option>
                    <option value="2">option 2</option>
                    <option value="3">option 3</option>
                    <option value="4">option 4</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-between pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start   md:max-2xl:flex-col md:max-2xl:items-start   2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start gap-4 ">
                <p className=" pv:max-lg:hidden font-nexa_bold text-[20px] uppercase pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                  *Cash Available <br /> for Investment :
                </p>
                <p className=" lg:hidden font-nexa_bold text-[20px] uppercase pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                  *Cash Available for Investment :
                </p>
                <div className="custom-select">
                  <select className="w-full pv:max-md:w-full md:max-2xl:w-full 2xl:max-dh_max:w-full   h-14 border-[1px] border-[#707070] rounded-full p-2">
                    <option value="1">option 1</option>
                    <option value="2">option 2</option>
                    <option value="3">option 3</option>
                    <option value="4">option 4</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Desktop  */}
        <div className="grid grid-cols-2 gap-5 pv:max-xl:hidden">
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *FIRST NAME :
              </p>
            </div>

            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="First Name"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                CITY :
              </p>
            </div>
            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Location Ex: Virginia "
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *LAST NAME :
              </p>
            </div>
            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Last Name:"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                ZIP / POSTAL CODE:
              </p>
            </div>
            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Zip / Postal Code"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *ADDRESS :
              </p>
            </div>
            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Address"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *EMAIL :
              </p>
            </div>
            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Email Ex: Doce@gmail.com"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                COUNTRY :
              </p>
            </div>
            <div className="col-span-2 custom-select">
              <select className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-4">
                <option value="1">option 1</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
                <option value="4">option 4</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *MOBILE :
              </p>
            </div>
            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Phone Ex: +1 (757) xxxxx"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *STATE / PROVINCE :
              </p>
            </div>
            <div className="col-span-2 custom-select ">
              <select className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-4">
                <option value="1">option 1</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
                <option value="4">option 4</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                PREFERRED CITY 1 :
              </p>
            </div>
            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Preferred City 1"
              ></input>
            </div>
          </div>

          <div className="grid grid-cols-3 text-right gap-5  items-center ">
            <div className="col-span-3">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px] uppercase">
                *Please describe your business background/restaurant experience
                including name(s) of franchise brands :
              </p>
            </div>
            <div className="col-span-3 ">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder=""
              ></input>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-3 text-right gap-10 items-center py-5">
              <div className="col-span-1">
                <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                  *NET WORTH :
                </p>
              </div>
              <div className="col-span-2 custom-select">
                <select className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-4">
                  <option value="1">option 1</option>
                  <option value="2">option 2</option>
                  <option value="3">option 3</option>
                  <option value="4">option 4</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-3 text-right gap-10 items-center ">
              <div className="col-span-1">
                <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px] uppercase">
                  Cash Available for Investment :
                </p>
              </div>
              <div className="col-span-2 custom-select">
                <select className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-4">
                  <option value="1">option 1</option>
                  <option value="2">option 2</option>
                  <option value="3">option 3</option>
                  <option value="4">option 4</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[76%] mx-auto  gap-10 pt-10 flex justify-center ">
        <div className="">
          <button className="bg-[#cb1313] px-6 py-2 rounded-lg">
            <p className=" text-white font-shopee_bold text-[27px] pv:max-xl:text-[16px] xl:max-2xl:text-[20px]">
              SUBMIT
            </p>
          </button>
        </div>
        <div className="">
          <button className="bg-black px-6 py-2 rounded-lg">
            <p className="text-white text-[27px] pv:max-xl:text-[16px] xl:max-2xl:text-[20px] font-bold">
              RESET
            </p>
          </button>
        </div>
      </div>

      <div
        className="w-[100%] h-fit   mx-auto  relative mt-[1rem]"
        // style={{ backgroundImage: `url(${BGImg})` }}
      >
        <img
          src={BGImg}
          alt=""
          className="  h-[400px] pv:max-md:h-[200px] md:max-xl:h-[300px] xl:max-2xl:h-[400px] w-full object-cover"
        />
        <div className="w-full absolute h-full top-0 flex flex-col space-y-8  pv:max-lg:space-y-1  justify-center items-center">
          <p className="font-jonitha text-[3vw] w-full pv:max-ph:text-[4vw]">
            #AboutDOMOISHI
          </p>
          <p className=" custom_lineHeight font-nexa font-medium  text-center uppercase text-[1.7vw] pt-6  lg:pt-0 w-[80%]  pv:max-md:w-[95%] leading-10 pv:max-md:pt-0">
            NOT ONLY DO MANY OF OUR INGREDIENTS COME FROM THE REGIONS OF ORIGIN
            IN ASIA, BUT OUR RECIPES ARE ROOTED IN THE TRADITIONAL MEALS OF
            THOSE ASIAN REGIONS THAT ARE UNCHANGED AFTER HUNDREDS AND HUNDREDS
            OF YEARS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Franchising;
