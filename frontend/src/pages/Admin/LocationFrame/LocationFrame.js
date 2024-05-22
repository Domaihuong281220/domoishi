/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { path } from "../../../utils/Constant";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Table } from "antd";
const LocationFrame = () => {
  const [locationframeData, setlocationframeData] = useState([]);

  const handlegetLocationFrame = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/locationframe`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-secret-key": "Domoishi2024",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setlocationframeData(response.data);
      } else {
        setlocationframeData([]);
      }
    } catch (error) {
      console.log("error ", error);
    }
  };
  console.log(locationframeData);
  // API delete User

  // const handledeleUser = async (id) => {
  //   await axios
  //     .delete(`${process.env.REACT_APP_SERVER_URL}/user/${id}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         // "x-secret-key": `${process.env.REACT_APP_SECRET_KEY}`,
  //         "x-secret-key": "Domoishi2024",
  //       },
  //     })
  //     .then((res) => {
  //       if (res.status === 200 || res.status === 201) {
  //         toast.success("Delete User successfully!");
  //         handlegetUsers();
  //         navigate("../" + path.USERMANAGE);
  //       }
  //     })
  //     .catch((err) => {
  //       toast.error("Delete User wrong: " + err.message);
  //     });
  // };
  useEffect(() => {
    handlegetLocationFrame();
  }, []);
  // console.log(userData);

  // console.log(user)
  const handleEditLocationFrame = (record) => {
    navigate("../" + path.EDITLOCATIONFRAME, {
      state: record,
    });
  };
  // navigate
  const navigate = useNavigate();
  // Declare label for table
  const columns = [
    {
      title: "Source",
      dataIndex: "src",
      key: "src",
      fixed: "left",
    },

    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 100,
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <button
            className="hover:underline cursor-pointer hover:text-blue-500 "
            onClick={() => handleEditLocationFrame(record)}
          >
            <p className="">Edit</p>
          </button>
        </div>
      ),
    },
  ];

  // Mock data
  const data = [
    {
      key: "1",
      source: "link iframe",
    },
  ];

  // useEffect(() => {
  //   handleGetUserList();
  // }, []);

  return (
    <div className="">
      {/* Start Table UserList */}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">Location Frame</p>
        </div>
        <div className="">
          <div className="flex justify-center items-center">
            <div className="w-[95%]">
              <Table
                columns={columns}
                dataSource={locationframeData}
                pagination={{ pageSize: 5, position: ["bottomCenter"] }}
                scroll={{
                  x: "max-content",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* End Table User List */}
    </div>
  );
};

export default LocationFrame;
