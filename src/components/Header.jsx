import React from "react";
import profile from "../assets/img/my-profile-img.jpg";

const Header = () => (
  <header id="header" className="header dark-background d-flex flex-column">
    <i className="header-toggle d-xl-none bi bi-list"></i>

    <div className="profile-img">
      <img src={profile} alt="" className="img-fluid rounded-circle" />
    </div>

    <a
      href="index.html"
      className="logo d-flex align-items-center justify-content-center"
    >
      {/* Uncomment the line below if you also wish to use an image logo */}
      {/* <img src="assets/img/logo.png" alt="" /> */}
      <h1 className="sitename">Samson Olagbile</h1>
    </a>

    <div className="social-links text-center">
      <a href="https://github.com/Samson-Olagbile" className="twitter">
        <i className="bi bi-twitter-x"></i>
      </a>
      <a href="https://github.com/Samson-Olagbile" className="facebook">
        <i className="bi bi-facebook"></i>
      </a>
      <a href="https://github.com/Samson-Olagbile" className="instagram">
        <i className="bi bi-instagram"></i>
      </a>
      <a href="https://github.com/Samson-Olagbile" className="google-plus">
        <i className="bi bi-skype"></i>
      </a>
      <a href="https://github.com/Samson-Olagbile" className="linkedin">
        <i className="bi bi-linkedin"></i>
      </a>
    </div>

    <nav id="navmenu" className="navmenu">
      <ul>
        <li>
          <a href="#hero" className="active">
            <i className="bi bi-house navicon"></i>Home
          </a>
        </li>
        <li>
          <a href="#about">
            <i className="bi bi-person navicon"></i> About
          </a>
        </li>
        <li>
          <a href="#resume">
            <i className="bi bi-file-earmark-text navicon"></i> Resume
          </a>
        </li>
        {/* <li>
          <a href="#portfolio">
            <i className="bi bi-images navicon"></i> Analysis
          </a>
        </li> */}
        <li>
          <a href="#services">
            <i className="bi bi-hdd-stack navicon"></i> Services
          </a>
        </li>

        <li>
          <a href="#contact">
            <i className="bi bi-envelope navicon"></i> Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
