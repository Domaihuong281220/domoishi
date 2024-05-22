/** @format */

import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { CardLocations } from "../../components";
import axios from "axios";

const Locations = () => {
  const [src,setSrc]= useState()

  useEffect(() => {
    handleGetLocation();
    handleGetLocationFrame();
  }, []);
  const [locationData, setLocationData] = useState([
    {
      name: "",
      address: "",
      phone: "",
      website: "",
    },
  ]);
  const handleGetLocation = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/locations`
      );
      // const fetchData = [...response.data.data].reverse(); // Copy and reverse the array
      setLocationData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleGetLocationFrame = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/locationframe`
      );
      // const fetchData = [...response.data.data].reverse(); // Copy and reverse the array
      setSrc(response.data[0].src);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(locationData);



  return (
    <div className="w-[76%] mx-auto grid grid-cols-5 pv:max-md:w-[95%] lg:max-xl:w-[95%]   pv:max-lg:grid-cols-1">
      <div className="col-span-2  w-[76%] mx-auto pv:max-lg:col-span-1 pv:max-lg:w-[90%]">
        <div className="">
          <p className="text-[30px] font-nexa_bold text-start">ORDER ONLINE</p>
          <p className="font-nexa_light text-[20px] text-start">
            Find A Location By Zip Code Or City, State
          </p>
        </div>

        <div className="w-full flex py-6">
          <input
            className=" p-2 rounded-l-[30px] w-full border-[1px] border-gray-400"
            placeholder="Enter a Locator"
          ></input>
          <button className=" bg-[#cb1313] p-2">
            <Icon
              icon={"tabler:location-filled"}
              className="w-6 h-6 text-white"
            ></Icon>
          </button>
        </div>
        <div className="pt-10 h-[500px] overflow-y-scroll pv:max-md:h-[300px]  xl:max-2xl:h-[550px] ">
          {locationData.map((item, index) => {
            return (
              <CardLocations
                title={item.name}
                address={item.address}
                phone={item.phone}
                status={"Pick up"}
                website={item.website}
              />
            );
          })}
        </div>
        <div className="w-full h-[1px] bg-gray-400 mt-2 md:hidden"></div>
      </div>
      <div className="col-span-3 py-10">
        <div
          className="h-[800px] w-full pv:max-lg:h-[50vh] lg:max-2xl:h-[70vh]"
          // style={{ height: "800px", width: "100%" }}
        >
          <iframe src={src} className="w-full h-full mapframe" title="map" style={{frameBorder: "0",}}></iframe>
        </div>
      </div>
    </div>
  );
};

export default Locations;
