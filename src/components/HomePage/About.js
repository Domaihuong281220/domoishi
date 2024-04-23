import React from "react";

import { Row, Col } from "antd";

import BGImg from "../../assets/HomePage/AboutBG.png"



const About = () => {
    return (
        <div className="w-full h-fit relative">
         <img src={BGImg} alt="" className="object-cover"/>
         <div className="w-full absolute h-full top-0 flex flex-col justify-center items-center">
         <p className="font-jonitha lg:text-5xl w-full">#AboutDOMOISHI</p>
         <p className="font-shopee_regular text-[1.8rem] pt-6 w-[76%]">
            We’re always making noise on Instagram. For the latest and greatest news and
            updates, follow us @domoishi on <a href="/" className="underline">Instagram</a>, <a href="/" className="underline">Twitter</a> and <a href="/" className="underline">Facebook</a>.</p>
         </div>
        </div>
    );
}
export default About;