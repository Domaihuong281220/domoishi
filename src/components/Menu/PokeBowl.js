import React from "react";

import sushirice from "../../assets/Menu/sushirice.png"
import brownrice from "../../assets/Menu/brownrice.png"
import springmix from "../../assets/Menu/springmix.png"
import mixany2 from "../../assets/Menu/mixany2.png"


const PokeBowl = () => {
    return (

        <div className="w-full">
            <p className="font-nexa_bold text-5xl 2xl:text-6xl">POKE BOWL</p>
            <div className="w-full flex justify-center space-x-3 items-center mt-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="29.436" viewBox="0 0 29.436 29.436">
                    <rect id="Rectangle_318" data-name="Rectangle 318" width="20.815" height="20.815" transform="translate(14.718) rotate(45)" />
                </svg>
                <p className="font-nexa_light font-extrabold text-3xl 2xl:text-5xl">STEP 1: CHOOSE YOUR BASE</p>
            </div>
            {/* CARDS */}
            <div className="w-full flex justify-center space-x-4 my-16">
                <div className="w-[18%] relative">
                    <img src={sushirice} alt="" className="object-contain" />
                    <p className="font-nexa_bold absolute top-2/3 left-1/2 transform -translate-x-1/2  -translate-y-1/2 w-full text-md 2xl:text-2xl">SUSHI RICE</p>
                </div>
                <div className="w-[18%] relative">
                    <img src={brownrice} alt="" className="object-contain" />
                    <p className="font-nexa_bold absolute top-2/3 left-1/2 transform -translate-x-1/2  -translate-y-1/2 w-full text-md 2xl:text-2xl">BRORN RICE</p>
                </div>
                <div className="w-[18%] relative">
                    <img src={springmix} alt="" className="object-contain" />
                    <p className="font-nexa_bold absolute top-2/3 left-1/2 transform -translate-x-1/2  -translate-y-1/2 w-full text-md 2xl:text-2xl">SPRING MIX</p>
                </div>
                <div className="w-[18%] relative">
                    <img src={mixany2} alt="" className="object-contain" />
                    <p className="font-nexa_bold absolute top-2/3 left-1/2 transform -translate-x-1/2  -translate-y-1/2 w-full text-md 2xl:text-2xl">MIX ANY 2</p>
                </div>
            </div>

{/* Step 2 */}

            <div className="w-full flex justify-center space-x-3 items-center mt-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="29.436" viewBox="0 0 29.436 29.436">
                    <rect id="Rectangle_318" data-name="Rectangle 318" width="20.815" height="20.815" transform="translate(14.718) rotate(45)" />
                </svg>
                <p className="font-nexa_light font-bold text-3xl 2xl:text-5xl">STEP 2: PROTEINS</p>
            </div>
            <div class="flex flex-col my-12">
                <div class="-m-1.5 overflow-x-auto">
                    <div class="px-[12%] inline-block align-middle">
                        <div class="border rounded-lg shadow overflow-hidden border-black">
                            <table class=" divide-y divide-black table-fixed w-full">

                                <tbody class="divide-y divide-black">
                                    <tr className="divide-x divide-black">
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Organic Tofu</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Shrimp <span className="text-[#B6CF69]">COOKED</span></td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Salmon <span className="text-[#B6CF69]">RAW</span></td>

                                    </tr>
                                    <tr className="divide-x divide-black">
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Chicken</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Tuna <span className="text-[#B6CF69]">RAW</span></td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Spicy Tuna <br></br> <span className="text-[#B6CF69]">RAW <span className="text-[#CA1C19]">SPICY</span></span></td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Step 3 */}

            <div className="w-full flex justify-center space-x-3 items-center mt-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="29.436" viewBox="0 0 29.436 29.436">
                    <rect id="Rectangle_318" data-name="Rectangle 318" width="20.815" height="20.815" transform="translate(14.718) rotate(45)" />
                </svg>
                <p className="font-nexa_light font-bold text-3xl 2xl:text-5xl">STEP 3: TOPPINGS</p>
            </div>
            <div class="flex flex-col my-12">
                <div class="-m-1.5 overflow-x-auto">
                    <div class="px-[12%] inline-block align-middle">
                        <div class="border rounded-lg shadow overflow-hidden border-black">
                            <table class=" divide-y divide-black table-fixed w-full">

                                <tbody class="divide-y divide-black">
                                    <tr className="divide-x divide-black">
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Avocado</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Green Onion</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Mango</td>
                                    </tr>
                                    <tr className="divide-x divide-black">
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Cucumber</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Jalapeño <span className="text-[#CA1C19]">RAW</span></td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Red Onion</td>
                                    </tr>
                                    <tr className="divide-x divide-black">
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Edamame</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Japanese Ginger</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Seaweed Salad</td>
                                    </tr>
                                    <tr className="divide-x divide-black">
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Fish Egg <span className="text-[#B6CF69]">RAW</span></td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Crab Salad</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Sweet Corn</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Step 4 */}

            <div className="w-full flex justify-center space-x-3 items-center mt-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="29.436" viewBox="0 0 29.436 29.436">
                    <rect id="Rectangle_318" data-name="Rectangle 318" width="20.815" height="20.815" transform="translate(14.718) rotate(45)" />
                </svg>
                <p className="font-nexa_light font-bold text-3xl 2xl:text-5xl">STEP 4: SAUCE</p>
            </div>
            <div class="flex flex-col my-12">
                <div class="-m-1.5 overflow-x-auto">
                    <div class="px-[12%] inline-block align-middle">
                        <div class="border rounded-lg shadow overflow-hidden border-black ">
                            <table class=" divide-y divide-black table-fixed w-full">

                                <tbody class="divide-y divide-black">
                                    <tr className="divide-x divide-black bg-[#CA1C19] text-white">
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">NON SPICY</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">MILD SPICY</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">SPICY</td>
                                    </tr>
                                    <tr className="divide-x divide-black">
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Citrus Mango</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Ginger Seasame</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Ponzu Jalapeno</td>
                                    </tr>
                                    <tr className="divide-x divide-black">
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Dangcing Eel</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Yum Yum</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Sriracha Mayo</td>
                                    </tr>
                                    <tr className="divide-x divide-black">
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">House Poké</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Yuzu Lite</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Sweet Wasabi</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Step 5 */}

            <div className="w-full flex justify-center space-x-3 items-center mt-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="29.436" viewBox="0 0 29.436 29.436">
                    <rect id="Rectangle_318" data-name="Rectangle 318" width="20.815" height="20.815" transform="translate(14.718) rotate(45)" />
                </svg>
                <p className="font-nexa_light font-bold text-3xl 2xl:text-5xl">STEP 5: GARNISH</p>
            </div>
            <div class="flex flex-col my-12">
                <div class="-m-1.5 overflow-x-auto">
                    <div class="px-[12%] inline-block align-middle">
                        <div class="border-2 rounded-lg shadow overflow-hidden border-gray-300 ">
                            <table class=" divide-y divide-gray-600 table-fixed w-full">

                                <tbody class="divide-y divide-gray-600">
                                    <tr className="divide-x divide-gray-600 bg-[#B6CF69]">
                                    <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Fried Onion</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Garlic Crisp</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Roasted Seaweed</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-nexa_bold text-2xl">Nori Sesame</td>
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
export default PokeBowl;