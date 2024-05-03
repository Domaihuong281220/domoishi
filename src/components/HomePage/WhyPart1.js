import React from "react";

import WhyDomoishi1 from "../../assets/HomePage/WhyDomoishi1.png"
import WhyDomoishi2 from "../../assets/HomePage/WhyDomoishi2.png"
import WhyDomoishi3 from "../../assets/HomePage/WhyDomoishi3.png"
import WhyDomoishi4 from "../../assets/HomePage/WhyDomoishi4.png"
import WhyDomoishi5 from "../../assets/HomePage/WhyDomoishi5.png"

const WhyPart1 = () => {
    return (
        <div className="relative w-full h-[140vh] md:max-xl:h-[63vh] dh_max:h-[158vh] pv:max-md:h-[37vh] my-16 pv:max-md:my-10">
            <div className="absolute top-0 right-0 w-full h-fit">
                <div className="h-[78.2vh] dh_max:h-[87vh] md:max-xl:h-[34.2vh] pv:max-md:h-[27vh] w-full relative ">
                    <div className="w-[41.7vw] h-[57.5vh] md:max-xl:h-[24.5vh] pv:max-md:h-[15vh] absolute top-[9.5vh] md:max-xl:top-[5.5vh] pv:max-md:top-[2.5vh] right-[15.8%] pv:max-md:right-[9%]">
                        <img src={WhyDomoishi2} alt="" className="object-contain" />
                    </div>
                    <div className="absolute top-0 left-[15.8%] pv:max-md:left-[9%] w-[30.5vw] h-[53vh] md:max-xl:h-[23vh] pv:max-md:h-[14vh]">
                        <img src={WhyDomoishi1} alt="" className="object-contain" />
                        <div className="w-full h-[80%] pv:max-md:h-[94%] dh_max:h-full md:h-[90%] laptop:h-[95%] dv:h-[85%] flex flex-col justify-center  absolute top-0 left-0">
                            <p className="font-jonitha uppercase  xl:text-[1.9vw] md:text-[1.2rem] pv:max-md:text-[7px]">Customers deserve the best</p>
                            <p className="font-nexa font-extralight md:text-[1.3vw]  pv:max-md:text-[5px] pv:max-md:px-4 md:leading-[2vw] tracking-[0.115vw]   xl:px-10 md:px-8 md:pt-6  text-left">
                                We source the best materials and ingredients, many from the region of the world where the menu item
                                originates.  Wanting the best for our customers even includes our carry out bags, provided for in
                                restaurant leftovers and our online take out customers enjoyment.</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-[11.8%] pv:max-md:right-[3.5%] w-[14.5vw] h-[22vh] md:max-xl:h-[9vh] pv:max-md:h-[12vh]">
                        <img src={WhyDomoishi3} alt="" className="object-contain" />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-fit">
                <div className="h-[66vh] md:max-xl:h-[28.2vh] pv:max-md:h-[17vh] w-full relative ">
                    <div className="w-[41.7vw] h-[57.5vh] md:max-xl:h-[24.5vh] pv:max-md:h-[15vh] absolute top-0 left-[15.8%] pv:max-md:left-[9%]">
                        <img src={WhyDomoishi5} alt="" className="object-contain" />
                    </div>
                    <div className="absolute bottom-0 right-[15.8%] pv:max-md:right-[9%] w-[30.5vw] h-[53vh] md:max-xl:h-[23vh] pv:max-md:h-[14vh]">
                        <img src={WhyDomoishi4} alt="" className="object-contain" />
                        <div className="w-full h-[80%] pv:max-md:h-[94%] dh_max:h-full md:h-[90%] laptop:h-[95%] dv:h-[85%] flex flex-col justify-center  absolute top-0 left-0">
                            <p className="font-jonitha uppercase  xl:text-[1.9vw] md:text-[1.2rem] pv:max-md:text-[7px]">Customers deserve the best</p>
                            <p className="font-nexa font-extralight md:text-[1.3vw]  pv:max-md:text-[5px] pv:max-md:px-4 md:leading-[2vw] tracking-[0.115vw]   xl:px-10 md:px-8 md:pt-6  text-left">
                                We source the best materials and ingredients, many from the region of the world where the menu item
                                originates.  Wanting the best for our customers even includes our carry out bags, provided for in
                                restaurant leftovers and our online take out customers enjoyment.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        

    
    );
}
export default WhyPart1;