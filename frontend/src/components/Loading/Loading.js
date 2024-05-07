/** @format */

import React from "react";
import { Spin } from "antd";
const Loading = () => {
  return (
    <div className="py-10">
      <Spin size="large">
        <div className=""></div>
      </Spin>
    </div>
  );
};

export default Loading;
