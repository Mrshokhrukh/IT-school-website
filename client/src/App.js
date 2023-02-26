import React from "react";
import "./style/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home/Home";
import Login from "./components/Login/Login";
import Auth from "./pages/auth/Auth";
import SignUp from "./components/SignUp/SignUp";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            
          </Route>
          <Route path="auth" element={<Auth />}>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<SignUp />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
