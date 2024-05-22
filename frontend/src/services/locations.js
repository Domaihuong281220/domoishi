/** @format */
import axiosConfig from "../utils/axiosConfig";
import { notification } from "antd";

export const apigetLocations = async () => {
  try {
    const response = await axiosConfig({
      method: "GET",
      url: "/locations",
    });
    return response;
  } catch (error) {
    notification.error({
      message: `An error has occur: ${error}`,
      placement: "topRight",
      duration: 2,
    });
  }
};
