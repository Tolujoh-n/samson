import React, { useEffect, useState } from "react";
import data from "../data.json";

const Resume = () => {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    setResumeData(data); // Loading data from JSON file
  }, []);

  if (!resumeData) return <div>Loading...</div>; // Show loading while data is being fetched

  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title">
        <h2>{resumeData.Resume.title}</h2>
        <p>{resumeData.Resume.description}</p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>{resumeData.summary.name}</h4>
              <p>
                <em>{resumeData.summary.description}</em>
              </p>
              <ul>
                {resumeData.summary.contact.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            {/* End Resume Item */}

            <h3 className="resume-title">Education</h3>
            {resumeData.education.map((education, index) => (
              <div key={index} className="resume-item">
                <h4>{education.degree}</h4>
                <h5>{education.years}</h5>
                <p>
                  <em>{education.institution}</em>
                </p>
                <p>{education.description}</p>
              </div>
            ))}
            {/* End Resume Item */}
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            {resumeData.professionalExperience.map((experience, index) => (
              <div key={index} className="resume-item">
                <h4>{experience.title}</h4>
                <h5>{experience.years}</h5>
                <p>
                  <em>{experience.company}</em>
                </p>
                <ul>
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
            {/* End Resume Item */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
