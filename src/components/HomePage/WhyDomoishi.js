import React from "react";

import { Row, Col } from "antd";
import WhyDomoishi1 from "../../assets/HomePage/WhyDomoishi1.png"
import WhyDomoishi2 from "../../assets/HomePage/WhyDomoishi2.png"
import WhyDomoishi3 from "../../assets/HomePage/WhyDomoishi3.png"
import WhyDomoishi4 from "../../assets/HomePage/WhyDomoishi4.png"
import WhyDomoishi5 from "../../assets/HomePage/WhyDomoishi5.png"


const WhyDomoishi = () => {
    return (

        <div className="w-full h-fit px-[12%] flex flex-col items-center justify-center">
            <p className="font-chalkboard text-[80px] leading-[70px] ">Why should you <br></br>choose domoishi ? </p>
            <p className="font-nexa_bold text-[25px] leading-[60px] w-[70%] uppercase mt-12">
                Domoishi strives to be a leader in the fast casual restaurant market and recognizes that customers want
                great tasting food that is made with fresh quality ingredients and is delivered “fast”.</p>
            <div class="relative w-[90%]">
                <div class="z-40 absolute top-80 left-3  flex h-[5rem] w-[35rem] items-center justify-center">
                    <img src={WhyDomoishi1} alt="" className="object-contain" />
                    <p className="font-jonitha uppercase text-[35px] absolute top-[-11rem]">Customers deserve the best</p>
                    <p className="font-nexa-li text-[25px] leading-[40px] absolute px-12 text-left">
                        We source the best materials and ingredients, many from the region of the world where the menu item
                        originates.  Wanting the best for our customers even includes our carry out bags, provided for in
                        restaurant leftovers and our online take out customers enjoyment.</p>
                </div>
                <div class="... z-30 absolute top-44 left-[30rem] flex h-fit w-fit items-center justify-center ">
                    <img src={WhyDomoishi2} alt="" className="object-contain pr-16" />
                </div>
                <div class="z-40 absolute top-[45rem] right-[0rem]  flex h-20 w-30 items-center justify-center ">
                    <img src={WhyDomoishi3} alt="" className="object-contain" />
                </div>

            </div>

            <div class="relative w-[90%]">
                <div class="z-40 absolute top-[80rem] right-[3rem]  flex h-[5rem] w-[35rem] items-center justify-center">
                    <img src={WhyDomoishi4} alt="" className="object-contain" />
                    <p className="font-jonitha uppercase text-[35px] absolute top-[-11rem]">Customers deserve the best</p>
                    <p className="font-nexa-li text-[25px] leading-[40px] absolute px-12 text-left">
                        We source the best materials and ingredients, many from the region of the world where the menu item
                        originates.  Wanting the best for our customers even includes our carry out bags, provided for in
                        restaurant leftovers and our online take out customers enjoyment.</p>
                </div>
                <div class="... z-30 absolute top-[55rem] left-3 flex h-fit w-fit items-center justify-center ">
                    <img src={WhyDomoishi5} alt="" className="object-contain pr-[33rem]" />
                </div>
                
            </div>
            <button className=" w-fit bg-black text-[20px] px-8 py-4 rounded-full font-shopee_bold text-white">LEARN MORE</button>
            

        </div>

    );
}
export default WhyDomoishi;