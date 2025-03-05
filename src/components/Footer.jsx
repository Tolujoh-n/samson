import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer position-relative light-background">
        <div className="container">
          <div className="copyright text-center">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="px-1 sitename">SamsonPort</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
          </div>
        </div>
      </footer>
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default Footer;
