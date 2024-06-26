/** @format */

import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "../components";
import { path } from "../utils/Constant";
import PrivateLayout from "./PrivateLayout";
import PublicLayout from "./PublicLayout";
import PublicRoute from "../utils/PublicRoute";
import PrivateRoute from "../utils/PrivateRoute";
import { allowedRoles } from "../utils/PrivateRoute";
import { useState } from "react";
import { ErrorPage } from "../pages";
const DefaultLayout = (props) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("UserInformation"))
  );
  //Routes
  const showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={route.main()}
            exact={route.exact}
          ></Route>
        );
      });
    }
    return result;
  };

  const showPrivateMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <ProtectedRoute
                isAllowed={
                  user
                    ? route.role
                      ? route.role.includes(user.role)
                      : false
                    : false
                }
                redirectPath={`../${path.NOTAUTH}`}
              >
                {route.main()}
              </ProtectedRoute>
            }
            exact={route.exact}
          ></Route>
        );
      });
    }
    return result;
  };

  return (
    <>
      {/* <Header /> */}
      {/* <Routes>{showContentMenu(routes)}</Routes>
      <Footer /> */}
      <Routes>
        <Route element={<PublicLayout />}>{showContentMenu(PublicRoute)}</Route>

        <Route
          element={
            <ProtectedRoute
              isAllowed={user ? allowedRoles.includes(user.role) : false}
            >
              <PrivateLayout />
            </ProtectedRoute>
          }
        >
          <Route path={`/${path.ERROR}`} element={<ErrorPage />} />
          {showPrivateMenu(PrivateRoute)}
        </Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default DefaultLayout;
