/** @format */

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { path } from "./utils/Constant";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<DefaultLayout />} />

          <Route path={path.LOGIN} element={<LoginPage />} />
          {/* <Route path="/register" element={<RegisterPage />}></Route> */}
        </Routes>
        <ToastContainer position="bottom-center" autoClose={1000} />
      </Router>
    </div>
  );
}

export default App;
