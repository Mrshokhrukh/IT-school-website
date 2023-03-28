import React from "react";
import { Link } from "react-router-dom";
import "./auth.scss";
import svgAvatar from "../../images/avatar.auth.svg";
import developerImg from "../../images/computerPerson.svg";
import waveImg from "../../images/wave-haikei.svg";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
const Login = () => {
  return (
    <div className="container">
      <div className="wave-img-auth-page">
        <img src={waveImg} alt="404" />
      </div>
      <div className="user_auth_form">
        <img src={developerImg} alt="404" />
        <div className="user_auth">
          <form onSubmit={""}>
            <img src={svgAvatar} alt="404" />
            <h2>Kirish</h2>
            <div className="input-div">
              <div className="user-icon">
                <span>
                  <FaUser />
                </span>
              </div>
              <div>
                <h5>Username</h5>
                <input type="text" className="input" />
              </div>
            </div>
            <div className="input-div">
              <div className="user-icon">
                <span>
                  <FaLock />
                </span>
              </div>
              <div>
                <h5>Password</h5>
                <input type="password" className="input" />
              </div>
            </div>
            <Link to="" className="link-auth">
              forgot password ?
            </Link>
            <button className="auth-btn">Kirish</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
