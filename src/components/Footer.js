/** @format */

import React from "react";

import FooterAssets from "../assets/Footer.png";
import { path } from "../utils/Constant";
const Footer = () => {
  return (
    <div className="w-full h-fit relative flex flex-col items-center justify-center py-14  pv:max-md:py-8">
      <div className="flex space-x-8  pv:max-md:space-x-2 justify-center items-center w-[60%]  pv:max-md:w-[76%]  pv:max-md:text-[10px] text-[1.2rem]">
        <a href="" className="font-shopee_bold">
          MENU
        </a>
        <a href="" className="font-shopee_bold">
          LOCATIONS
        </a>
        <a href="" className="font-shopee_bold">
          FRANCHISING
        </a>
        <a href={path.ABOUTUS} className="font-shopee_bold">
          ABOUT US
        </a>
        <a href={path.CAREERS} className="font-shopee_bold">
          CARRERS
        </a>
        <a href={path.NEWS} className="font-shopee_bold">
          NEW
        </a>
      </div>
      <p className="font-shopee_regular text-xl  pv:max-md:text-[10px]  pv:max-md:py-1 py-4">
        ALL RIGHTS RESERVED | DOMOISHI ©2024
      </p>
      <div className="flex  pv:max-md:w-[76%]">
        <button className="w-[40%] relative">
          <img src={FooterAssets} alt="" className="object-contain" />
          <p className="absolute top-1/2 left-24  transform -translate-x-1/2 -translate-y-1/2  pv:max-md:text-[13px]  pv:max-md:left-14  pv:max-md:w-full font-shopee_bold text-xl">
            FOLLOW US
          </p>
        </button>
        <div className="w-[60%] flex space-x-3">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="62.668"
            viewBox="0 0 62.668 62.668"
          >
            <g
              id="Group_137"
              data-name="Group 137"
              transform="translate(-1028.868 -4718.5)"
            >
              <path
                id="Rectangle_213"
                data-name="Rectangle 213"
                d="M11.207,0H48.462A11.206,11.206,0,0,1,59.668,11.206V48.461A11.207,11.207,0,0,1,48.461,59.668H11.207A11.207,11.207,0,0,1,0,48.461V11.207A11.207,11.207,0,0,1,11.207,0Z"
                transform="translate(1030.368 4720)"
                stroke="#000"
                stroke-miterlimit="10"
                stroke-width="3"
              />
              <path
                id="Path_13442"
                data-name="Path 13442"
                d="M90.663,23.741a11.47,11.47,0,0,1,1.64-6.278,8.923,8.923,0,0,1,4.764-3.626,18.607,18.607,0,0,1,6.025-.667q5.848-.012,11.7.037a11,11,0,0,1,6.141,1.717,8.528,8.528,0,0,1,3.787,5.824,26.676,26.676,0,0,1,.379,4.407c.019,4.2-.027,8.392-.094,12.587a10.173,10.173,0,0,1-1.413,5.217,8.755,8.755,0,0,1-4.977,3.882,19.238,19.238,0,0,1-5.962.655q-5.741.012-11.481-.028a11.6,11.6,0,0,1-5.731-1.349,8.693,8.693,0,0,1-4.158-5.178,18.378,18.378,0,0,1-.642-4.7c-.014-.28-.039-9.283.025-12.5M94.006,38.72a5.871,5.871,0,0,0,2.261,4.191,7.5,7.5,0,0,0,4.565,1.405,133.7,133.7,0,0,0,15.454-.162,6.14,6.14,0,0,0,3.148-1.206,6.427,6.427,0,0,0,2.447-5.326c.1-3.861.077-7.726.063-11.588a40.37,40.37,0,0,0-.219-4.144,5.862,5.862,0,0,0-1.928-3.858,6.654,6.654,0,0,0-4.473-1.619c-4.193-.084-8.388-.143-12.581-.116a15.269,15.269,0,0,0-4.6.506A5.664,5.664,0,0,0,94,21.968c-.234,3.016-.2,14.809,0,16.752"
                transform="translate(952.702 4719.5)"
                fill="#fff"
              />
              <path
                id="Path_13443"
                data-name="Path 13443"
                d="M107.9,21.508a8.842,8.842,0,1,1-8.921,8.752,8.845,8.845,0,0,1,8.921-8.752m5.69,8.9a5.718,5.718,0,1,0-5.666,5.64,5.744,5.744,0,0,0,5.666-5.64"
                transform="translate(952.702 4719.5)"
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
