/** @format */

import React from "react";

import FooterAssets from "../assets/Footer.png";
import { path } from "../utils/Constant";
const Footer = () => {
  return (
    <div className="w-full h-[22.5vw] pv:max-md:h-[40.5vw] relative flex flex-col space-y-[1.5vw] pv:max-md:space-y-[1vw] items-center justify-center">
      <div className="flex space-x-8  pv:max-md:space-x-2 justify-center items-center w-full  text-[1.7vw] pv:max-md:text-[2.5vw] ">
        <a href="/menu" className="font-shopee_bold">
          MENU
        </a>
        <a href="/locations" className="font-shopee_bold">
          LOCATIONS
        </a>
        <a href="/franchising" className="font-shopee_bold">
          FRANCHISING
        </a>
        <a href={path.ABOUTUS} className="font-shopee_bold">
          ABOUT US
        </a>
        <a href={path.CAREERS} className="font-shopee_bold">
          CAREERS
        </a>
        <a href={path.NEWS} className="font-shopee_bold">
          NEWS
        </a>
      </div>
      <p className="font-shopee_regular text-xl  pv:max-md:text-[10px]  pv:max-md:py-1">
        ALL RIGHTS RESERVED | DOMOISHI ©2024
      </p>
      <div className="flex justify-center pv:max-md:w-[76%]">
        <button className="w-[40%] relative">
          <img src={FooterAssets} alt="" className="object-contain" />
          <p className="absolute top-1/2 left-[4vw]  transform -translate-x-1/2 -translate-y-1/2  text-[1vw] pv:max-md:text-[3vw] md:max-mdmid:text-[2.5vw] mdmid:max-mdmax:text-[2.3vw] md:max-mdmid:left-[10vw] mdmid:max-mdmax:left-[9vw] pv:max-md:left-[13vw] mdmax:max-lgmax:left-[7.5vw] sm:max-md:left-[10.5vw] mdmax:max-lgmax:text-[1.8vw] font-shopee_bold ">
            FOLLOW US
          </p>
        </button>
        <div className="w-fit flex space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="62.668"
            viewBox="0 0 62.668 62.668"
          >
            <g
              id="Group_136"
              data-name="Group 136"
              transform="translate(-951.702 -4718.5)"
            >
              <rect
                id="Rectangle_216"
                data-name="Rectangle 216"
                width="59.668"
                height="59.668"
                rx="11.207"
                transform="translate(953.202 4720)"
                stroke="#000"
                stroke-miterlimit="10"
                stroke-width="3"
              />
              <path
                id="Path_13441"
                data-name="Path 13441"
                d="M37.5,19.052c1.917,0,5.159.029,5.159.029V12.568s-2.255-.057-5.215,0-10.234.281-10.234,8.851v5.526H21.57V33.71h5.639V54.854h8.062V33.71h6.6l.79-6.765H35.271V21.419s.311-2.368,2.227-2.368"
                transform="translate(950.337 4720.124)"
                fill="#fff"
              />
            </g>
          </svg>
          
          <svg width="50" height="62.668" viewBox="0 0 62.668 62.668">
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectangle_198"
                  width="36"
                  height="29.259"
                  fill="none"
                />
              </clipPath>
            </defs>
            <g transform="translate(-1107.765 -4718.5)">
              <path
                d="M11.207,0H48.462A11.206,11.206,0,0,1,59.668,11.206V48.461A11.207,11.207,0,0,1,48.461,59.668H11.207A11.207,11.207,0,0,1,0,48.461V11.207A11.207,11.207,0,0,1,11.207,0Z"
                transform="translate(1109.265 4720)"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="3"
              />
              <g
                transform="translate(1120.641 4735.704)"
                clipPath="url(#clip-path)"
              >
                <path
                  d="M11.322,29.259C24.909,29.259,32.338,18,32.338,8.242c0-.319,0-.638-.022-.954A14.981,14.981,0,0,0,36,3.463a14.8,14.8,0,0,1-4.24,1.163A7.431,7.431,0,0,0,35.008.54a14.866,14.866,0,0,1-4.691,1.795A7.387,7.387,0,0,0,17.542,7.384a7.553,7.553,0,0,0,.189,1.687A20.988,20.988,0,0,1,2.505,1.352a7.39,7.39,0,0,0,2.288,9.86,7.33,7.33,0,0,1-3.347-.925c0,.033,0,.063,0,.094a7.388,7.388,0,0,0,5.924,7.241,7.4,7.4,0,0,1-1.944.261,7.3,7.3,0,0,1-1.389-.136,7.4,7.4,0,0,0,6.9,5.133,14.811,14.811,0,0,1-9.174,3.162A14.98,14.98,0,0,1,0,25.939a20.889,20.889,0,0,0,11.322,3.32"
                  fill="#fff"
                />
              </g>
            </g>
          </svg>
          <svg width="50" height="62.668" viewBox="0 0 62.668 62.668">
            <defs>
              <clipPath id="clip-path-1">
                <rect
                  id="Rectangle_211"
                  width="31.828"
                  height="36.393"
                  transform="translate(0 0)"
                  fill="none"
                />
              </clipPath>
            </defs>
            <g transform="translate(-1186.832 -4718.5)">
              <path
                d="M11.207,0H48.462A11.206,11.206,0,0,1,59.668,11.206V48.461A11.207,11.207,0,0,1,48.461,59.668H11.207A11.207,11.207,0,0,1,0,48.461V11.207A11.207,11.207,0,0,1,11.207,0Z"
                transform="translate(1188.332 4720)"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="3"
              />
              <g transform="translate(1202.252 4732.665)">
                <g transform="translate(0 0.002)" clipPath="url(#clip-path-1)">
                  <path
                    d="M31.036,8.5A7.894,7.894,0,0,1,23.142.6c0-.03,0-.061,0-.091h0V0H16.928V24.824A5.355,5.355,0,1,1,13,19.659V13.341a11.571,11.571,0,1,0,0,22.967A11.569,11.569,0,0,0,23.142,24.824V11.473a8.854,8.854,0,0,0,8.686,3.192V8.459q-.391.039-.793.039"
                    transform="translate(0 -0.002)"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Footer;
