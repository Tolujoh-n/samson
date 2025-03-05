import React, { useState, useEffect } from "react";
import servicesData from "../data.json";

const Services = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(servicesData); // Load data from JSON file
  }, []);

  if (!data) return <div>Loading...</div>; // Loading state

  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title">
        <h2>{data.Servicessection.title}</h2>
        <p>{data.Servicessection.description}</p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">
          {data.services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 service-item d-flex">
              <div className="icon flex-shrink-0">
                <i className={`bi ${service.icon}`}></i>
              </div>
              <div>
                <h4 className="title">
                  <a href={service.link} className="stretched-link">
                    {service.title}
                  </a>
                </h4>
                <p className="description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
