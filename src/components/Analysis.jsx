import React, { useState } from "react";
import image1 from "../assets/img/sam/Picture1.png";
import image2 from "../assets/img/sam/Picture2.png";
import image3 from "../assets/img/sam/Picture3.png";
import image4 from "../assets/img/sam/Picture4.png";
import image5 from "../assets/img/sam/Picture5.png";
import image6 from "../assets/img/sam/Picture6.png";

const Analysis = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const portfolioData = {
    Analysis: {
      title: "Portfolio Analysis",
      description:
        "Here is a showcase of our portfolio items categorized for your convenience.",
    },

    portfolioItems: [
      {
        description: "Description for Item 1",
        image: image1,
        category: "category1",
        gallery: "portfolio-gallery",
      },
      {
        description: "Description for Item 2",
        image: image2,
        category: "category2",
        gallery: "portfolio-gallery",
      },
      {
        description: "Description for Item 3",
        image: image3,
        category: "category1",
        gallery: "portfolio-gallery",
      },
      {
        description: "Description for Item 4",
        image: image4,
        category: "category2",
        gallery: "portfolio-gallery",
      },
      {
        description: "Description for Item 5",
        image: image5,
        category: "category1",
        gallery: "portfolio-gallery",
      },
      {
        description: "Description for Item 6",
        image: image6,
        category: "category2",
        gallery: "portfolio-gallery",
      },
    ],
  };

  // Filter portfolio items based on selected category
  const filteredItems = portfolioData.portfolioItems.filter(
    (item) => activeFilter === "*" || item.category === activeFilter
  );

  return (
    <section id="portfolio" className="portfolio section light-background">
      {/* Section Title */}
      <div className="container section-title">
        <h2>{portfolioData.Analysis.title}</h2>
        <p>{portfolioData.Analysis.description}</p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div className="row gy-4 isotope-container">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category}`}
              >
                <div className="portfolio-content h-100">
                  <img
                    style={{ minHeight: "300px" }}
                    src={item.image}
                    className="img-fluid"
                    alt={item.title}
                  />
                  <div className="portfolio-info">
                    <p>{item.description}</p>
                    <a
                      href={item.image}
                      title={item.title}
                      data-gallery={item.gallery}
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    {/* <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
