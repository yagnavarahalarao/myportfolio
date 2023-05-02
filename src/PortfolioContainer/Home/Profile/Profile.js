import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="Profile-container">
      <div className="Profile-parent">
        <div className="Profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/yagnavarahalarao.ellapu">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.google.com">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://www.twitter.com">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span classname="highlighted-text">Yagna</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Frontend Developer",
                    3000,
                    "ReactJs",
                    3000,
                    "Redux",
                    3000,
                    "Javascript",
                    3000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a
              href="ReactJs-Frontend-Developer.pdf"
              download="ReactJs-Frontend-Developer.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
