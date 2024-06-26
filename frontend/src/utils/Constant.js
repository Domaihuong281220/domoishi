/** @format */
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const path = {
  HOME: "/",
  NEWS: "/news",
  NEWS_DETAIL: "/news_detail",
  MENU: "/menu",
  ABOUTUS: "/about",
  FRANCHISING: "/franchising",
  CAREERS: "/careers",
  LOCATIONS: "/locations",
  LOCATION_ORDER: "/locationorder",

  // Admin
  // Product
  LOGIN: "/login",
  PRODUCTMANAGE: "/manage-product",
  PRODUCTADD: "/create-product",
  PRODUCTVIEW: "/view-product",
  PRODUCTEDIT: "/edit-product",

  // Category
  CATEGORYMANAGE: "/manage-category",
  CATEGORYADD: "/create-category",
  CATEGORYEDIT: "/edit-category",

  // Contents

  CONTENTMANAGE: "/manage-content",
  CONTENTCREATE: "/create-content",
  CONTENTEDIT: "/edit-content",

  // Events
  EVENTMANAGE: "/manage-event",
  EVENTCREATE: "/create-event",
  EVENTEDIT: "/edit-event",

  // Jobs
  JOBMANAGE: "/manage-job",
  JOBCREATE: "/create-job",
  JOBEDIT: "/edit-job",

  UPLOADIMAGE: "upload-image",

  //MetaTag
  METATAG: "/metatag",

  // Users
  USERMANAGE: "/manage-user",
  CREATEUSER: "/create-user",
  EDITUSER: "/edit-user",
  USERVIEW: "/view-user",

  // Locations

  LOCATIONMANAGE: "/manage-location",
  CREATELOCATION: "/create-location",
  EDITLOCATION: "/edit-location",

  // Location Frame
  LOCATIONFRAME: "/location-frame",
  EDITLOCATIONFRAME: "/edit-location-frame",
  ERROR: "*",
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
export const useOnKeyPress = (callback, targetkey, searchKey) => {
  useEffect(() => {
    if (searchKey !== "") {
      const keyPressHandler = (event) => {
        if (event.key === targetkey) {
          callback();
        }
      };
      window.addEventListener("keydown", keyPressHandler);
      return () => {
        window.removeEventListener("keydown", keyPressHandler);
      };
    }
  }, [callback, targetkey]);
};
