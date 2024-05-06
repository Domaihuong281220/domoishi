/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [allImage, setAllImage] = useState(null);

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    const result = await axios.post(
      "http://localhost:8899/api/upload-image",
      formData
      // {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // }
    );
  };
  const getImage = async () => {
    const result = await axios.get("http://localhost:8899/api/get-image");
    setAllImage(result.data.data);
  };

  useEffect(() => {
    getImage();
  }, []);

  console.log(allImage);
  return (
    <div>
      {/* <div className="">Let upload image</div> */}
      <form onSubmit={submitImage}>
        <input
          className=""
          type="file"
          accept="image/*"
          onChange={onInputChange}
        ></input>
        <button type="submit" className="">
          Submit
        </button>
      </form>
      {allImage == null
        ? ""
        : allImage.map((item) => {
            return (
              <img
                className=""
                // src={require(`../../images/${item.image}`)}
                // key={item.id}
              ></img>
            );
          })}
    </div>
  );
};

export default ImageUpload;
