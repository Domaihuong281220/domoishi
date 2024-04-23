import React from "react";

import { Row, Col } from "antd";

import BGImg from "../../assets/HomePage/AboutBG.png"



const About = () => {
    return (
        <div className="w-full h-fit relative">
         <img src={BGImg} alt="" className="object-cover"/>
         <p className="font-jonitha lg:text-5xl w-full absolute top-0 ">#AboutDOMOISHI</p>
         <p className="">
            We’re always making noise on Instagram. For the latest and greatest news and
            updates, follow us @domoishi on Instagram, Twitter and Facebook.</p>
        </div>
    );
}
export default About;