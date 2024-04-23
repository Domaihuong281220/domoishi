import React, { useState } from "react";


const Menu = () => {

    const [menu1, setMenu1] = useState(true);
    const [menu2, setMenu2] = useState(false);
    const [menu3, setMenu3] = useState(false);
    const [menu4, setMenu4] = useState(false);



    return (

        <div className="w-full h-[100vh] lg:h-fit">
            <p className="w-full text-center font-jonitha text-5xl">MENU</p>
            <p className="font-nexa_bold text-3xl pt-8">Items may vary by location. <a href="" className="text-[#CB1313] underline">Find your Location</a></p>

            <div class="flex space-x-6 items-center justify-center pt-8">

                <div className="flex flex-col w-fit items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.799" height="19.799" viewBox="0 0 19.799 19.799" className={`${menu1 ? "opacity-100 mb-3" : "opacity-0"}`}>
                        <rect id="Rectangle_311" data-name="Rectangle 311" width="14" height="14" transform="translate(9.9) rotate(45)" />
                    </svg>
                    <button className={`focus:border-solid focus:border-2 focus:border-black rounded-full px-6 py-2 font-nexa text-3xl font-bold ${menu1 ? "border-solid border-2 border-black rounded-full px-6 py-2" : "!border-none"}`}
                        onClick={() => {
                            setMenu1(true);
                            setMenu2(false);
                            setMenu3(false);
                            setMenu4(false)
                        }}
                    >POKE</button>
                </div>
                <div className="flex flex-col w-fit items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.799" height="19.799" viewBox="0 0 19.799 19.799" className={`${menu2 ? "opacity-100 mb-3" : "opacity-0"}`}>
                        <rect id="Rectangle_311" data-name="Rectangle 311" width="14" height="14" transform="translate(9.9) rotate(45)" />
                    </svg>
                    <button className={`focus:border-solid focus:border-2 focus:border-black rounded-full px-6 py-2 font-nexa text-3xl font-bold  ${menu2 ? "border-solid border-2 border-black rounded-full px-6 py-2" : "!border-none"}`  }
                        onClick={() => {
                            setMenu1(false);
                            setMenu2(true);
                            setMenu3(false);
                            setMenu4(false)
                        }}
                    >RAMEN</button>
                </div>
                <div className="flex flex-col w-fit items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.799" height="19.799" viewBox="0 0 19.799 19.799" className={`${menu3 ? "opacity-100 mb-3" : "opacity-0"}`}>
                        <rect id="Rectangle_311" data-name="Rectangle 311" width="14" height="14" transform="translate(9.9) rotate(45)" />
                    </svg>
                    <button className={`focus:border-solid focus:border-2 focus:border-black rounded-full px-6 py-2 font-nexa text-3xl font-bold  ${menu3 ? "border-solid border-2 border-black rounded-full px-6 py-2" : "!border-none"}`  }
                        onClick={() => {
                            setMenu1(false);
                            setMenu2(false);
                            setMenu3(true);
                            setMenu4(false)
                        }}
                    >TEA</button>
                </div>
                <div className="flex flex-col w-fit items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.799" height="19.799" viewBox="0 0 19.799 19.799" className={`${menu4 ? "opacity-100 mb-3" : "opacity-0"}`}>
                        <rect id="Rectangle_311" data-name="Rectangle 311" width="14" height="14" transform="translate(9.9) rotate(45)" />
                    </svg>
                    <button className={`focus:border-solid focus:border-2 focus:border-black rounded-full px-6 py-2 font-nexa text-3xl font-bold  ${menu4 ? "border-solid border-2 border-black rounded-full px-6 py-2" : "!border-none"}`  }
                        onClick={() => {
                            setMenu1(false);
                            setMenu2(false);
                            setMenu3(false);
                            setMenu4(true)
                        }}
                    >WING & APPETIZER</button>
                </div>

            </div>
            <div className="w-full"></div>
        </div>

    );
}
export default Menu;