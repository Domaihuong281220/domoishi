/** @format */

import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SidebarAd } from "../components";
function PrivateLayout() {
  // Login
  const navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("UserInformation"));

  // console.log(user.user.role);
  return (
    <>
      {/* <HeaderAd /> */}

      {user.role === "admin" ? (
        <div className=" grid grid-cols-5 h-full ">
          <div className="col-span-1 h-full">
            <SidebarAd />
          </div>

          <div className="col-span-4 h-full mt-4">
            <Outlet />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default PrivateLayout;
