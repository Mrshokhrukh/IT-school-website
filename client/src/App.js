import React from "react";
import "./style/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home/Home";

import Bootcamp from "./pages/bootcamp/Bootcamp";
import Courses from "./pages/courses/Courses";
import About from "./pages/about/About";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="bootcamp" element={<Bootcamp />}></Route>
            <Route path="courses" element={<Courses />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="auth/login" element={<Login />}></Route>
            <Route path="auth/register" element={<SignUp />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
