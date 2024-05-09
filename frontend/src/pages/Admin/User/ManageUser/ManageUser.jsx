/** @format */
import React, { useState, useEffect } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { Table, message } from "antd";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { path } from "../../../../utils/Constant";
const ManageUser = () => {
  const [messageApi, contextHolder] = message.useMessage();

  // const handleDeleteuser = async (id) => {
  //   await axios
  //     .delete(`http://103.157.218.126:8000/admin/deleteuser/${id}`)
  //     .then((res) => {
  //       if (res.status === 200 || res.status === 201) {
  //         messageApi.success("delete user success");
  //         handleGetUserList();
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const handleGetUserList = async () => {
  //   await axios
  //     .get("http://103.157.218.126:8000/admin/getalluser")
  //     .then((res) => {
  //       setuserData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const handleEditUser = (record) => {
    navigate("../" + path.EDITUSER, {
      state: record,
    });
  };
  // navigate
  const navigate = useNavigate();
  // Declare label for table
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    // {
    //   title: "Avatar",
    //   dataIndex: "avatar",
    //   key: "avatar",
    //   width: 100,
    //   render: (_, record) => (
    //     <div className="flex items-center justify-center gap-x-2">
    //       <img src={record.avatar} className="w-10 h-10 rounded-full"></img>
    //     </div>
    //   ),
    // },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
      // width: 100,
    },
    // {
    //   title: "Email",
    //   dataIndex: "email",
    //   key: "email",
    //   // width: 200
    // },
    { title: "Role", dataIndex: "role", key: "role" },
    // {
    //   title: "Date Of Birth",
    //   dataIndex: "dateofbirth",
    //   key: "dateofbirth",
    //   // width: 100,
    // },

    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 100,
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <button
            className="hover:underline cursor-pointer hover:text-blue-500 hover:font-bold"
            onClick={() => handleEditUser(record)}
          >
            <p className="">Edit</p>
          </button>

          <button
            className="hover:underline cursor-pointer hover:text-blue-500 hover:font-bold"
            // onClick={() => hanldedeleNews(record._id)}
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

      name: "John Doe",
      phone: "0909090909",
      role: "Admin",
      dateofbirth: "20/12/2000",
    },
  ];
  const [userData, setuserData] = useState([]);
  for (let i = 0; i < userData.length; i++) {
    data.push({
      key: i,
      id: userData[i].id,
      name: userData[i].name,
      avatar: userData[i].avatar,
      phone: userData[i].phone,
      address: userData[i].address,
      email: userData[i].email,
      role: userData[i].role,
      dateofbirth: "20/12/2000",
      // status: ["Online"],
    });
  }

  // useEffect(() => {
  //   handleGetUserList();
  // }, []);

  return (
    <div className="">
      {contextHolder}

      {/* Start Table UserList */}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">USER LIST</p>
        </div>
        <div className="">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-x-3">
              <button
                className="w-auto h-auto p-2 rounded-lg border-2 border-green-300 hover:border-green-500 flex items-center gap-x-2 hover:shadow-lg"
                onClick={() => navigate("../" + path.CREATEUSER)}
              >
                <Icon icon="mdi:user-add" width={24} height={24}></Icon>
                <p className="">Add New User</p>
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

export default ManageUser;
