/** @format */
import axiosConfig from "../utils/axiosConfig";

export const apiCreateNews = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/image",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
