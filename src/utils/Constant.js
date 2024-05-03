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
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
