/** @format */

import React from "react";
import img_Franchising_Banner from "../../assets/Franchising/Franchising_banner.png";
import BGImg from "../../assets/HomePage/AboutBG.png";
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
        <div className="">
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
        <div className="flex  justify-center gap-10 pt-10 pv:max-md:grid  pv:max-md:grid-cols-1 md:max-2xl:grid  md:max-2xl:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-between pv:max-md:gap-2 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start ">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *FIRST NAME :
              </p>
              <input
                className="w-[420px] pv:max-md:w-full md:max-2xl:w-full h-10 border-[1px] border-[#707070] rounded-xl p-2"
                placeholder="First Name"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-2 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start ">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *LAST NAME :{" "}
              </p>
              <input
                className="w-[420px] pv:max-md:w-full md:max-2xl:w-full h-10 border-[1px] border-[#707070] rounded-xl p-2"
                placeholder="Last Name"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-2 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *ADDRESS :{" "}
              </p>
              <input
                className="w-[420px] pv:max-md:w-full md:max-2xl:w-full  h-10 border-[1px] border-[#707070] rounded-xl p-2"
                placeholder="Address"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-2 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                COUNTRY :{" "}
              </p>
              <input
                className="w-[420px] pv:max-md:w-full md:max-2xl:w-full  h-10 border-[1px] border-[#707070] rounded-xl p-2"
                placeholder="Contry"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-2 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *STATE PROVIDE:
              </p>
              <input
                className="w-[420px]  pv:max-md:w-full md:max-2xl:w-full  h-10 border-[1px] border-[#707070] rounded-xl p-2"
                placeholder="Select State"
              ></input>
            </div>
            <div className="flex flex-col gap-10 pv:max-md:gap-2 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start">
              <div className="w-full flex justify-end">
                <p className="w-[600px] text-right pv:max-md:text-center md:max-2xl:text-center  text-[20px] font-nexa_bold md:max-2xl:text-[14px ">
                  *Please describe your business background/restaurant
                  experience including name(s) of franchise brands :
                </p>
              </div>
              <div className="flex justify-end pv:max-md:w-full md:max-2xl:w-full">
                <input className=" w-[420px] pv:max-md:w-full md:max-2xl:w-full   h-10 border-[1px] border-[#707070] rounded-xl p-2"></input>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-10">
            <div className="flex items-center justify-between pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  ">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                CITY:{" "}
              </p>
              <input
                className="w-[420px] md:max-2xl:w-full  pv:max-md:w-full h-10 border-[1px] border-[#707070] rounded-xl p-2"
                placeholder="Locate"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start ">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] pv:max-md:flex-col pv:max-md:items-start md:max-2xl:text-[14px]">
                ZIP/POSTAL CODE:{" "}
              </p>
              <input
                className="w-[420px] md:max-2xl:w-full  pv:max-md:w-full h-10 border-[1px] border-[#707070] rounded-xl p-2 md:max-2xl:text-[14px]"
                placeholder="Zip/postal code"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *EMAIL :{" "}
              </p>
              <input
                className="w-[420px] md:max-2xl:w-full  pv:max-md:w-full h-10 border-[1px] border-[#707070] rounded-xl p-2"
                placeholder="Email"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                MOBILE :{" "}
              </p>
              <input
                className="w-[420px] md:max-2xl:w-full  pv:max-md:w-full h-10 border-[1px] border-[#707070] rounded-xl p-2"
                placeholder="Phone Number"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px] ">
                *PREFERRED CITY 1:{" "}
              </p>
              <input
                className="w-[420px] md:max-2xl:w-full pv:max-md:w-full h-10 border-[1px] border-[#707070] rounded-xl p-2"
                placeholder="Preferred city"
              ></input>
            </div>
            <div className="flex flex-col gap-10 ">
              <div className="flex items-center justify-between pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start ">
                <p className="font-nexa_bold text-[20px] uppercase pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                  *Net Worth :
                </p>
                <input
                  className="w-[420px] pv:max-md:w-full md:max-2xl:w-full h-10 border-[1px] border-[#707070] rounded-xl p-2"
                  placeholder="Net worth"
                ></input>
              </div>
              <div className="flex items-center justify-between pv:max-md:flex-col pv:max-md:items-start   md:max-2xl:flex-col md:max-2xl:items-start   ">
                <p className="font-nexa_bold text-[20px] uppercase pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                  *Cash Available <br /> for Investment :
                </p>
                <input
                  className="w-[420px]  pv:max-md:w-full md:max-2xl:w-full  h-10 border-[1px] border-[#707070] rounded-xl p-2"
                  placeholder="Cash"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-[76%] mx-auto flex flex-col gap-10 pt-10">
        <div className="flex gap-4 items-center ">
          <input className="w-6 h-6" type="checkbox"></input>
          <p className="">
            * I would like to receive offers, news and information via email.
          </p>
        </div>
        <div className="flex gap-4 items-center ">
          <input className="w-6 h-6" type="checkbox"></input>
          <p className="">
            * I provide consent to receive offers and information via Text at
            the mobile number provided above. Message and data rates may apply.
            To unsubscribe, text STOP and for help text HELP anytime.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <input className="w-6 h-6" type="checkbox"></input>
          <p className="">* I agree.</p>
        </div>
      </div> */}
      {/* <div className="w-[76%] mx-auto  gap-10 pt-10 flex justify-center ">
        <div className="">
          <button className="bg-[#cb1313] px-6 py-2 rounded-lg">
            <p className=" text-white font-shopee_bold text-[27px]">SUBMIT</p>
          </button>
        </div>
        <div className="">
          <button className="bg-black px-6 py-2 rounded-lg">
            <p className="text-white text-[27px]">RESET</p>
          </button>
        </div>
      </div> */}

      {/* <div className="w-full  pt-10 relative">
        <img src={BGImg} alt="" className="object-cover" />
        <div className="w-full absolute h-full top-0 flex flex-col justify-center items-center">
          <p className="font-jonitha lg:text-5xl w-full">#AboutDOMOISHI</p>
          <p className="font-nexa_bold uppercase text-[1.8rem] pt-6 w-[76%]">
            “The moment we tried the product, we fell in love. The brand creates
            an obsession and when I found it, it seemed like something our
            Virginia area would love. So far, that has been more than true.”
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Franchising;
