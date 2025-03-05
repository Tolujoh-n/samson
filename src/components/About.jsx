import React from "react";
import data from "../data.json";
import profileImgSrc from "../assets/img/my-profile-img.jpg";

const About = () => (
  <section id={data.sectionId} className={data.sectionClass}>
    <div className="container section-title">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>

    <div className="container">
      <div className="row gy-4 justify-content-center">
        <div className="col-lg-4">
          <img src={profileImgSrc} className="img-fluid" alt="" />
        </div>
        <div className="col-lg-8 content">
          <h2>{data.heading}</h2>
          <p className="fst-italic py-3">{data.intro}</p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                {data.details.left.map((item, index) => (
                  <li key={index}>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>{item.label}:</strong> <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                {data.details.right.map((item, index) => (
                  <li key={index}>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>{item.label}:</strong> <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="py-3">{data.additionalInfo}</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
