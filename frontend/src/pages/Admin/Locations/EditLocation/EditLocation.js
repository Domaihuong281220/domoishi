/** @format */

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { path } from "../../../../utils/Constant";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Input } from "antd";
const EditLocation = () => {
  // const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const location = useLocation();
  let data = location.state;
  console.log(data);
  const [formData, setFormData] = useState({
    locationName: data.locationName,
    locationDetail: data.locationDetail,
    phoneNumber: data.phoneNumber,
    linkOrder: data.linkOrder,
  });

  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2 justify-between">
          <p className="text-2xl">LOCATION EDIT</p>
          <button
            className="w-auto h-auto"
            onClick={() => {
              navigate(-1);
            }}
          >
            <Icon icon="tabler:arrow-back" width={24} height={24}></Icon>
          </button>
        </div>

        {/* Start Tabs User Edit */}

        <div className="bg-white border-[1px] rounded-md w-[50%] mx-auto p-10">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Location Name</p>
            <Input
              className="w-full h-auto p-2"
              placeholder="User Name"
              defaultValue={data.locationName}
              onChange={(e) => {
                setFormData({ ...formData, locationName: e.target.value });
              }}
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Location Detail</p>
            <Input
              className="w-full h-auto"
              placeholder="Phone Number p-2"
              defaultValue={data.locationDetail}
              onChange={(e) => {
                setFormData({ ...formData, locationDetail: e.target.value });
              }}
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Phone Number</p>
            <Input
              className="w-full h-auto p-2"
              placeholder="Phone Number"
              defaultValue={data.phoneNumber}
              onChange={(e) => {
                setFormData({ ...formData, phoneNumber: e.target.value });
              }}
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Link Order</p>
            <Input
              className="w-full h-auto"
              placeholder="Link Order"
              defaultValue={data.linkOrder}
              onChange={(e) => {
                setFormData({ ...formData, linkOrder: e.target.value });
              }}
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg"
              onClick={() => {}}
            >
              <p className="">Save</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLocation;
