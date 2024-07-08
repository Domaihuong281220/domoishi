/** @format */

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { path } from "../../../../utils/Constant";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Input } from "antd";
const EditLocationFrame = () => {
  // const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const location = useLocation();
  let data = location.state;
  const [formData, setFormData] = useState({
    src: data.src,
    _id: data._id,
  });
  const handleEdit = async (_id) => {
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_URL}/locationframe/${_id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            // "x-secret-key": `${process.env.REACT_APP_SECRET_KEY}`,
            "x-secret-key": "Domoishi2024",
          },
        }
      )

      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("Edit Loction Frame successfully!");

          navigate("../" + path.LOCATIONFRAME);
        }
      })
      .catch((err) => {
        toast.error("Edit Location Frame wrong: " + err.message);
      });
  };

  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2 justify-between">
          <p className="text-2xl">LOCATION FRAME EDIT</p>
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
            <p className="text-lg">Source</p>
            <textarea
              className="w-full p-2 border-[1px]  border-gray-400 h-[300px]"
              placeholder="Source"
              defaultValue={data.src}
              onChange={(e) => {
                setFormData({ ...formData, src: e.target.value });
              }}
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg"
              onClick={() => {
                handleEdit(data._id);
              }}
            >
              <p className="">Save</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLocationFrame;
