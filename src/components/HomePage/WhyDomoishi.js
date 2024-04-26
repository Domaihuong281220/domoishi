import React from "react";

import { Row, Col } from "antd";
import WhyDomoishi1 from "../../assets/HomePage/WhyDomoishi1.png"
import WhyDomoishi2 from "../../assets/HomePage/WhyDomoishi2.png"
import WhyDomoishi3 from "../../assets/HomePage/WhyDomoishi3.png"
import WhyDomoishi4 from "../../assets/HomePage/WhyDomoishi4.png"
import WhyDomoishi5 from "../../assets/HomePage/WhyDomoishi5.png"


const WhyDomoishi = () => {
    return (

        <div className="w-full h-fit px-[12%] pv:max-md:px-[8%] flex flex-col items-center justify-center">
            <p className="font-chalkboard 2xl:text-[80px] pv:max-md:leading-4 lg:text-5xl leading-[70px] ">Why should you <br></br>choose domoishi ? </p>
            <p className="font-nexa_bold 2xl:text-[25px] lg:text-lg pv:max-md:text-[7px] pv:max-md:m-4 2xl:leading-[60px] lg:leading-10 2xl:w-[70%] lg:w-[75%] uppercase mt-12">
                Domoishi strives to be a leader in the fast casual restaurant market and recognizes that customers want
                great tasting food that is made with fresh quality ingredients and is delivered “fast”.</p>
            <div class="relative w-[90%] h-[94vh]  pv:max-md:h-48  pv:max-md:mt-6 lg:h-[40rem] 2xl:h-[53rem]">
                <div class="z-40 absolute 2xl:top-80 lg:top-52 2xl:left-3 lg:left-[-2rem]  flex h-[5rem] 2xl:w-[35rem] lg:w-[24rem] items-center justify-center">
                    <img src={WhyDomoishi1} alt="" className="object-contain pv:max-md:w-32" />
                    <p className="font-jonitha uppercase 2xl:text-[35px] lg:text-2xl pv:max-md:text-[7px] pv:max-md:top-0 absolute 2xl:top-[-11rem] lg:top-[-6rem]">Customers deserve the best</p>
                    <p className="font-nexa-light 2xl:text-[25px] lg:text-[1.2rem] pv:max-md:text-[5px] pv:max-md:px-4 2xl:leading-[40px] lg:leading-6 absolute 2xl:px-12 lg:px-8 lg:pt-10 text-left">
                        We source the best materials and ingredients, many from the region of the world where the menu item
                        originates.  Wanting the best for our customers even includes our carry out bags, provided for in
                        restaurant leftovers and our online take out customers enjoyment.</p>
                </div>
                <div class="... z-30 absolute 2xl:top-44 lg:top-32 2xl:left-[30rem] pv:max-ph:left-24 ph:max-md:left-24 ph:max-md:w-52 pv:max-ph:w-[12rem] lg:left-[18rem] flex h-fit 2xl:w-fit lg:w-[35rem] dv:w-[40rem] items-center justify-center ">
                    <img src={WhyDomoishi2} alt="" className="object-contain 2xl:pr-16 lg:pr-0" />
                </div>
                <div class="z-40 absolute 2xl:top-[45rem] lg:top-[28rem] 2xl:right-[0rem] lg:right-[-2rem] pv:max-md:w-20  pv:max-md:left-60 pv:max-md:top-32 flex 2xl:h-20 lg:h-fit  2xl:w-30 lg:w-48 items-center justify-center ">
                    <img src={WhyDomoishi3} alt="" className="object-contain" />
                </div>

            </div>
            <div class="relative w-[90%] 2xl:h-[75vh] lg:h-[34rem] pv:max-md:h-48 pv:max-md:mt-12">
                <div class="z-40 absolute top-[25rem] ph:max-md:top-16 pv:max-ph:top-12 pv:max-ph:right-4 ph:max-md:right-4 lg:top-72 2xl:top-[25rem] right-[3rem] dv:right-8 2xl:right-0 lg:right-[-1rem]  flex h-[5rem] 2xl:w-[35rem] lg:w-[24rem] items-center justify-center">
                    <img src={WhyDomoishi4} alt="" className="object-contain pv:max-md:w-32  " />
                    <p className="font-jonitha uppercase 2xl:text-[35px] pv:max-md:text-[7px] pv:max-md:top-0 lg:text-2xl absolute top-[-6rem] 2xl:top-[-10rem]">Customers deserve the best</p>
                    <p className="font-nexa-light 2xl:text-[25px] lg:text-[1.2rem] pv:max-md:text-[5px] pv:max-md:px-4 2xl:leading-[40px] lg:leading-6 absolute 2xl:px-12 lg:px-8 lg:pt-10 text-left">
                        We source the best materials and ingredients, many from the region of the world where the menu item
                        originates.  Wanting the best for our customers even includes our carry out bags, provided for in
                        restaurant leftovers and our online take out customers enjoyment.</p>
                </div>
                <div class="... z-30 absolute top-[3rem] 2xl:left-8 lg:left-[-2rem] pv:max-ph:left-4 flex h-fit 2xl:w-[84rem]  ph:max-md:w-52 pv:max-ph:w-48  pv:max-md:top-[-1rem] lg:w-[40rem] items-center justify-center ">
                    <img src={WhyDomoishi5} alt="" className="object-contain 2xl:pr-[33rem] " />
                </div>
            </div>
            <button className=" w-fit bg-black 2xl:text-[20px]  pv:max-md:my-4  lg:text-xl px-8 2xl:py-4 lg:py-2 my-12 rounded-full font-shopee_bold text-white">LEARN MORE</button>


        </div>

    );
}
export default WhyDomoishi;