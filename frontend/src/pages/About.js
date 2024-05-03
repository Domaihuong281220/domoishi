import React from "react";

import banner from "../assets/About/banner.png"
import subtraction from "../assets/About/Subtraction.png";
import { WhyDomishiAbout, WhyDommoishi, WhyPart1 } from "../components";


const About = () => {
    return (

        <div className="w-full">
            <img src={banner} alt="" className="object-cover" />
            <div className="w-full h-fit relative mt-[-2rem]">
                <img src={subtraction} alt="" className="object-cover" />
                <div className="w-full absolute h-full top-0 flex flex-col space-y-8 pv:max-md:space-y-1  justify-center items-center">
                    <p className="font-jonitha lg:text-5xl w-full">#AboutDOMOISHI</p>
                    <p className="font-nexa_bold uppercase text-lg pt-6 lg:text-[1rem] lg:pt-0 w-[75%] pv:max-md:text-[6px] pv:max-md:leading-[11px] pv:max-md:pt-0">
                    Domoishi is a fast-growing Asian casual restaurant chain.  Domoishi offers a variety of 
                    addictive Asian favorites! Whether its fresh Ramen sourced from Japan, Hawaiian Poke bowls, 
                    Taiwan’s Bubble Teas, or our savory Korean style wings, your Asian food and beverage cravings 
                    will be completely satisfied! The exceptional quality and flavor will keep you coming back to Domoishi for more.
                    </p>
                </div>
            </div>
            <div className="w-full h-fit  pv:max-md:px-[8%] ">
                <WhyPart1 />
            </div>
        </div>

    );
}
export default About;