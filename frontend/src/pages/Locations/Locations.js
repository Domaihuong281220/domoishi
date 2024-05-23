/** @format */

import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState, useEffect } from "react";
import { CardLocations } from "../../components";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Locations = () => {
  const navigate = useNavigate();
  const [src, setSrc] = useState();
  const [locationData, setLocationData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    handleGetLocation();
    handleGetLocationFrame();
  }, []);

  const handleGetLocation = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/locations`
      );
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
      setSrc(response.data[0].src);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearchClick = () => {
    const filteredLocations = locationData.filter((location) =>
      location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.website.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (searchQuery) {
      console.log("Searched Cards: ", filteredLocations[0].website);
      window.location.href = filteredLocations[0].website;
    }
  };

  const filteredLocations = locationData.filter((location) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.website.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-[76%] mx-auto grid grid-cols-5 pv:max-md:w-[95%] lg:max-xl:w-[95%] pv:max-lg:grid-cols-1">
      <div className="col-span-2 w-[76%] mx-auto pv:max-lg:col-span-1 pv:max-lg:w-[90%]">
        <div>
          <p className="text-[30px] font-nexa_bold text-start">ORDER ONLINE</p>
          <p className="font-nexa_light text-[20px] text-start">
            Find A Location By Zip Code Or City, State
          </p>
        </div>

        <div className="w-full flex py-6">
          <input
            className="p-2 rounded-l-[30px] w-full border-[1px] border-gray-400"
            placeholder="Enter a Locator"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          ></input>
          <button className="bg-[#cb1313] p-2" onClick={handleSearchClick}>
            <Icon
              icon={"tabler:location-filled"}
              className="w-6 h-6 text-white"
            ></Icon>
          </button>
        </div>
        <div className="pt-10 h-fit overflow-y-scroll pv:max-md:h-[300px] xl:max-2xl:h-[550px]">
          {filteredLocations.map((item, index) => (
            <CardLocations
              key={index}
              title={item.name}
              address={item.address}
              phone={item.phone}
              status={"Pick up"}
              website={item.website}
            />
          ))}
        </div>
        <div className="w-full h-[1px] bg-gray-400 mt-2 md:hidden"></div>
      </div>
      <div className="col-span-3 md:pb-10">
        <div
          className="h-[800px] w-full pv:max-lg:h-[50vh] lg:max-2xl:h-[70vh] relative"
        >
          <div className="w-full absolute h-[5vw] top-0 bg-white pv:max-md:h-[16vw] md:max-mdmax:h-[8vw] mdmax:max-lgmax:h-[6vw]"></div>
          <iframe src={src} className="w-full h-full mapframe" title="map" frameBorder="0"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Locations;
