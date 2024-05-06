/** @format */

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { path } from "./utils/Constant";

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
        <div></div>
      </Router>
    </div>
  );
}

export default App;
