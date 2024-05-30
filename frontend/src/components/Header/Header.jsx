/** @format */

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import logo from "./domoishilogo.png";
import clevertap from "clevertap-web-sdk";

const Header = () => {
  const location = useLocation(); // Get the current location

  // Log the current path
  // console.log('Current path:', location.pathname);
  const navigate = useNavigate();

  // State to control login form visibility
  const [showLoginForm, setShowLoginForm] = useState(false);

  // State to track email and password input values
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");

  // Function to toggle login form visibility
  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  // Function to handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    clevertap.onUserLogin.push({
      "Site": {
        // "Name": "Do Mai Huong",            // String
        "Identity": identity,              // String or number
        // "Email": 'huongdm@1cinnovation.com',         // Email address of the user
        // "Phone": "+14155551564",           // Phone (with the country code)
        // "Gender": "F",                     // Can be either M or F
        // "DOB": new Date(),                 // Date of Birth. Date object
      }
     })
    setShowLoginForm(false);
  };

  return (
    <div className="h-fit bg-red-500">
      <nav className="bg-white w-full z-20 top-0 start-0 pt-8 md:max-lg:pb-8 pv:max-md:pt-0">
        <div className="flex flex-wrap items-center justify-between mx-[10%] ph:max-md:mx-[8%] pv:max-ph:mx-[6%] 2xl:pb-4">
          <a href="/" className="flex items-center rtl:space-x-reverse">
            <img
              src={logo}
              className="2xl:h-fit w-[14vw] lg:mb-4 2xl:mb-0 pv:max-md:w-12 pv:max-md:mt-4"
              alt="Logo"
            />
          </a>

          <div
            className="items-center justify-between w-full pv:max-md:w-fit md:flex md:w-auto md:order-1"
            id=""
          >
            <ul className="flex flex-row p-4 md:p-0 mt-4 font-shopee_bold text-[1vw] pv:max-md:text-[1.2vw] rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <a
                  href="/menu"
                  className={`${
                    location.pathname === "/menu"
                      ? "block py-2 px-1 rounded md:bg-transparent text-[#CB1313] md:p-0 2xl:mt-10"
                      : "block py-2 px-1 rounded md:bg-transparent md:hover:text-[#CB1313] md:p-0 2xl:mt-10"
                  }`}
                  aria-current="page"
                >
                  MENU
                </a>
              </li>
              <li>
                <a
                  href="/locations"
                  className={`${
                    location.pathname === "/locations"
                      ? "block py-2 px-1 rounded md:bg-transparent text-[#CB1313] md:p-0 2xl:mt-10"
                      : "block py-2 px-1 rounded md:bg-transparent md:hover:text-[#CB1313] md:p-0 2xl:mt-10"
                  }`}
                >
                  LOCATIONS
                </a>
              </li>
              <li>
                <a
                  href="/franchising"
                  className={`${
                    location.pathname === "/franchising"
                      ? "block py-2 px-1 rounded md:bg-transparent text-[#CB1313] md:p-0 2xl:mt-10"
                      : "block py-2 px-1 rounded md:bg-transparent md:hover:text-[#CB1313] md:p-0 2xl:mt-10"
                  }`}
                >
                  FRANCHISING
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={`${
                    location.pathname === "/about"
                      ? "block py-2 px-1 rounded md:bg-transparent text-[#CB1313] md:p-0 2xl:mt-10"
                      : "block py-2 px-1 rounded md:bg-transparent md:hover:text-[#CB1313] md:p-0 2xl:mt-10"
                  }`}
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className={`${
                    location.pathname === "/careers"
                      ? "block py-2 px-1 rounded md:bg-transparent text-[#CB1313] md:p-0 2xl:mt-10"
                      : "block py-2 px-1 rounded md:bg-transparent md:hover:text-[#CB1313] md:p-0 2xl:mt-10"
                  }`}
                >
                  CAREERS
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className={`${
                    location.pathname === "/news"
                      ? "block py-2 px-1 rounded md:bg-transparent text-[#CB1313] md:p-0 2xl:mt-10"
                      : "block py-2 px-1 rounded md:bg-transparent md:hover:text-[#CB1313] md:p-0 2xl:mt-10"
                  }`}
                >
                  NEWS
                </a>
              </li>
            </ul>
          </div>
          <div className="flex md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <button
              className="bg-[#CB1313] pv:max-md:mt-4 text-white font-shopee_bold text-[1.1vw] py-[1.1vw] px-[3.3vw] rounded-full 2xl:mt-8 pv:max-md:py-[5px] pv:max-md:px-[10px] pv:max-md:text-[7px]"
              onClick={toggleLoginForm}
            >
              LOGIN
            </button>
          </div>
        </div>
      </nav>

      {/* Conditional rendering of login form */}
      {showLoginForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-xl mb-4">Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label className="block mb-2">Phone number:</label>
                <input
                  type="number"
                  value={identity}
                  onChange={(e) => setIdentity(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-[#CB1313] text-white py-2 px-4 rounded"
              >
                Login
              </button>
              <button
                type="button"
                className="ml-4 text-[#CB1313] py-2 px-4 rounded"
                onClick={toggleLoginForm}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
