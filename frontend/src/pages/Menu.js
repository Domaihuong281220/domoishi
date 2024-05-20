/** @format */

import React, { useState } from "react";

import pork from "../assets/Menu/poke.png";
import ramen from "../assets/Menu/ramen.png";
import wing from "../assets/Menu/wingandappetizer.png";
import tea from "../assets/Menu/tea.png";
import { PokeBowl, Tea, WingAndAppetizer } from "../components";
import Ramen from "../components/Menu/Ramen";
import { path } from "../utils/Constant";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const [menu1, setMenu1] = useState(true);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);
  const [menu4, setMenu4] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-full h-fit  pv:max-md:h-fit lg:h-fit">
      <p className="w-full text-center font-jonitha text-5xl 2xl:text-6xl">
        MENU
      </p>
      <p className="font-nexa_bold text-3xl  pv:max-md:text-base pt-8">
        Items may vary by location.{" "}
        <a
          onClick={() => {
            navigate("../" + path.LOCATIONS);
          }}
          className="text-[#CB1313] underline cursor-pointer"
        >
          Find your Location
        </a>
      </p>

      <div class="flex space-x-6 pv:max-md:space-x-1 items-center justify-center pt-8">
        <div className="flex flex-col w-fit items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.799"
            height="19.799"
            viewBox="0 0 19.799 19.799"
            className={`${
              menu1 ? "opacity-100 mb-3 pv:max-md:mb-1" : "opacity-0"
            }`}
          >
            <rect
              id="Rectangle_311"
              data-name="Rectangle 311"
              width="14"
              height="14"
              transform="translate(9.9) rotate(45)"
            />
          </svg>
          <button
            className={` pv:max-md:text-[10px] pv:max-md:px-5 pv:max-md:py-[1px] focus:border-solid focus:border-2 focus:border-black rounded-full px-6 py-2 font-nexa text-3xl md:max-lg:text-[3vw] md:max-lag:text-[3vw] font-bold ${
              menu1
                ? "border-solid border-2 border-black rounded-full px-6 py-2"
                : "!border-none"
            }`}
            onClick={() => {
              setMenu1(true);
              setMenu2(false);
              setMenu3(false);
              setMenu4(false);
            }}
          >
            POKE
          </button>
        </div>
        <div className="flex flex-col w-fit items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.799"
            height="19.799"
            viewBox="0 0 19.799 19.799"
            className={`${
              menu2 ? "opacity-100 mb-3 pv:max-md:mb-1" : "opacity-0"
            }`}
          >
            <rect
              id="Rectangle_311"
              data-name="Rectangle 311"
              width="14"
              height="14"
              transform="translate(9.9) rotate(45)"
            />
          </svg>
          <button
            className={`pv:max-md:text-[10px] pv:max-md:px-5 pv:max-md:py-[1px] focus:border-solid focus:border-2 focus:border-black rounded-full px-6 py-2 font-nexa text-3xl md:max-lg:text-[3vw] font-bold  ${
              menu2
                ? "border-solid border-2 border-black rounded-full px-6 py-2"
                : "!border-none"
            }`}
            onClick={() => {
              setMenu1(false);
              setMenu2(true);
              setMenu3(false);
              setMenu4(false);
            }}
          >
            RAMEN
          </button>
        </div>
        <div className="flex flex-col w-fit items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.799"
            height="19.799"
            viewBox="0 0 19.799 19.799"
            className={`${
              menu3 ? "opacity-100 mb-3 pv:max-md:mb-1" : "opacity-0"
            }`}
          >
            <rect
              id="Rectangle_311"
              data-name="Rectangle 311"
              width="14"
              height="14"
              transform="translate(9.9) rotate(45)"
            />
          </svg>
          <button
            className={`pv:max-md:text-[10px] pv:max-md:px-5 pv:max-md:py-[1px] focus:border-solid focus:border-2 focus:border-black rounded-full px-6 py-2 font-nexa text-3xl md:max-lg:text-[3vw] font-bold  ${
              menu3
                ? "border-solid border-2 border-black rounded-full px-6 py-2"
                : "!border-none"
            }`}
            onClick={() => {
              setMenu1(false);
              setMenu2(false);
              setMenu3(true);
              setMenu4(false);
            }}
          >
            TEA
          </button>
        </div>
        <div className="flex flex-col w-fit items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.799"
            height="19.799"
            viewBox="0 0 19.799 19.799"
            className={`${
              menu4 ? "opacity-100 mb-3 pv:max-md:mb-1" : "opacity-0"
            }`}
          >
            <rect
              id="Rectangle_311"
              data-name="Rectangle 311"
              width="14"
              height="14"
              transform="translate(9.9) rotate(45)"
            />
          </svg>
          <button
            className={`pv:max-md:text-[10px] pv:max-md:px-5 pv:max-md:py-[1px] focus:border-solid focus:border-2 focus:border-black rounded-full px-6 py-2 font-nexa text-3xl md:max-lg:text-[3vw] font-bold  ${
              menu4
                ? "border-solid border-2 border-black rounded-full px-6 py-2"
                : "!border-none"
            }`}
            onClick={() => {
              setMenu1(false);
              setMenu2(false);
              setMenu3(false);
              setMenu4(true);
            }}
          >
            WING & APPETIZER
          </button>
        </div>
      </div>
      <div className="w-full mt-8">
        <img
          src={pork}
          alt=""
          className={`${menu1 ? "object-cover" : "hidden"}`}
        />
        <img
          src={ramen}
          alt=""
          className={`${menu2 ? "object-cover" : "hidden"}`}
        />
        <img
          src={tea}
          alt=""
          className={`${menu3 ? "object-cover" : "hidden"}`}
        />
        <img
          src={wing}
          alt=""
          className={`${menu4 ? "object-cover" : "hidden"}`}
        />
      </div>
      {menu1 ? (
        <PokeBowl />
      ) : menu2 ? (
        <Ramen />
      ) : menu3 ? (
        <Tea />
      ) : (
        <WingAndAppetizer />
      )}
    </div>
  );
};
export default Menu;
