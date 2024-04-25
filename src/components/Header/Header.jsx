/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { path } from "../../utils/Constant";
import { SearchOutlined } from "@ant-design/icons";
import logo from "./domoishilogo.png";

const Header = () => {
  return (
    <div className="h-fit bg-red-500">
      <nav class="bg-white   w-full z-20 top-0 start-0 pt-8  pv:max-md:pt-0 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-[12%] pv:max-md:mx-[8%] 2xl:pb-4">
          <a href="/" class="flex items-center space-x-1 rtl:space-x-reverse">
            <img src={logo} class="2xl:h-fit lg:w-56 lg:mb-4 2xl:mb-0 pv:max-md:w-12  pv:max-md:mt-4" alt="Logo" />
          </a>
          
          <div class="items-center justify-between w-full pv:max-md:w-fit md:flex md:w-auto md:order-1" id="">
            <ul class="flex flex-row p-4 md:p-0 mt-4 font-shopee_bold text-[0.8rem] pv:max-md:text-[0.4rem] 2xl:text-xl  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a href="/menu" class="block py-2 px-1  rounded md:bg-transparent  md:p-0 2xl:mt-10" aria-current="page">MENU</a>
              </li>
              <li>
                <a href="/locations" class="block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  2xl:mt-10">LOCATIONS</a>
              </li>
              <li>
                <a href="/franchising" class="block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  2xl:mt-10">FRANCHISING</a>
              </li>
              <li>
                <a href="/about" class="block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  2xl:mt-10">ABOUT US</a>
              </li>
              <li>
                <a href="/careers" class="block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  2xl:mt-10">CARRERS</a>
              </li>
              <li>
                <a href="/news" class="block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  2xl:mt-10">NEW</a>
              </li>
            </ul>
          </div>
          <div class="flex md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <button className="bg-[#CB1313] pv:max-md:mt-4 text-white font-shopee_bold py-3 px-4 rounded-full 2xl:mt-8 pv:max-md:py-[5px] pv:max-md:px-[10px] pv:max-md:text-[7px]">
              ORDER NOW
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
