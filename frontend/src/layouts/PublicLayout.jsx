/** @format */

import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";
function PublicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <BackToTopButton /> */}
      <Footer />
    </>
  );
}

export default PublicLayout;
