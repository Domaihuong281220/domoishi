import React from "react";

import tofu from "../../assets/Menu/tofu.png"
import pork from "../../assets/Menu/pork.png"
import chicken from "../../assets/Menu/chicken.png"
import shrimp from "../../assets/Menu/shrimpandcarabmeet.png"
import bestseller from "../../assets/Menu/bestseller.png"


const Ramen = () => {
    return (

        <div className="w-full h-[100vh]  pv:max-md:h-fit lg:h-fit relative">
            <img src={bestseller} alt="" className="absolute top-[5rem]  pv:max-md:top-24 lg:w-44  pv:max-md:w-20 right-0 z-40 xl:w-60"/>
            <p className="font-nexa_bold text-5xl 2xl:text-6xl pv:max-md:text-4xl">RAMEN</p>
            <p className="font-nexa_light font-extrabold  text-3xl 2xl:text-5xl mt-6 px-[15%] pv:max-md:px-[8%] pv:max-md:text-lg">Served with bean sprout, edamame, fish cake, boiled egg, sweet corn & green onion</p>

            {/* Step 1 */}

            <div className="w-full flex justify-center space-x-3 items-center mt-16  pv:max-md:mt-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="29.436" viewBox="0 0 29.436 29.436">
                    <rect id="Rectangle_318" data-name="Rectangle 318" width="20.815" height="20.815" transform="translate(14.718) rotate(45)" />
                </svg>
                <p className="font-nexa_light font-bold text-3xl 2xl:text-5xl pv:max-md:text-xl">STEP 1: CHOOSE YOUR BASE</p>
            </div>
            <div class="flex flex-col my-12  pv:max-md:my-8">
                <div class="-m-1.5 overflow-x-auto">
                    <div class="px-[12%] inline-block align-middle">
                        <div class="border rounded-lg shadow overflow-hidden border-black ">
                            <table class=" divide-y divide-gray-600 table-fixed w-full">

                                <tbody class="divide-y divide-black">
                                    <tr className="divide-x divide-gray-600">
                                    <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl pv:max-md:text-[8px] pv:max-md:leading-4">Shoyu Base <br></br>(Soy Broth)</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl pv:max-md:text-[8px] pv:max-md:leading-4">Tonkotsu <br></br>(Pork Broth)</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl pv:max-md:text-[8px] pv:max-md:leading-4">Miso Soup</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl pv:max-md:text-[8px] pv:max-md:leading-4">Chicken Base</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <p className="font-nexa_light font-bold text-3xl 2xl:text-5xl  pv:max-md:text-xl">STEP 2: PROTEINS</p>

            {/* CARDS */}
            <div className="w-full flex justify-center space-x-4 my-16  pv:max-md:my-8">
                <div className="w-[18%] relative">
                    <img src={tofu} alt="" className="object-contain" />
                    <p className="font-nexa_bold absolute top-2/3 left-1/2 transform -translate-x-1/2  -translate-y-1/2 w-full text-md 2xl:text-2xl pv:max-md:text-[10px]">TOFU</p>
                </div>
                <div className="w-[18%] relative">
                    <img src={pork} alt="" className="object-contain" />
                    <p className="font-nexa_bold absolute top-2/3 left-1/2 transform -translate-x-1/2  -translate-y-1/2 w-full text-md 2xl:text-2xl pv:max-md:text-[10px] text-white">PORK</p>
                </div>
                <div className="w-[18%] relative">
                    <img src={chicken} alt="" className="object-contain" />
                    <p className="font-nexa_bold absolute top-2/3 left-1/2 transform -translate-x-1/2  -translate-y-1/2 w-full text-md 2xl:text-2xl pv:max-md:text-[10px]">CHICKEN</p>
                </div>
                <div className="w-[18%] relative">
                    <img src={shrimp} alt="" className="object-contain" />
                    <p className="font-nexa_bold absolute top-2/3 left-1/2 transform -translate-x-1/2  -translate-y-1/2 w-full text-md 2xl:text-2xl pv:max-md:text-[10px] text-white">SHRIMP & <br></br>CRABMEAT</p>
                </div>
            </div>
        </div>

    );
}
export default Ramen;