import React from "react";
import { About, Banner, Promo, WhyDommoishi } from "../../components";



const HomePage = () => {
    return (
        <div className="w-full h-fit">
            <Banner/>
            <Promo/>
            <WhyDommoishi/>
            {/* <About/> */}

        </div>
    );
}
export default HomePage;