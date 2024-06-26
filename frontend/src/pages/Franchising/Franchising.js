/** @format */

import React, { useState } from "react";
import img_Franchising_Banner from "../../assets/Franchising/Franchising_banner.png";
import BGImg from "../../assets/Franchising/Subtraction 1.png";
import axios from "axios";

const Franchising = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    stateProvince: "",
    city: "",
    zipPostalCode: "",
    email: "",
    mobile: "",
    preferredCity1: "",
    businessBackground: "",
    netWorth: "",
    cashAvailable: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/sendEmail`,
        formData
      );
      console.log(response);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Failed to submit form.");
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      address: "",
      country: "",
      stateProvince: "",
      city: "",
      zipPostalCode: "",
      email: "",
      mobile: "",
      preferredCity1: "",
      businessBackground: "",
      netWorth: "",
      cashAvailable: "",
    });
    window.location.reload();
  };

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
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="First Name"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start  gap-4">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *LAST NAME :{" "}
              </p>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Last Name:"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start gap-4">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *ADDRESS :{" "}
              </p>
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Address"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start gap-4">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                COUNTRY :{" "}
              </p>
              <input
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Country"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start gap-4">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *STATE PROVIDE:
              </p>
              <input
                name="stateProvince"
                value={formData.stateProvince}
                onChange={handleChange}
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="State/Province"
              ></input>
            </div>
            <div className="flex flex-col gap-10 pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start">
              <div className="w-full flex justify-end">
                <p className="w-[600px] text-right pv:max-md:text-center md:max-2xl:text-right  text-[14px] font-nexa_bold  2xl:max-dh_max:text-left pv:max-md:text-[14px] uppercase ">
                  *Please describe your business background/restaurant
                  experience including name(s) of franchise brands :
                </p>
              </div>
              <div className="flex justify-end pv:max-md:w-full md:max-2xl:w-full 2xl:max-dh_max:w-full">
                <textarea
                  name="businessBackground"
                  value={formData.businessBackground}
                  onChange={handleChange}
                  className=" w-full pv:max-md:w-full md:max-2xl:w-full 2xl:max-dh_max:w-full   h-fit border-[1px] border-[#707070] rounded-md p-2"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-10">
            <div className="flex items-center justify-between pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start gap-4 ">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                CITY:{" "}
              </p>
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="City"
              ></input>
            </div>
            <div className="flex items-center justify-between  pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start gap-4 ">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] pv:max-md:flex-col pv:max-md:items-start md:max-2xl:text-[14px]">
                ZIP/POSTAL CODE:{" "}
              </p>
              <input
                name="zipPostalCode"
                value={formData.zipPostalCode}
                onChange={handleChange}
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Zip / Postal Code"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start gap-4">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *EMAIL :{" "}
              </p>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Email Ex: Doce@gmail.com"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start gap-4">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *MOBILE :{" "}
              </p>
              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Phone Ex: +1 (757) xxxxx"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start gap-4">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px] ">
                *PREFERRED CITY 1:{" "}
              </p>
              <input
                name="netWorth"
                value={formData.netWorth}
                onChange={handleChange}
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Preferred City 1"
              ></input>
            </div>
            <div className="flex flex-col gap-10 pv:max-xl:gap-4  ">
              <div className="flex items-center justify-between pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start   2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start gap-4">
                <p className="font-nexa_bold text-[20px] uppercase pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                  *Net Worth :
                </p>
                <input
                  className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                  placeholder="Net Wotrh"
                ></input>
              </div>
              <div className="flex items-center justify-between pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start   md:max-2xl:flex-col md:max-2xl:items-start   2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start gap-4 ">
                <p className=" pv:max-lg:hidden font-nexa_bold text-[20px] uppercase pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                  *Cash Available <br /> for Investment :
                </p>
                <p className=" lg:hidden font-nexa_bold text-[20px] uppercase pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                  *Cash Available for Investment :
                </p>
                <input
                  name="cashAvailable"
                  value={formData.cashAvailable}
                  onChange={handleChange}
                  className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                  placeholder="Cash Available for Investment"
                ></input>
              </div>
            </div>
          </div>
        </div>
        {/* Desktop  */}
        <div className="grid grid-cols-2 gap-5 pv:max-xl:hidden">
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[1vw] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
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
              <p className="font-nexa_bold text-[1vw] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                CITY :
              </p>
            </div>
            <div className="col-span-2">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Location Ex: Virginia "
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[1vw] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *LAST NAME :
              </p>
            </div>
            <div className="col-span-2">
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Last Name:"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[1vw] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                ZIP/POSTAL CODE:
              </p>
            </div>
            <div className="col-span-2">
              <input
                name="zipPostalCode"
                value={formData.zipPostalCode}
                onChange={handleChange}
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Zip / Postal Code"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[1vw] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *ADDRESS :
              </p>
            </div>
            <div className="col-span-2">
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Address"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[1vw] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *EMAIL :
              </p>
            </div>
            <div className="col-span-2">
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Email Ex: Doce@gmail.com"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[1vw] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                COUNTRY :
              </p>
            </div>
            <div className="col-span-2">
              <input
                name="country"
                value={formData.country}
                onChange={handleChange}
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Country"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[1vw] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *MOBILE :
              </p>
            </div>
            <div className="col-span-2">
              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Phone Ex: +1 (757) xxxxx"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[1vw] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *STATE / PROVINCE :
              </p>
            </div>
            <div className="col-span-2">
              <input
                name="stateProvince"
                value={formData.stateProvince}
                onChange={handleChange}
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="State/Province"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[1vw] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                PREFERRED CITY 1:
              </p>
            </div>
            <div className="col-span-2">
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Preferred City 1"
              ></input>
            </div>
          </div>

          <div className="grid grid-cols-3 text-right gap-5  items-center ">
            <div className="col-span-3">
              <p className="font-nexa_bold text-[1vw] pv:max-md:text-[14px] md:max-2xl:text-[14px] uppercase">
                *Please describe your business background/restaurant experience
                including name(s) of franchise brands :
              </p>
            </div>
            <div className="col-span-3 ">
              <textarea
                name="businessBackground"
                value={formData.businessBackground}
                onChange={handleChange}
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-fit border-[1px] border-[#707070] rounded-md py-2 px-6"
                placeholder=""
              />
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-3 text-right gap-10 items-center py-5">
              <div className="col-span-1">
                <p className="font-nexa_bold text-[1vw] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                  *NET WORTH :
                </p>
              </div>
              <div className="col-span-2">
                <input
                  name="netWorth"
                  value={formData.netWorth}
                  onChange={handleChange}
                  className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                  placeholder="Net Worth"
                ></input>
              </div>
            </div>
            <div className="grid grid-cols-3 text-right gap-10 items-center ">
              <div className="col-span-1">
                <p className="font-nexa_bold text-[1vw] pv:max-md:text-[14px] md:max-2xl:text-[14px] uppercase">
                  Cash Available for Investment :
                </p>
              </div>
              <div className="col-span-2">
                <input
                  name="cashAvailable"
                  value={formData.cashAvailable}
                  onChange={handleChange}
                  className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                  placeholder="Cash Available for Investment"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[76%] mx-auto space-x-[2vw] gap-10 pt-10 flex justify-center ">
        <div className="">
          <button
            className="bg-[#cb1313] px-6 py-2 rounded-lg"
            onClick={handleSubmit}
          >
            <p className=" text-white font-shopee_bold text-[27px] pv:max-xl:text-[16px] xl:max-2xl:text-[20px]">
              SUBMIT
            </p>
          </button>
        </div>
        <div className="">
          <button
            className="bg-black px-6 py-2 rounded-lg"
            onClick={handleReset}
          >
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
          className="  h-fit pv:max-md:h-[200px] md:max-xl:h-[300px] xl:max-2xl:h-[400px] w-full object-contain"
        />
        <div className="w-full absolute h-full top-0 flex flex-col space-y-8  pv:max-lg:space-y-1  justify-center items-center">
          <p className="font-jonitha text-[4vw] w-full pv:max-ph:text-[4vw]">
            #AboutDOMOISHI
          </p>
          <p className=" custom_lineHeight font-nexa font-medium  text-center uppercase text-[1.5vw] pt-6  lg:pt-0 w-[80%]  pv:max-md:w-[90%] leading-10 pv:max-md:pt-0">
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
