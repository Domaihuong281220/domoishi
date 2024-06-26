/** @format */

import React from "react";

import tofu from "../../assets/Menu/tofu_1.png";
import pork from "../../assets/Menu/fork_1.png";
import chicken from "../../assets/Menu/chicken_1.png";
import chicken_katsu from "../../assets/Menu/chicken_kasu_1.png";
import shrimp_scrap from "../../assets/Menu/Shrimp_scrap.png";
import shrimp_1 from "../../assets/Menu/Shrimp_1.png";
import beef from "../../assets/Menu/BEEF.png";
// import shrimp_tem from "../../assets/Menu/sc";

import bestseller from "../../assets/Menu/bestseller.png";

const Ramen = () => {
  return (
    <div className="w-full h-[100vh ]  pv:max-md:h-fit lg:h-fit relative">
      <img
        src={bestseller}
        alt=""
        className="absolute top-[5rem]  pv:max-md:top-28 lg:w-44  pv:max-md:w-20 md:max-mdmax:top-[19vw] md:max-mdmax:w-[20vw] right-0 z-40 xl:w-60 pv:max-lg:hidden"
      />
      <p className="font-nexa_bold text-5xl 2xl:text-6xl pv:max-md:text-4xl">
        RAMEN
      </p>
      <p className="font-nexa_light font-extrabold  text-3xl 2xl:text-5xl mt-6 px-[15%] pv:max-md:px-[8%] pv:max-md:text-lg">
        Served with bean sprout, edamame, fish cake, green onion, sweet corn &
        soft boiled egg
      </p>

      {/* Step 1 */}

      <div className="w-full flex justify-center space-x-3 items-center mt-16  pv:max-md:mt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="29.436"
          viewBox="0 0 29.436 29.436"
        >
          <rect
            id="Rectangle_318"
            data-name="Rectangle 318"
            width="20.815"
            height="20.815"
            transform="translate(14.718) rotate(45)"
          />
        </svg>
        <p className="font-nexa_light font-bold text-3xl 2xl:text-5xl pv:max-md:text-xl">
          STEP 1: SOUP BASE
        </p>
      </div>
      <div class="flex flex-col my-12  pv:max-md:my-8">
        <div class="-my-1.5 overflow-x-auto">
          <div class="px-[12%] inline-block align-middle">
            <div class="border rounded-lg shadow overflow-hidden border-black ">
              <table class=" divide-y divide-gray-600 table-fixed w-full">
                <tbody class="divide-y divide-black">
                  <tr className="divide-x divide-gray-600">
                    <td class="  py-4 whitespace-nowrap font-nexa_bold text-[1.5vw] pv:max-md:text-[8px] pv:max-md:leading-4">
                      Shoyu Base
                      <br></br>(Soy Broth)
                    </td>
                    <td class="  py-4 whitespace-nowrap font-nexa_bold text-[1.5vw] pv:max-md:text-[8px] pv:max-md:leading-4">
                      Tonkotsu <br></br>(Pork Broth)
                    </td>
                    <td class="  py-4 whitespace-nowrap font-nexa_bold text-[1.5vw] pv:max-md:text-[8px] pv:max-md:leading-4">
                      Miso Soup
                    </td>
                    <td class="  py-4 whitespace-nowrap font-nexa_bold text-[1.5vw] pv:max-md:text-[8px] pv:max-md:leading-4">
                      Miso Base
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="font-nexa_light font-bold text-3xl 2xl:text-[40px] pv:max-md:text-xl pt-4">
          <p className="">(Spicy Soup Base Available)</p>
        </div>
      </div>

      <p className="font-nexa_light font-bold text-3xl 2xl:text-5xl  pv:max-md:text-xl">
        STEP 2: PROTEINS
      </p>

      {/* CARDS */}
      <div className="w-full flex justify-center space-x-[1vw] my-16  pv:max-md:my-8">
        <div className="w-[11%] relative">
          <img src={tofu} alt="" className="object-contain" />
          <p className="font-nexa_bold absolute top-2/3 left-1/2 transform -translate-x-1/2  -translate-y-1/2 w-full text-md 2xl:text-2xl pv:max-md:text-[10px]">
            TOFU
          </p>
        </div>
        <div className="w-[11%] relative">
          <img src={pork} alt="" className="object-contain" />
          <p className="font-nexa_bold absolute top-2/3 left-1/2 transform -translate-x-1/2  -translate-y-1/2 w-full text-md 2xl:text-2xl pv:max-md:text-[10px] text-white">
            PORK
          </p>
        </div>
        <div className="w-[11%] relative">
          <img src={chicken} alt="" className="object-contain" />
          <p className="font-nexa_bold absolute top-2/3 left-1/2 transform -translate-x-1/2  -translate-y-1/2 w-full text-md 2xl:text-2xl pv:max-md:text-[10px]">
            CHICKEN
          </p>
        </div>
        <div className="w-[11%] relative">
          <img src={shrimp_1} alt="" className="object-contain" />
          <p className=" uppercase font-nexa_bold absolute top-2/3 left-1/2 transform -translate-x-1/2  -translate-y-1/2 w-full text-md 2xl:text-2xl pv:max-md:text-[10px] text-white">
            Shrimp
            <br></br>tempura
          </p>
        </div>
        <div className="w-[11%] relative">
          <img src={beef} alt="" className="object-contain" />
          <p className="font-nexa_bold absolute top-2/3 left-1/2 transform -translate-x-1/2  -translate-y-1/2 w-full text-md 2xl:text-2xl pv:max-md:text-[10px] text-white">
            BEEF &<br></br>ONION
          </p>
        </div>
        <div className="w-[11%] relative">
          <img src={chicken_katsu} alt="" className="object-contain" />
          <p className="uppercase font-nexa_bold absolute top-2/3 left-1/2 transform -translate-x-1/2  -translate-y-1/2 w-full text-md 2xl:text-2xl pv:max-md:text-[10px] text-white">
            CHICKEN
            <br></br>Katsu
          </p>
        </div>
        <div className="w-[11%] relative">
          <img src={shrimp_scrap} alt="" className="object-contain" />
          <p className="font-nexa_bold absolute top-2/3 left-1/2 transform -translate-x-1/2  -translate-y-1/2 w-full text-md 2xl:text-2xl pv:max-md:text-[10px] text-white">
            SHRIMP & <br></br>CRABMEAT
          </p>
        </div>
      </div>
    </div>
  );
};
export default Ramen;
