/** @format */

import React, { useEffect, useState } from "react";
import { Input } from "@material-tailwind/react";
import { Icon } from "@iconify/react";

import { Select } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { isValidInputProduct } from "../../../../helpers/validInputs";
import { path } from "../../../../utils/Constant";

const EditEvent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let newsData = location.state;
  // console.log(newsData);
  const [formData, setFormData] = useState({
    title: newsData.title,
    shortdescription: newsData.shortdescription,
    longdescription: newsData.longdescription,
    titlepic: newsData.titlepic,
    detailpic: newsData.detailpic,
  });

  console.log(formData, "form data");
  const [files, setFiles] = useState([]); // Using an array to store files
  const [gfsInitialized, setGfsInitialized] = useState(false);

  const handleFileChange = (event, index) => {
    const newFiles = [...files]; // Make a copy of the current files array
    newFiles[index] = event.target.files[0]; // Update the file at the specified index
    setFiles(newFiles); // Update the state
  };

  // Call API

  const handleEdit = async (id) => {
    await axios
      .put(`${process.env.REACT_APP_SERVER_URL}/news/${id}`, formData)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("Edit news successfully!");

          navigate("../" + path.EVENTMANAGE);
        }
      })
      .catch((err) => {
        toast.error("Edit news wrong: " + err.message);
      });
  };

  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl"> EDIT NEWS</p>
        </div>
        {/* Start Form Edit Product */}
        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Name News</p>
            <Input
              type="text"
              className="w-full h-auto border-[1px] p-2"
              placeholder="Name Event"
              defaultValue={newsData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">
              Long Description
              <span className="text-[10px] text-red-500">
                (Content to display on the news page)
              </span>
            </p>
            <textarea
              className="w-full h-[300px] border-[1px] p-2"
              placeholder="Description"
              defaultValue={newsData.longdescription}
              onChange={(e) =>
                setFormData({ ...formData, longdescription: e.target.value })
              }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">
              Short Description
              <span className="text-[10px] text-red-500">
                (Content to display on the details page)
              </span>
            </p>
            <textarea
              className="w-full h-[200px] border-[1px] p-2"
              placeholder="short description"
              defaultValue={newsData.shortdescription}
              onChange={(e) => {
                setFormData({ ...formData, shortdescription: e.target.value });
              }}
            />
          </div>

          <div className="flex ">
            <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
              <p className="text-lg">Image Title</p>
              <button className="w-auto h-auto py-2 px-4  border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg">
                <img
                  className="w-[200px] object-cover"
                  src={`${process.env.REACT_APP_SERVER_URL}/${newsData.titlepic}`}
                  onChange={(e) =>
                    setFormData({ ...formData, titlepic: e.target.value })
                  }
                ></img>
              </button>

              <p className="">jpg , png , jpeg</p>
            </div>
            <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
              <p className="text-lg">Image Detail</p>
              <button className="w-auto h-auto py-2 px-4  border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg">
                <img
                  className="w-[200px]  object-cover"
                  src={`${process.env.REACT_APP_SERVER_URL}/${newsData.detailpic}`}
                  onChange={(e) =>
                    // setFormData({ ...formData, detailpic: e.target.value })

                    console.log(e.target.value)
                  }
                ></img>
              </button>

              <p className="">jpg , png , jpeg</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-x-4">
            <button
              className="w-auto h-auto py-2 px-4 bg-slate-50 border-2 border-blue-300 rounded-lg hover:bg-slate-200 hover:shadow-lg"
              onClick={() => {
                navigate(-1);
              }}
            >
              <p className="">Back</p>
            </button>

            <button
              className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg "
              onClick={() => handleEdit(newsData._id)}
            >
              <p className="">Save</p>
            </button>
          </div>
        </div>
        {/* End Form Edit Product */}
      </div>
    </div>
    // <div className="">daskjdh</div>
  );
};

export default EditEvent;
