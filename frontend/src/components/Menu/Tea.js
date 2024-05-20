import React from "react";

import housemilktea from "../../assets/Menu/House Milk Tea.png"
import classicthai from "../../assets/Menu/Thai-Tea-(1).png"
import signatureamber from "../../assets/Menu/Signature-Amber.png"
import matchalatte from "../../assets/Menu/matchalatte.png"
import coffeemilktea from "../../assets/Menu/coffeemilktea.png"
import oolongmilktea from "../../assets/Menu/oolongmilktea.png"
import tarolover from "../../assets/Menu/Taro Lover.png"
import jasmine from "../../assets/Menu/jasminemilktea.png"
import roseyogurt from "../../assets/Menu/roseyogurt.png"
import peachberry from "../../assets/Menu/peachberry.png"
import peachoolong from "../../assets/Menu/peachoolong.png"
import xoxo from "../../assets/Menu/xoxo.png"
import smoothies from "../../assets/Menu/Group 143.png"
import snowcream from "../../assets/Menu/CREAM.png"



const Tea = () => {
    return (

        <div className="w-full px-[12%] pv:max-lg:px-[8%] relative">
            <img src={xoxo} alt="" className="absolute top-[50rem] 2xl:top-[65rem]  pv:max-md:w-20  pv:max-md:top-[23rem] md:max-mdmax:w-32 md:max-mdmax:top-[65vw]  lg:w-44 lg:max-xl:top-[61vw] right-0 z-40 2xl:w-60" />
            <p className="font-nexa_bold text-5xl 2xl:text-6xl pv:max-md:text-4xl">SPECIAL DRINKS</p>

            <div class="grid grid-cols-4 gap-4 my-[3vw]">
                <div>
                    <img src={housemilktea} alt="" className="object-contain" />
                    <p className="font-nexa_bold w-full  text-[1vw] pv:max-md:text-[8px] 2xl:text-2xl">HOUSE MILK TEA</p>
                    <p className="font-svn_rust font-semibold  text-[1vw] pv:max-md:text-[8px] px-4  pv:max-md:px-0 pv:max-md:leading-[10px]  py-2">Fresh Brewed Thai Tea W. Premium Cream & Boba</p>
                </div>
                <div>
                    <div>
                        <img src={classicthai} alt="" className="object-contain" />
                        <p className="font-nexa_bold w-full  text-[1vw] pv:max-md:text-[8px] 2xl:text-2xl">CLASSIC THAI TEA</p>
                        <p className="font-svn_rust font-semibold  text-[1vw] pv:max-md:text-[8px] px-4  pv:max-md:px-0 pv:max-md:leading-[10px]  py-2">Premium House Blend Black Tea W. Cream & Boba</p>
                    </div>
                </div>
                <div><div>
                    <img src={signatureamber} alt="" className="object-contain" />
                    <p className="font-nexa_bold w-full  text-[1vw] pv:max-md:text-[8px] 2xl:text-2xl">SIGNATURE AMBER</p>
                    <p className="font-svn_rust font-semibold  text-[1vw] pv:max-md:text-[8px] px-4  pv:max-md:px-0 pv:max-md:leading-[10px]  py-2">Special Crafted Brown Sugar Boba Paired With Creamy Milk</p>
                </div></div>
                <div><div>
                    <img src={matchalatte} alt="" className="object-contain" />
                    <p className="font-nexa_bold w-full  text-[1vw] pv:max-md:text-[8px] 2xl:text-2xl">MATCHA LATTE</p>
                    <p className="font-svn_rust font-semibold  text-[1vw] pv:max-md:text-[8px] px-4  pv:max-md:px-0 pv:max-md:leading-[10px]  py-2">Smooth Cold & Creamy Organic Japanese Green Tea</p>
                </div></div>
                <div><div>
                    <img src={oolongmilktea} alt="" className="object-contain" />
                    <p className="font-nexa_bold w-full  text-[1vw] pv:max-md:text-[8px] 2xl:text-2xl">OOLONG MILK TEA</p>
                    <p className="font-svn_rust font-semibold  text-[1vw] pv:max-md:text-[8px] px-4  pv:max-md:px-0 pv:max-md:leading-[10px]  py-2">Traditional Blend Of Milk And Oolong Tea.</p>
                </div></div>
                <div><div>
                    <img src={coffeemilktea} alt="" className="object-contain" />
                    <p className="font-nexa_bold w-full  text-[1vw] pv:max-md:text-[8px] 2xl:text-2xl">COFFEE MILK TEA</p>
                    <p className="font-svn_rust font-semibold  text-[1vw] pv:max-md:text-[8px] px-4  pv:max-md:px-0 pv:max-md:leading-[10px]  py-2">Classic Milk Tea Paired With Delicious Cold-Brewed Coffee</p>
                </div></div>
                <div><div>
                    <img src={tarolover} alt="" className="object-contain" />
                    <p className="font-nexa_bold w-full  text-[1vw] pv:max-md:text-[8px] 2xl:text-2xl">TARO LOVER</p>
                    <p className="font-svn_rust font-semibold  text-[1vw] pv:max-md:text-[8px] px-4  pv:max-md:px-0 pv:max-md:leading-[10px]  py-2">Hand Crafted Taro Tea W. Cream & Boba</p>
                </div></div>
                <div><div>
                    <img src={jasmine} alt="" className="object-contain" />
                    <p className="font-nexa_bold w-full  text-[1vw] pv:max-md:text-[8px] 2xl:text-2xl">JASMINE MILK TEA</p>
                    <p className="font-svn_rust font-semibold  text-[1vw] pv:max-md:text-[8px] px-4  pv:max-md:px-0 pv:max-md:leading-[10px]  py-2">Premium House Blend Black Choice Jasmine Green Tea W. Fresh Cream & Boba</p>
                </div></div>
            </div>
            <div class="grid grid-cols-3 gap-4  px-[12%]">
                <div class=""><div>
                    <img src={peachoolong} alt="" className="object-contain" />
                    <p className="font-nexa_bold w-full  text-[1vw] pv:max-md:text-[8px] 2xl:text-2xl">PEACH OOLONG TEA</p>
                    <p className="font-svn_rust font-semibold  text-[1vw] pv:max-md:text-[8px] px-4  pv:max-md:px-0 pv:max-md:leading-[10px]  py-2">Sparkling Strawberry Infused W. Peach Flavor Syrup</p>
                </div></div>
                <div class=""><div>
                    <img src={peachberry} alt="" className="object-contain" />
                    <p className="font-nexa_bold w-full  text-[1vw] pv:max-md:text-[8px] 2xl:text-2xl">PEACH BERRY TEA</p>
                    <p className="font-svn_rust font-semibold  text-[1vw] pv:max-md:text-[8px] px-4  pv:max-md:px-0 pv:max-md:leading-[10px]  py-2">Sparkling Strawberry Infused W. Peach Flavor Syrup</p>
                </div></div>
                <div class=""><div>
                    <img src={roseyogurt} alt="" className="object-contain" />
                    <p className="font-nexa_bold w-full  text-[1vw] pv:max-md:text-[8px] 2xl:text-2xl">ROSE YOGURT TEA</p>
                    <p className="font-svn_rust font-semibold  text-[1vw] pv:max-md:text-[8px] px-4  pv:max-md:px-0 pv:max-md:leading-[10px]  py-2">Jasmine Green Tea W. Floral Aroma And Yogurt Syrup</p>
                </div></div>

            </div>
            
            <div class="flex flex-col my-12 ">
                <div class="-my-1.5 overflow-x-auto">
                    <div class=" inline-block align-middle">
                        <div class="border rounded-lg shadow overflow-hidden border-black ">
                            <table class=" divide-y divide-black table-fixed w-full">

                                <tbody class="divide-y divide-black">
                                    
                                    <tr className="divide-x divide-black">
                                        <td class="0 py-4 whitespace-nowrap font-nexa_bold  text-[1.5vw] ">GOLDEN FRUIT TEA</td>
                                        <td class="0 py-4 whitespace-nowrap font-nexa_bold text-[1.5vw]  ">LYCHEE ROSE TEA</td>
                                        <td class="0 py-4 whitespace-nowrap font-nexa_bold text-[1.5vw] ">PINE STRAWBERRY TEA</td>
                                        <td class="0 py-4 whitespace-nowrap font-nexa_bold text-[1.5vw] ">WATERMELON TEA</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <p className="w-full text-center font-nexa_light font-bold text-5xl 2xl:text-6xl pv:max-md:text-xl pv:max-md:pt-0 pt-12">SMOOTHIES & SNOW CREAM</p>

            {/* smoothies */}

            <div class="flex w-full justify-start">
                <div className=" w-[70%]">
                    <img src={smoothies} alt="" className="object-cover" />
                </div>

                <div className=" w-[30%] flex flex-col justify-center">
                    <p className="font-nexa_light font-black text-[#CB1313] text-left text-4xl  pv:max-md:text-base">SMOOTHIES</p>
                    <div className="h-[2px] w-full bg-black my-4"></div>
                    <div className="flex justify-start items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 19.799 19.799" className=" pv:max-lg:hidden">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="14" height="14" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 19.799 19.799" className=" pv:max-lg:block hidden !m-0">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="10" height="10" transform="translate(9.9) rotate(45)" />
                        </svg>

                        <p className="font-nexa_bold text-xl  pv:max-md:text-[6px] pv:max-md:leading-[10px]">ALMOND</p>
                    </div>
                    <div className="flex justify-start items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 19.799 19.799" className=" pv:max-lg:hidden">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="14" height="14" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 19.799 19.799" className=" pv:max-md:block hidden !m-0">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="10" height="10" transform="translate(9.9) rotate(45)" />
                        </svg>

                        <p className="font-nexa_bold text-xl pv:max-md:text-[6px] pv:max-md:leading-[10px]">CHOCOLATE</p>
                    </div>
                    <div className="flex justify-start items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 19.799 19.799" className=" pv:max-lg:hidden">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="14" height="14" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 19.799 19.799" className=" pv:max-md:block hidden !m-0">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="10" height="10" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <p className="font-nexa_bold text-xl pv:max-md:text-[6px] pv:max-md:leading-[10px]">COCONUT</p>
                    </div>
                    <div className="flex justify-start items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 19.799 19.799" className=" pv:max-lg:hidden">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="14" height="14" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 19.799 19.799" className=" pv:max-md:block hidden !m-0">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="10" height="10" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <p className="font-nexa_bold text-xl pv:max-md:text-[6px] pv:max-md:leading-[10px]">COFFEE</p>
                    </div>
                    <div className="flex justify-start items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 19.799 19.799" className=" pv:max-lg:hidden">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="14" height="14" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 19.799 19.799" className=" pv:max-md:block hidden !m-0">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="10" height="10" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <p className="font-nexa_bold text-xl pv:max-md:text-[6px] pv:max-md:leading-[10px]">MANGO</p>
                    </div>
                    <div className="flex justify-start items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 19.799 19.799" className=" pv:max-lg:hidden">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="14" height="14" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 19.799 19.799" className=" pv:max-md:block hidden !m-0">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="10" height="10" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <p className="font-nexa_bold text-xl pv:max-md:text-[6px] pv:max-md:leading-[10px]">STRAWBERRY</p>
                    </div>
                    <div className="flex justify-start items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 19.799 19.799" className=" pv:max-lg:hidden">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="14" height="14" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 19.799 19.799" className=" pv:max-md:block hidden !m-0">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="10" height="10" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <p className="font-nexa_bold text-xl pv:max-md:text-[6px] pv:max-md:leading-[10px]">PEACH</p>
                    </div>
                    <div className="flex justify-start items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 19.799 19.799" className=" pv:max-lg:hidden">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="14" height="14" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 19.799 19.799" className=" pv:max-md:block hidden !m-0">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="10" height="10" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <p className="font-nexa_bold text-xl pv:max-md:text-[6px] pv:max-md:leading-[10px]">UJI MATCHA</p>
                    </div>
                    <div className="flex justify-start items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 19.799 19.799" className=" pv:max-lg:hidden">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="14" height="14" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 19.799 19.799" className=" pv:max-md:block hidden !m-0">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="10" height="10" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <p className="font-nexa_bold text-xl pv:max-md:text-[6px] pv:max-md:leading-[10px]">VANILLA</p>
                    </div>
                    <div className="flex justify-start items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 19.799 19.799" className=" pv:max-lg:hidden">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="14" height="14" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 19.799 19.799" className=" pv:max-md:block hidden !m-0">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="10" height="10" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <p className="font-nexa_bold text-xl pv:max-md:text-[6px] pv:max-md:leading-[10px]">TARO</p>
                    </div>
                    <div className="flex justify-start items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 19.799 19.799" className=" pv:max-lg:hidden">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="14" height="14" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 19.799 19.799" className=" pv:max-md:block hidden !m-0">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="10" height="10" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <p className="font-nexa_bold text-xl pv:max-md:text-[6px] pv:max-md:leading-[10px]">PASSION FRUIT</p>
                    </div>
                    <div className="flex justify-start items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 19.799 19.799" className=" pv:max-lg:hidden">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="14" height="14" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 19.799 19.799" className=" pv:max-md:block hidden !m-0">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="10" height="10" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <p className="font-nexa_bold text-xl pv:max-md:text-[6px] pv:max-md:leading-[10px]">LYCHEE</p>
                    </div>
                    <div className="flex justify-start items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 19.799 19.799" className=" pv:max-lg:hidden">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="14" height="14" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 19.799 19.799" className=" pv:max-md:block hidden !m-0">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="10" height="10" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <p className="font-nexa_bold text-xl pv:max-md:text-[6px] pv:max-md:leading-[10px]">HONEY DEW</p>
                    </div>
                    <div className="flex justify-start items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 19.799 19.799" className=" pv:max-lg:hidden">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="14" height="14" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 19.799 19.799" className=" pv:max-md:block hidden !m-0">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="10" height="10" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <p className="font-nexa_bold text-xl pv:max-md:text-[6px] pv:max-md:leading-[10px]">WATERMELON</p>
                    </div>
                </div>
            </div>

            {/* frappe */}

            <div class="flex w-full justify-end mt-[3vw]">

                <div className=" w-[35%] flex flex-col justify-center">
                    <p className="font-nexa_light font-black text-[#CB1313] text-left text-4xl  pv:max-md:text-base">SNOW CREAM</p>
                    <div className="h-[2px] w-full bg-black my-4"></div>
                    <div className="flex justify-start items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 19.799 19.799" className=" pv:max-lg:hidden">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="14" height="14" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 19.799 19.799" className=" pv:max-md:block hidden !m-0">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="10" height="10" transform="translate(9.9) rotate(45)" />
                        </svg>

                        <p className="font-nexa_bold text-xl pv:max-md:text-[6px] pv:max-md:leading-[10px]">AMBER BOBAMILK</p>
                    </div>
                    <div className="flex justify-start items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 19.799 19.799" className=" pv:max-lg:hidden">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="14" height="14" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 19.799 19.799" className=" pv:max-md:block hidden !m-0">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="10" height="10" transform="translate(9.9) rotate(45)" />
                        </svg>

                        <p className="font-nexa_bold text-xl pv:max-md:text-[6px] pv:max-md:leading-[10px]">LYCHEE BLACK TEA</p>
                    </div>
                    <div className="flex justify-start items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 19.799 19.799" className=" pv:max-lg:hidden">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="14" height="14" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 19.799 19.799" className=" pv:max-md:block hidden !m-0">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="10" height="10" transform="translate(9.9) rotate(45)" />
                        </svg>

                        <p className="font-nexa_bold text-xl pv:max-md:text-[6px] pv:max-md:leading-[10px]">MUDDY MANGO W.CREAM</p>
                    </div>
                    <div className="flex justify-start items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 19.799 19.799" className=" pv:max-lg:hidden">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="14" height="14" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 19.799 19.799" className=" pv:max-md:block hidden !m-0">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="10" height="10" transform="translate(9.9) rotate(45)" />
                        </svg>

                        <p className="font-nexa_bold text-xl pv:max-md:text-[6px] pv:max-md:leading-[10px]">VERY STRAWBERRY CHEESE</p>
                    </div>
                    <div className="flex justify-start items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 19.799 19.799" className=" pv:max-lg:hidden">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="14" height="14" transform="translate(9.9) rotate(45)" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 19.799 19.799" className=" pv:max-md:block hidden !m-0">
                            <rect id="Rectangle_255" data-name="Rectangle 255" width="10" height="10" transform="translate(9.9) rotate(45)" />
                        </svg>

                        <p className="font-nexa_bold text-xl pv:max-md:text-[6px] pv:max-md:leading-[10px]">YOGURT PASSION FRUIT TEA</p>
                    </div>
                    

                </div>
                <div className=" w-[53%] flex justify-end pr-[15vw]">
                    <img src={snowcream} alt="" className="object-cover" />
                </div>
            </div>
            <p className="w-full text-center font-jonitha text-[3vw] pt-[4vw]">TOPPINGS</p>
            <div class="flex flex-col my-12 ">
                <div class="-my-1.5 overflow-x-auto">
                    <div class=" inline-block align-middle">
                        <div class="border rounded-lg shadow overflow-hidden border-black ">
                            <table class=" divide-y divide-black table-fixed w-full">

                                <tbody class="divide-y divide-black">
                                    <tr className="divide-x divide-black bg-black text-white">
                                        <td class="0 py-4 whitespace-nowrap font-nexa_bold text-[1.5vw]">BOBA</td>
                                        <td class="0 py-4 whitespace-nowrap font-nexa_bold text-[1.5vw]">JELLIES</td>
                                        <td class="0 py-4 whitespace-nowrap font-nexa_bold text-[1.5vw]">POPPING BOBA</td>
                                    </tr>
                                    <tr className="divide-x divide-black">
                                        <td class="0 py-4 whitespace-nowrap font-nexa_bold text-[1.5vw]">AMBER</td>
                                        <td class="0 py-4 whitespace-nowrap font-nexa_bold text-[1.5vw]">RAINBOW</td>
                                        <td class="0 py-4 whitespace-nowrap font-nexa_bold text-[1.5vw]">YOGURT</td>
                                    </tr>
                                    <tr className="divide-x divide-black">
                                        <td class="0 py-4 whitespace-nowrap font-nexa_bold text-[1.5vw]">HONEY</td>
                                        <td class="0 py-4 whitespace-nowrap font-nexa_bold text-[1.5vw]">LYCHEE</td>
                                        <td class="0 py-4 whitespace-nowrap font-nexa_bold text-[1.5vw]">PEACH</td>
                                    </tr>
                                    <tr className="divide-x divide-black">
                                        <td class="0 py-4 whitespace-nowrap font-nexa_bold text-[1.5vw]">CRYSTAL</td>
                                        <td class="0 py-4 whitespace-nowrap font-nexa_bold text-[1.5vw]">STRAWBERRY</td>
                                        <td class="0 py-4 whitespace-nowrap font-nexa_bold text-[1.5vw]">PASSION FRUIT</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Tea;