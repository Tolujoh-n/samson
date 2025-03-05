import React, { useState, useEffect } from "react";
import contactData from "../data.json"; // Renamed import

const Contact = () => {
  const [contactInfo, setContactInfo] = useState(null); // Renamed state variable

  useEffect(() => {
    setContactInfo(contactData); // Set the renamed variable to the imported data
  }, []);

  if (!contactInfo) return <div>Loading...</div>; // Loading state

  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title">
        <h2>{contactInfo.Contact.title}</h2>
        <p>{contactInfo.Contact.description}</p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row gy-4">
          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="info-wrap">
              {contactInfo.contactInfo.map((info, index) => (
                <div key={index} className="info-item d-flex">
                  <i className={`bi ${info.icon} flex-shrink-0`}></i>
                  <div>
                    <h3>{info.title}</h3>
                    <p>{info.content}</p>
                  </div>
                </div>
              ))}
              {/* Google Map */}
              <iframe
                src={contactInfo.googleMap}
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "270px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* Contact Form */}
          <div className="col-lg-7">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email-field"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject-field"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="10"
                    id="message-field"
                    className="form-control"
                    required
                  ></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
          {/* End Contact Form */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
