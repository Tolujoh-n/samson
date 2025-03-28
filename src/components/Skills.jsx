import React from "react";
import data from "../data.json";

const Skills = () => {
  return (
    <>
      <section id="skills" className="skills section light-background">
        {/* Section Title */}
        <div className="container section-title">
          <h2>Skills</h2>
          <p>
            Proficient in analyzing complex datasets to extract meaningful
            insights, support data-driven decision-making, and deliver
            actionable recommendations to improve business outcomes.
          </p>
        </div>
        {/* End Section Title */}

        <div className="container">
          <div className="row skills-content skills-animation">
            <div className="col-lg-6">
              {data.skills
                .slice(0, Math.ceil(data.skills.length / 2))
                .map((skill, index) => (
                  <div className="progress" key={index}>
                    <span className="skill">
                      <span>{skill.skill}</span>{" "}
                      <i className="val">{skill.value}%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={skill.value}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="col-lg-6">
              {data.skills
                .slice(Math.ceil(data.skills.length / 2))
                .map((skill, index) => (
                  <div className="progress" key={index}>
                    <span className="skill">
                      <span>{skill.skill}</span>{" "}
                      <i className="val">{skill.value}%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={skill.value}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
