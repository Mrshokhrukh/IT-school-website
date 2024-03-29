import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./home-title.scss";
import "./home.responsive.scss";
import homeImg from "../../images/home-svg.svg";

const HomeText = () => {
  useEffect(() => {
    let txtsLength = document.querySelectorAll(".auto-changing-text").length;
    let values = document.querySelectorAll(".auto-changing-text");
    let index = 0;

    function animateText() {
      for (let i = 0; i < txtsLength; i++) {
        values[i].classList.remove("fade-in");
      }

      values[index].classList.add("fade-in");

      if (index === txtsLength - 1) {
        index = 0;
      } else {
        index++;
      }

      setTimeout(animateText, 3500);
    }

    animateText();
  }, []);

  return (
    <div className="home-main-container">
      <div className="center-lf animate__animated animate__backInLeft">
        <h1 className="title">
          zamonaviy kasblarni <br />
          <p>
            <span className="auto-changing-text">qulay muhitda</span>
            <span className="auto-changing-text">it-schoolda</span>
            <span className="auto-changing-text">masofadan turib</span>
            <span className="auto-changing-text">mutaxasislardan</span>
            <span className="auto-changing-text">biz bilan</span>
          </p>
          O'rganing
        </h1>
        <div className="home_info">
          <div className="home_info_text">
            <p>
              Zamonaviy kasblarni o'rganishga shoshiling.. <br />
              O'zingizga qulay bo'lgan vaqtda tajribali <br />
              mutaxassislardan ta'lim oling !
            </p>
          </div>
          <button className="button courses-btn">
            <Link to="/courses">Kurslar bilan tanishish</Link>
          </button>
        </div>
      </div>

      <div className="center-rt animate__animated animate__backInRight">
        <img src={homeImg} alt="" />

        {/* <img src={homeImg} alt="404" className="home-img" /> */}
      </div>
    </div>
  );
};

export default HomeText;
