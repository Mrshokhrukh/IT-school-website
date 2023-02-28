import React, { useEffect } from "react";
import "./home-title.scss";
import homeImg from "../../images/home-svg.svg";

const HomeText = () => {
  return (
    <div className="home-main-container">
      <div className="center-lf animate__animated animate__backInLeft">
        <h1 className="title ">
          Dasturlashni <br /> qulay <span>muhitda</span> <br /> O'rganing
        </h1>
      </div>

      <div className="center-rt animate__animated animate__backInRight">
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_iorpbol0.json"
          background="transparent"
          speed="1"
          loop
          autoplay
          style={{ width: "450px" }}
        ></lottie-player>

        {/* <img src={homeImg} alt="404" className="home-img" /> */}

       
      </div>
    </div>
  );
};

export default HomeText;
