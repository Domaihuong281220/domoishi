/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { path } from "../../../utils/Constant";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Table } from "antd";
const LocationsManage = () => {
  const [userData, setUserData] = useState([]);
  // API Get ALL user
  const handlegetUsers = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/users`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-secret-key": "Domoishi2024",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setUserData(response.data);
      } else {
        setUserData([]);
      }
    } catch (error) {
      console.log("error ", error);
    }
  };
  // API delete User

  const handledeleUser = async (id) => {
    await axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/user/${id}`, {
        headers: {
          "Content-Type": "application/json",
          // "x-secret-key": `${process.env.REACT_APP_SECRET_KEY}`,
          "x-secret-key": "Domoishi2024",
        },
      })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("Delete User successfully!");
          handlegetUsers();
          navigate("../" + path.USERMANAGE);
        }
      })
      .catch((err) => {
        toast.error("Delete User wrong: " + err.message);
      });
  };
  useEffect(() => {
    handlegetUsers();
  }, []);
  // console.log(userData);

  // console.log(user)
  const handleEditLoaction = (record) => {
    navigate("../" + path.EDITLOCATION, {
      state: record,
    });
  };
  // navigate
  const navigate = useNavigate();
  // Declare label for table
  const columns = [
    {
      title: "Location Name",
      dataIndex: "locationName",
      key: "locationName",
      fixed: "left",
    },

    {
      title: "Location Detail",
      dataIndex: "locationDetail",
      key: "locationDetail",
    },

    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Link Order",
      dataIndex: "linkOrder",
      key: "linkOrder",
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
            onClick={() => handleEditLoaction(record)}
          >
            <p className="">Edit</p>
          </button>

          <button
            className="hover:underline cursor-pointer hover:text-blue-500"
            // onClick={() => handledeleUser(record._id)}
          >
            <p className="">Delete</p>
          </button>
        </div>
      ),
    },
  ];

  // Mock data
  const data = [
    {
      key: "1",
      locationName: "Chesterfield",
      locationDetail: "6443 Centralia Rd Chesterfield, VA, 23832",
      phoneNumber: "(804) 821-0888",
      linkOrder: "https://app.adoluna.com/store.html#store",
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
          <p className="text-2xl">Location List</p>
        </div>
        <div className="">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-x-3">
              <button
                className="w-auto h-auto p-2 rounded-lg border-2 border-green-300 hover:border-green-500 flex items-center gap-x-2 hover:shadow-lg"
                onClick={() => navigate("../" + path.CREATELOCATION)}
              >
                <Icon
                  icon="material-symbols:add-location"
                  width={24}
                  height={24}
                ></Icon>
                <p className="">Create New Location</p>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[95%]">
              <Table
                columns={columns}
                dataSource={data}
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

export default LocationsManage;
