import React from "react";

import { Row, Col } from "antd";

import PromoBG from "../../assets/HomePage/promo2.png"
import Promocontent from "../../assets/HomePage/Promocontent.png"


const Promo = () => {
    return (
        <div className="w-full h-fit relative ">
        <img src={PromoBG} alt="Promo" className="object-cover w-full" />
        <button className="absolute w-fit h-fit top-[45%] left-[14%] pv:max-md:hidden">
          <svg width="43.181" height="69.937" viewBox="0 0 43.181 69.937">
          <defs>
            <clipPath id="clip-path">
              <rect width="43.181" height="69.937" fill="none" />
            </clipPath>
          </defs>
          <g transform="translate(43.181 69.937) rotate(180)">
            <g clipPath="url(#clip-path)">
              <path d="M6.465.739.74,6.464a2.525,2.525,0,0,0,0,3.571L23.887,33.183a2.525,2.525,0,0,1,0,3.571L.74,59.9a2.525,2.525,0,0,0,0,3.571L6.465,69.2a2.525,2.525,0,0,0,3.572,0L42.443,36.752a2.524,2.524,0,0,0,0-3.568L10.037.74a2.525,2.525,0,0,0-3.572,0" fill="#fff" />
            </g>
          </g>
        </svg>
        </button>
        <button className="hidden absolute w-fit h-fit top-[35%] left-[14%] pv:max-md:block">
          <svg width="10" height="69.937" viewBox="0 0 43.181 69.937">
            <defs>
              <clipPath id="clip-path">
                <rect width="43.181" height="69.937" fill="none" />
              </clipPath>
            </defs>
            <g transform="translate(43.181 69.937) rotate(180)">
              <g clipPath="url(#clip-path)">
                <path d="M6.465.739.74,6.464a2.525,2.525,0,0,0,0,3.571L23.887,33.183a2.525,2.525,0,0,1,0,3.571L.74,59.9a2.525,2.525,0,0,0,0,3.571L6.465,69.2a2.525,2.525,0,0,0,3.572,0L42.443,36.752a2.524,2.524,0,0,0,0-3.568L10.037.74a2.525,2.525,0,0,0-3.572,0" fill="#fff" />
              </g>
            </g>
          </svg>
        </button>
        <button className="absolute w-fit h-fit top-[45%] right-[14%] pv:max-md:hidden">
          <svg id="Group_129" width="43.181" height="69.937" viewBox="0 0 43.181 69.937">
            <defs>
              <clipPath id="clip-path">
                <rect width="43.181" height="69.937" fill="none" />
              </clipPath>
            </defs>
            <g clipPath="url(#clip-path)">
              <path d="M6.465.739.74,6.464a2.525,2.525,0,0,0,0,3.571L23.887,33.183a2.525,2.525,0,0,1,0,3.571L.74,59.9a2.525,2.525,0,0,0,0,3.571L6.465,69.2a2.525,2.525,0,0,0,3.572,0L42.443,36.752a2.524,2.524,0,0,0,0-3.568L10.037.74a2.525,2.525,0,0,0-3.572,0" fill="#fff" />
            </g>
          </svg>

        </button>
        <button className="hidden absolute w-fit h-fit top-[35%] right-[14%] pv:max-md:block">
          <svg id="Group_129" width="10" height="69.937" viewBox="0 0 43.181 69.937">
            <defs>
              <clipPath id="clip-path">
                <rect width="43.181" height="69.937" fill="none" />
              </clipPath>
            </defs>
            <g clipPath="url(#clip-path)">
              <path d="M6.465.739.74,6.464a2.525,2.525,0,0,0,0,3.571L23.887,33.183a2.525,2.525,0,0,1,0,3.571L.74,59.9a2.525,2.525,0,0,0,0,3.571L6.465,69.2a2.525,2.525,0,0,0,3.572,0L42.443,36.752a2.524,2.524,0,0,0,0-3.568L10.037.74a2.525,2.525,0,0,0-3.572,0" fill="#fff" />
            </g>
          </svg>

        </button>
        {/* <img src={Promocontent} alt="Promo" className="absolute top-1/2 2xl:left-72 ph:max-md:left-16 ph:max-md:w-56 pv:max-ph:w-[12rem] pv:max-ph:left-12  xl:left-52 lg:left-32 transform  -translate-y-1/2 2xl:w-[68rem] xl:w-[40rem] lg:w-[35rem] laptop:w-[45rem]" /> */}
        <div className="2xl:w-[17vw] dv:w-[16vw] dh_max:w-[17vw] md:max-xl:w-[16vw] absolute pv:max-md:pr-20 pv:max-md:h-fit pv:max-md:w-full top-1/2 2xl:right-[17rem] dh_max:right-[18%] xl:right-[19%] md:max-xl:right-[19%] transform  -translate-y-1/2  h-fit flex flex-col pv:max-md:items-end items-center justify-center">
          <p className="font-jonitha text-white dv:text-[3.1vw] 2xl:text-[50px] md:max-xl:text-[3vw] pv:max-md:text-[15px]">TRY OUR <br></br>YUM DRUM <br></br>TRIO MEAL!</p>
          <p className="font-nexa_bold text-white 2xl:text-[18px] dv:text-[1vw] 2xl:px-4 md:max-xl:text-[1vw] pv:max-md:w-[5rem] pv:max-md:text-[5px]">3 drums, fries, and a Korean donut are the perfect combo.</p>
          <button className="w-fit bg-black text-[20px] md:max-xl:text-[1vw] px-8 py-4 rounded-full font-shopee_bold mt-12 lg:mt-4 text-white pv:max-md:m-1 pv:max-md:p-2 pv:max-md:text-[5px] ">DISCOVER NOW</button>
          </div>
        </div>
    );
}
export default Promo;