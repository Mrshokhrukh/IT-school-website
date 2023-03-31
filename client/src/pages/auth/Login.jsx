import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./auth.scss";
import svgAvatar from "../../images/avatar.auth.svg";
import developerImg from "../../images/computerPerson.svg";
import waveImg from "../../images/wave-haikei.svg";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
const Login = () => {
  const handleFocus = (e) => {
    let focusInputDiv = document.querySelectorAll(".input-div")[1];
    focusInputDiv.classList.add("focus");
    // e.currentTarget.setAttribute(`value`, `+9989()`);
  };

  const handleSubmit = () => {};
  return (
    <div className="auth_page">
      <div className="wave-img-auth-page">
        <img src={waveImg} alt="404" className="wave" />
      </div>

      <div className="user_auth_form">
        <div className="dev-Svg-Img">
          <img src={developerImg} alt="404" />
        </div>
        <div className="user_auth">
          <form onSubmit={handleSubmit}>
            <img src={svgAvatar} alt="404" className="avatar" />
            <h2 className="form-title">Kirish</h2>
            <div className="input-div">
              <div className="form-icons">
                <span>
                  <FaUser />
                </span>
              </div>
              <div>
                <h5>foydalanuvchi ismi</h5>
                <input
                  type="text"
                  className="input"
                  name="username"
                  onFocus={handleFocus}
                />
              </div>
            </div>
            <div className="input-div">
              <div className="form-icons">
                <span>
                  <FaPhone />
                </span>
              </div>
              <div>
                <h5>Telefon raqam</h5>
                <input
                  type="text"
                  className="input"
                  name="phone_number"
                  onFocus={handleFocus}
                  maxLength="16"
                />
              </div>
            </div>
            <div className="link-to-register">
              <Link to="" className="link-auth">
                forgot password ?
              </Link>
            </div>
            <button className="auth-btn">Kirish</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
