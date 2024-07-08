/** @format */

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { path } from "../../utils/Constant";
import { SearchOutlined } from "@ant-design/icons";
import logo from "./domoishilogo.png";

const Header = () => {
  const location = useLocation(); // Get the current location

  // Log the current path
  const navigate = useNavigate();
  return (
    <div className="h-fit bg-red-500">
      <nav class="bg-white w-full z-20 top-0 start-0 pt-8 md:max-lg:pb-8   pv:max-md:pt-0 ">
        <div class="flex flex-wrap items-center justify-between mx-[10%] ph:max-md:mx-[8%] pv:max-ph:mx-[6%] 2xl:pb-4">
          <a href="/" class="flex items-center rtl:space-x-reverse">
            <img
              src={logo}
              class="2xl:h-fit w-[14vw] lg:mb-4 2xl:mb-0 pv:max-md:w-12  pv:max-md:mt-4"
              alt="Logo"
            />
          </a>

          <div
            class="items-center justify-between w-full pv:max-md:w-fit md:flex md:w-auto md:order-1"
            id=""
          >
            <ul class="flex flex-row p-4 md:p-0 mt-4 font-shopee_bold text-[1vw] pv:max-md:text-[1.2vw]  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a
                  href="/menu"
                  class={`${(location.pathname === '/menu')?"block py-2 px-1  rounded md:bg-transparent text-[#CB1313]  md:p-0 2xl:mt-10" : "block py-2 px-1  rounded md:bg-transparent md:hover:text-[#CB1313]  md:p-0 2xl:mt-10"}`}
                  aria-current="page"
                >
                  MENU
                </a>
              </li>
              <li>
                <a
                  href="/locations"
                  class={`${(location.pathname === '/locations')?"block py-2 px-1  rounded md:bg-transparent text-[#CB1313]  md:p-0 2xl:mt-10" : "block py-2 px-1  rounded md:bg-transparent md:hover:text-[#CB1313]  md:p-0 2xl:mt-10"}`}
                >
                  LOCATIONS
                </a>
              </li>
              <li>
                <a
                  href="/franchising"
                  class={`${(location.pathname === '/franchising')?"block py-2 px-1  rounded md:bg-transparent text-[#CB1313]  md:p-0 2xl:mt-10" : "block py-2 px-1  rounded md:bg-transparent md:hover:text-[#CB1313]  md:p-0 2xl:mt-10"}`}
                >
                  FRANCHISING
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  class={`${(location.pathname === '/about')?"block py-2 px-1  rounded md:bg-transparent text-[#CB1313]  md:p-0 2xl:mt-10" : "block py-2 px-1  rounded md:bg-transparent md:hover:text-[#CB1313]  md:p-0 2xl:mt-10"}`}
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  class={`${(location.pathname === '/careers')?"block py-2 px-1  rounded md:bg-transparent text-[#CB1313]  md:p-0 2xl:mt-10" : "block py-2 px-1  rounded md:bg-transparent md:hover:text-[#CB1313]  md:p-0 2xl:mt-10"}`}
                >
                  CAREERS
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  class={`${(location.pathname === '/news')?"block py-2 px-1  rounded md:bg-transparent text-[#CB1313]  md:p-0 2xl:mt-10" : "block py-2 px-1  rounded md:bg-transparent md:hover:text-[#CB1313]  md:p-0 2xl:mt-10"}`}
                >
                  NEWS
                </a>
              </li>
            </ul>
          </div>
          <div class="flex md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <a href="/locations" className="w-fit h-fit">
              <button className="bg-[#CB1313]  pv:max-md:mt-4 text-white font-shopee_bold text-[1.1vw] py-[1.1vw] px-[3.3vw]  rounded-full 2xl:mt-8 pv:max-md:py-[5px] pv:max-md:px-[10px] pv:max-md:text-[7px]">
                ORDER NOW
              </button>
            </a>
          </div>
          
        </div>
      </nav>
    </div>
  );
};

export default Header;
