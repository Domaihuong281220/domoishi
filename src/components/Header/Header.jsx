/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { path } from "../../utils/Constant";
import { SearchOutlined } from "@ant-design/icons";
import logo from "./domoishilogo.png";

const Header = () => {
  return (
    <div className="h-fit bg-red-500">
      <nav class="bg-white   w-full z-20 top-0 start-0 pt-8  ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-[12%]">
          <a href="/" class="flex items-center space-x-1 rtl:space-x-reverse">
            <img src={logo} class="2xl:h-32 lg:w-56" alt="Logo" />
          </a>
          <div class="flex md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <button className="bg-[#CB1313] text-white font-shopee_bold py-3 px-4 rounded-full">
              ORDER NOW
            </button>
            {/* <button data-collapse-toggle="" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button> */}
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-shopee_bold text-[0.8rem] 2xl:text-xl  border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a href="/" class="block py-2 px-1 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 2xl:mt-10" aria-current="page">MENU</a>
              </li>
              <li>
                <a href="/bctc" class="block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  2xl:mt-10">LOCATIONS</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  2xl:mt-10">FRANCHISING</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  2xl:mt-10">ABOUT US</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  2xl:mt-10">CARRERS</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  2xl:mt-10">NEW</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
