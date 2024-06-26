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
                <div className="w-full absolute h-full top-0 flex flex-col space-y-[1vw] pv:max-md:space-y-1  justify-center items-center">
                    <p className="font-jonitha text-[4vw] w-full">#AboutDOMOISHI</p>
                    <p className="font-nexa_bold uppercase text-[1.255vw]  pt-[2vw] lg:pt-0 w-[70%] pv:max-md:text-[5px] pv:max-md:leading-[11px] pv:max-md:pt-0">
                        Domoishi is a fast-growing Asian casual restaurant chain.  Domoishi offers a variety of
                        addictive Asian favorites! Whether its fresh Ramen sourced from Japan, Hawaiian Poke bowls,
                        Taiwan’s Bubble Teas, or our savory Korean style wings, your Asian food and beverage cravings
                        will be completely satisfied! The exceptional quality and flavor will keep you coming back to Domoishi for more.
                    </p>
                </div>
            </div>
            <div className="w-full h-fit  pv:max-md:px-[8%] ">
                <p className="font-chalkboard px-[12%] text-[4.4vw] leading-[4vw] pt-[3vw]">
                    What why when <br></br> domoishi ?{" "}
                </p>
                <p className="font-nexa_light font-black px-[13%] text-[1.3vw] pv:max-md:m-4 leading-[3vw] w-full uppercase mt-12">
                    We handpick authentic ingredients from diverse regions in Asia, infusing our recipes with a delightful fusion of popular Korean, Japanese, and other Asian dishes such as Poke,
                    Soy Garlic Crunchy Chicken, Tonkotsu Ramen, Bubble Tea, and a plethora of enticing fusion creations. This ensures that each culinary encounter with us is a truly exceptional experience.
                </p>
                <WhyPart1 />
            </div>
        </div>

    );
}
export default About;
