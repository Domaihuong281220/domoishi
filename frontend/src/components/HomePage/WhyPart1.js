import React from "react";

import WhyDomoishi1 from "../../assets/HomePage/WhyDomoishi1.png"
import WhyDomoishi2 from "../../assets/HomePage/WhyDomoishi2.png"
import WhyDomoishi3 from "../../assets/HomePage/WhyDomoishi3.png"
import WhyDomoishi4 from "../../assets/HomePage/WhyDomoishi4.png"
import WhyDomoishi5 from "../../assets/HomePage/WhyDomoishi5.png"

const WhyPart1 = () => {
    return (
        <div className="relative w-full h-[77vw] mt-[4vw] mb-[1vw]  ">
            <div className="absolute top-0 right-0 w-full h-fit">
                <div className="h-[42vw]  w-full relative ">
                    <div className="w-[41.7vw] h-[32.5vw] absolute top-[4.5vw]  right-[15.8%] pv:max-md:right-[9%]">
                        <img src={WhyDomoishi2} alt="" className="object-contain" />
                    </div>
                    <div className="absolute top-0 left-[15.8%] pv:max-md:left-[9%] w-[30.5vw] h-[26vw]">
                        <img src={WhyDomoishi1} alt="" className="object-contain" />
                        <div className="w-full h-full  flex flex-col justify-center  absolute top-0 left-0">
                            <p className="font-jonitha uppercase  text-[1.9vw]">Customers deserve the best</p>
                            <p className="font-nexa font-extralight text-[1.3vw]  md:leading-[2vw] tracking-[0.115vw] p-[2vw]  text-center">
                                We source the best materials and ingredients, many from the region of the world where the menu item
                                originates.  Wanting the best for our customers even includes our carry out bags, provided for in
                                restaurant leftovers and our online take out customers enjoyment.</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-[11.8%] pv:max-md:right-[3.5%] w-[14.5vw] h-[12vw] ">
                        <img src={WhyDomoishi3} alt="" className="object-contain" />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-fit">
                <div className="h-[36vw] w-full relative ">
                    <div className="w-[41.7vw] h-[32.5vw] absolute top-0 left-[15.8%] pv:max-md:left-[9%]">
                        <img src={WhyDomoishi5} alt="" className="object-contain" />
                    </div>
                    <div className="absolute bottom-0 right-[15.8%] pv:max-md:right-[9%] w-[30.5vw] h-[31vw] ">
                        <img src={WhyDomoishi4} alt="" className="object-contain" />
                        <div className="w-full h-full flex flex-col justify-center  absolute top-0 left-0 text-white">
                            <p className="font-jonitha uppercase  text-[1.9vw]">GREAT TASTE</p>
                            <p className="font-nexa font-extralight text-[1.3vw] md:leading-[2vw] tracking-[0.115vw]  p-[2vw]  text-center">
                                By carefully selecting top-quality ingredients and flavors from Asia and leveraging our expertise, we tailor tastes to suit each region perfectly.
                                Our diverse menu is thoughtfully crafted to offer a well-blended variety, ensuring that every visit is exciting with new combinations to try. keeping you engaged and satisfied.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        

    
    );
}
export default WhyPart1;