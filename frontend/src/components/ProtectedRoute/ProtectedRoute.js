/** @format */

import React, { useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import { path } from "../../utils/Constant";

const ProtectedRoute = ({ isAllowed, children, redirectPath }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAllowed) {
      return navigate(redirectPath ? redirectPath : `${path.LOGIN}`);
    }
  }, []);

  return <>{isAllowed ? children ? children : <Outlet /> : <></>}</>;
};

export default ProtectedRoute;
