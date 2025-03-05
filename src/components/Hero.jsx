import React from "react";
import herobg from "../assets/img/hero-bg.jpg";

const Hero = () => (
  <section id="hero" className="hero section dark-background">
    <img src={herobg} alt="" className="" />

    <div className="container">
      <h2>Samson Olagbile</h2>
      <p>
        I'm{" "}
        <span
          className="typed"
          data-typed-items="Designer, Developer, Freelancer, Photographer"
        >
          Data Analyst
        </span>
        <span
          className="typed-cursor typed-cursor--blink"
          aria-hidden="true"
        ></span>
        <span
          className="typed-cursor typed-cursor--blink"
          aria-hidden="true"
        ></span>
      </p>
    </div>
  </section>
);

export default Hero;
