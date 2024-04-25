import React from "react";

import WhyDomoishi1 from "../../assets/HomePage/WhyDomoishi1.png"
import WhyDomoishi2 from "../../assets/HomePage/WhyDomoishi2.png"
import WhyDomoishi3 from "../../assets/HomePage/WhyDomoishi3.png"
import WhyDomoishi4 from "../../assets/HomePage/WhyDomoishi4.png"
import WhyDomoishi5 from "../../assets/HomePage/WhyDomoishi5.png"


const WhyDomoishiAbout = () => {
    return (

        <div className="w-full h-fit px-[12%] flex flex-col items-center justify-center mt-14 pv:max-md:mt-4 ">
            <p className="font-chalkboard 2xl:text-[80px] pv:max-md:leading-4 lg:text-5xl leading-[70px]">Why should you <br></br>choose domoishi ? </p>
            <p className="pv:max-md:text-[7px] pv:max-md:m-4 font-nexa_bold 2xl:text-[25px] lg:text-lg 2xl:leading-[60px] lg:leading-10 w-full uppercase mt-12">
            Domoishi strives to be a leader in the fast casual restaurant market and recognizes that customers want great tasting food that is 
            made with fresh quality ingredients and is delivered “fast”.  The founders spent years studying the best offerings from Asia and selected a 
            menu that is excellent tasting, with fresh quality ingredients, that can be delivered quickly without compromising quality or flavor and offers healthy choices!

            </p>
            <div class="relative w-[90%] h-[94vh] pv:max-md:h-48  pv:max-md:mt-6 lg:h-[40rem] 2xl:h-[53rem]">
                <div class="z-40 absolute 2xl:top-80 lg:top-52 2xl:left-3 lg:left-[0rem]  flex h-[5rem] 2xl:w-[35rem] lg:w-[24rem] items-center justify-center">
                    <img src={WhyDomoishi1} alt="" className="object-contain pv:max-md:w-32" />
                    <p className="font-jonitha uppercase 2xl:text-[35px] lg:text-2xl absolute 2xl:top-[-11rem] lg:top-[-6rem] pv:max-md:text-[7px] pv:max-md:top-0">Customers deserve the best</p>
                    <p className="font-nexa-li 2xl:text-[25px] lg:text-[1.2rem] 2xl:leading-[40px] lg:leading-6 absolute 2xl:px-12 lg:px-8 lg:pt-10 text-left pv:max-md:text-[5px] pv:max-md:px-4">
                        We source the best materials and ingredients, many from the region of the world where the menu item
                        originates.  Wanting the best for our customers even includes our carry out bags, provided for in
                        restaurant leftovers and our online take out customers enjoyment.</p>
                </div>
                <div class="... z-30 absolute 2xl:top-44 lg:top-32 2xl:left-[30rem] pv:max-md:left-24 pv:max-md:w-52  lg:left-[20rem] flex h-fit 2xl:w-fit lg:w-[32rem] laptop:w-[35rem] items-center justify-center ">
                    <img src={WhyDomoishi2} alt="" className="object-contain 2xl:pr-16 lg:pr-0" />
                </div>
                <div class="z-40 absolute 2xl:top-[45rem] lg:top-[28rem] 2xl:right-[0rem] lg:right-[-2rem]  flex 2xl:h-20 lg:h-fit  2xl:w-30 lg:w-48 items-center justify-center pv:max-md:w-20  pv:max-md:left-60 pv:max-md:top-32">
                    <img src={WhyDomoishi3} alt="" className="object-contain" />
                </div>

            </div>
            <div class="relative w-[90%] 2xl:h-[75vh] lg:h-[34rem] pv:max-md:h-48 pv:max-md:mt-12">
                <div class="pv:max-md:top-16  pv:max-md:right-[-1rem] z-40 absolute top-[25rem] lg:top-64 2xl:top-[25rem] right-[3rem] 2xl:right-16 lg:right-[2rem]  flex h-[5rem] 2xl:w-[35rem] lg:w-[24rem] items-center justify-center">
                    <img src={WhyDomoishi4} alt="" className="object-contain pv:max-md:w-32" />
                    <p className="font-jonitha uppercase 2xl:text-[35px] lg:text-2xl absolute top-[-6rem] 2xl:top-[-10rem] pv:max-md:text-[7px] pv:max-md:top-0">Customers deserve the best</p>
                    <p className="font-nexa-li 2xl:text-[25px] lg:text-[1.2rem] 2xl:leading-[40px] lg:leading-6 absolute 2xl:px-12 lg:px-8 lg:pt-10 text-left pv:max-md:text-[5px] pv:max-md:px-4 2xl">
                        We source the best materials and ingredients, many from the region of the world where the menu item
                        originates.  Wanting the best for our customers even includes our carry out bags, provided for in
                        restaurant leftovers and our online take out customers enjoyment.</p>
                </div>
                <div class="... z-30 absolute top-[1rem] 2xl:left-4 lg:left-[0rem] flex h-fit 2xl:w-[80rem] lg:w-[35rem] laptop:w-[36rem] items-center justify-center pv:max-md:w-52  pv:max-md:top-[-1rem]">
                    <img src={WhyDomoishi5} alt="" className="object-contain 2xl:pr-[33rem]" />
                </div>
            </div>
            

        </div>

    );
}
export default WhyDomoishiAbout;