/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import "./HeaderData";
import {
  WhatWeDo,
  Solutions,
  Company,
  Customers,
  Insights,
  Partners,
} from "./HeaderData";
import { DownOutlined, UpOutlined, MenuOutlined } from "@ant-design/icons";
import { message, Space, Col, Divider, Row } from "antd";
import logo from "./logo.png";

const Header = () => {
  const navigate = useNavigate();

  const [visible, setvisible] = useState("none");
  const [visibleWhatWeDo, setvisibleWhatWeDo] = useState("none");
  const [visibleSolutions, setvisibleSolutions] = useState("none");
  const [visibleCompany, setvisibleCompany] = useState("none");
  const [visiblePartners, setvisiblePartners] = useState("none");
  const [visibleCustomers, setvisibleCustomers] = useState("none");
  const [visibleInsights, setvisibleInsights] = useState("none");

  const onClickNavBar = () => {
    if (visible == "none") {
      setvisible("block");
    } else {
      setvisible("none");
      setvisibleCompany("none");
      setvisibleCustomers("none");
      setvisibleInsights("none");
      setvisiblePartners("none");
      setvisibleSolutions("none");
      setvisibleWhatWeDo("none");
    }
  };

  const onClickNavBarWhatWeDo = () => {
    if (visibleWhatWeDo == "none") {
      setvisibleWhatWeDo("block");
    } else {
      setvisibleWhatWeDo("none");
    }
  };

  const onClickNavBarSolutions = () => {
    if (visibleSolutions == "none") {
      setvisibleSolutions("block");
    } else {
      setvisibleSolutions("none");
    }
  };

  const onClickNavBarCompany = () => {
    if (visibleCompany == "none") {
      setvisibleCompany("block");
    } else {
      setvisibleCompany("none");
    }
  };

  const onClickNavBarCustomers = () => {
    if (visibleCustomers == "none") {
      setvisibleCustomers("block");
    } else {
      setvisibleCustomers("none");
    }
  };

  const onClickNavBarInsights = () => {
    if (visibleInsights == "none") {
      setvisibleInsights("block");
    } else {
      setvisibleInsights("none");
    }
  };
  const onClickNavBarPartners = () => {
    if (visiblePartners == "none") {
      setvisiblePartners("block");
    } else {
      setvisiblePartners("none");
    }
  };

  return (
    <>
      <Row justify="center" align="middle" className="header-container-pc">
        <Col span={5} className="logo-col">
          <img
            className="logo"
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
          />
        </Col>
        <Col span={19} className="navbar-pc">
          <Row justify="center" align="middle" className="header-content">
            <Col span={3.2} className="whatwedo-hover">
              <div className="dropdown dropdown-whatwedo">
                <h2 className="title dropbtn">
                  What we do <DownOutlined className="downicon-whatwedo" />
                  <UpOutlined className="upicon-whatwedo upicon" />
                </h2>
                <div className="dropdown-content dropdown-content-whatwedo">
                  <Row justify="center" align="top">
                    {WhatWeDo.map((item, index) => {
                      return (
                        <Col span={8}>
                          <a className="subtittle">{item.label}</a>
                          {item.list.map((subitem, subindex) => {
                            return (
                              <Row justify="center" align="top">
                                <a>{subitem.label}</a>
                              </Row>
                            );
                          })}
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </div>
            </Col>
            <Col span={3.2} className="solutions-hover">
              <div className="dropdown dropdown-solutions">
                <h2 className="title dropbtn">
                  Solutions
                  <DownOutlined className="downicon-solutions" />
                  <UpOutlined className="upicon upicon-solutions" />
                </h2>
                <div className="dropdown-content dropdown-content-solutions">
                  <Row justify="center" align="top">
                    {Solutions.map((item, index) => {
                      return (
                        <Col span={8}>
                          <a className="subtittle">{item.label}</a>
                          {item.list.map((subitem, subindex) => {
                            return (
                              <Row justify="center" align="top">
                                <a>{subitem.label}</a>
                              </Row>
                            );
                          })}
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </div>
            </Col>
            <Col span={3.2} className="customers-hover">
              <div className="dropdown dropdown-customers">
                <h2 className="title dropbtn">
                  Customers
                  <DownOutlined className="downicon-customers" />
                  <UpOutlined className="upicon upicon-customers" />
                </h2>
                <div className="dropdown-content dropdown-content-customers">
                  <Row justify="center" align="top">
                    {Customers.map((item, index) => {
                      return (
                        <Col span={12}>
                          <a className="subtittle">{item.label}</a>
                          {item.list.map((subitem, subindex) => {
                            return (
                              <Row justify="center" align="top">
                                <a>{subitem.label}</a>
                              </Row>
                            );
                          })}
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </div>
            </Col>
            <Col span={3.2} className="partners-hover">
              <div className="dropdown dropdown-partners">
                <h2 className="title dropbtn">
                  Partners
                  <DownOutlined className="downicon-partners" />
                  <UpOutlined className="upicon upicon-partners" />
                </h2>
                <div className="dropdown-content dropdown-content-partners">
                  <Row justify="center" align="top">
                    {Partners.map((item, index) => {
                      return (
                        <Col span={12}>
                          <a className="subtittle">{item.label}</a>
                          {item.list.map((subitem, subindex) => {
                            return (
                              <Row justify="center" align="top">
                                <a>{subitem.label}</a>
                              </Row>
                            );
                          })}
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </div>
            </Col>
            <Col span={3.2} className="company-hover">
              <div className="dropdown dropdown-company">
                <h2 className="title dropbtn">
                  Company
                  <DownOutlined className="downicon-company" />
                  <UpOutlined className="upicon upicon-company" />
                </h2>
                <div className="dropdown-content dropdown-content-company">
                  <Row justify="center" align="top">
                    {Company.map((item, index) => {
                      return (
                        <Col span={8}>
                          <a className="subtittle">{item.label}</a>
                          {item.list.map((subitem, subindex) => {
                            return (
                              <Row justify="center" align="top">
                                <a>{subitem.label}</a>
                              </Row>
                            );
                          })}
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </div>
            </Col>
            <Col span={3} className="insights-hover">
              <div className="dropdown dropdown-insights">
                <h2 className="title dropbtn">
                  Insights
                  <DownOutlined className="downicon-insights" />
                  <UpOutlined className="upicon-insights upicon" />
                </h2>
                <div className="dropdown-content dropdown-content-insights">
                  <Row justify="center" align="top">
                    {Insights.map((item, index) => {
                      return (
                        <Col span={24}>
                          <a className="subtittle">{item.label}</a>
                          {item.list.map((subitem, subindex) => {
                            return (
                              <Row justify="center" align="top">
                                <a>{subitem.label}</a>
                              </Row>
                            );
                          })}
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </div>
            </Col>
            <Col span={3.2}>
              <button className="contact-btn">Contact us</button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center" align="middle" className="header-container-mobile">
        <Col span={16} className="logo-col-mobile">
          <img
            className="logo-mobile"
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
          />
        </Col>
        <Col span={8} className="navbar-mobile">
          <MenuOutlined onClick={() => onClickNavBar()} />
        </Col>
        <div
          className="dropdown-mobile-container"
          style={{ display: visible }}
          onClick={() => onClickNavBar()}
        ></div>
        <div className="dropdown-mobile" style={{ display: visible }}>
          <h2 className="title dropbtn" onClick={() => onClickNavBarWhatWeDo()}>
            What we do <DownOutlined className="downicon-whatwedo" />
            <UpOutlined className="upicon-whatwedo upicon" />
          </h2>
          {Customers.map((item, index) => {
            return (
              <div style={{ display: visibleWhatWeDo }}>
                <a className="subtittle">{item.label}</a>
                {item.list.map((subitem, subindex) => {
                  return (
                    <Row justify="end" align="top">
                      <a>{subitem.label}</a>
                    </Row>
                  );
                })}
              </div>
            );
          })}
          <h2
            className="title dropbtn"
            onClick={() => onClickNavBarSolutions()}
          >
            Solutions
            <DownOutlined className="downicon-solutions" />
            <UpOutlined className="upicon upicon-solutions" />
          </h2>
          {Solutions.map((item, index) => {
            return (
              <div style={{ display: visibleSolutions }}>
                <a className="subtittle">{item.label}</a>
                {item.list.map((subitem, subindex) => {
                  return (
                    <Row justify="end" align="top">
                      <a>{subitem.label}</a>
                    </Row>
                  );
                })}
              </div>
            );
          })}

          <h2
            className="title dropbtn"
            onClick={() => onClickNavBarCustomers()}
          >
            Customers
            <DownOutlined className="downicon-customers" />
            <UpOutlined className="upicon upicon-customers" />
          </h2>
          {Customers.map((item, index) => {
            return (
              <div style={{ display: visibleCustomers }}>
                <a className="subtittle">{item.label}</a>
                {item.list.map((subitem, subindex) => {
                  return (
                    <Row justify="end" align="top">
                      <a>{subitem.label}</a>
                    </Row>
                  );
                })}
              </div>
            );
          })}
          <h2 className="title dropbtn" onClick={() => onClickNavBarPartners()}>
            Partners
            <DownOutlined className="downicon-partners" />
            <UpOutlined className="upicon upicon-partners" />
          </h2>

          {Partners.map((item, index) => {
            return (
              <div style={{ display: visiblePartners }}>
                <a className="subtittle">{item.label}</a>
                {item.list.map((subitem, subindex) => {
                  return (
                    <Row justify="end" align="top">
                      <a>{subitem.label}</a>
                    </Row>
                  );
                })}
              </div>
            );
          })}

          <h2 className="title dropbtn" onClick={() => onClickNavBarCompany()}>
            Company
            <DownOutlined className="downicon-company" />
            <UpOutlined className="upicon upicon-company" />
          </h2>
          {Company.map((item, index) => {
            return (
              <div style={{ display: visibleCompany }}>
                <a className="subtittle">{item.label}</a>
                {item.list.map((subitem, subindex) => {
                  return (
                    <Row justify="end" align="top">
                      <a>{subitem.label}</a>
                    </Row>
                  );
                })}
              </div>
            );
          })}
          <h2 className="title dropbtn" onClick={() => onClickNavBarInsights()}>
            Insights
            <DownOutlined className="downicon-insights" />
            <UpOutlined className="upicon-insights upicon" />
          </h2>
          {Insights.map((item, index) => {
            return (
              <div style={{ display: visibleInsights }}>
                <a className="subtittle">{item.label}</a>
                {item.list.map((subitem, subindex) => {
                  return (
                    <Row justify="end" align="top">
                      <a>{subitem.label}</a>
                    </Row>
                  );
                })}
              </div>
            );
          })}
        </div>
      </Row>
    </>
  );
};

export default Header;
