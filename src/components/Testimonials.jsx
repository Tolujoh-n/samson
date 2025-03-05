import React from "react";
import testimonialsData from "../data.json";
import testimony1 from "../assets/img/testimonials/testimonials-1.jpg";
import testimony2 from "../assets/img/testimonials/testimonials-2.jpg";
import testimony3 from "../assets/img/testimonials/testimonials-3.jpg";

const Testimonials = () => {
  const testimonials = testimonialsData.testimonials.slice(0, 3); // Display only the first three testimonials
  const images = [testimony1, testimony2, testimony3]; // Array of images

  return (
    <section
      id="testimonials"
      className="testimonials section light-background"
    >
      {/* Section Title */}
      <div className="container section-title">
        <h2>{testimonialsData.Testimonials.title}</h2>
        <p>{testimonialsData.Testimonials.description}</p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="testimonials-row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                <span>{testimonial.quote}</span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <img
                src={images[index]}
                className="testimonial-img"
                alt={testimonial.name}
              />
              <h3>{testimonial.name}</h3>
              <h4>{testimonial.role}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
