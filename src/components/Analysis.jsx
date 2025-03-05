import React, { useState, useEffect } from "react";
import data from "../data.json";

const Analysis = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [activeFilter, setActiveFilter] = useState("*");

  useEffect(() => {
    setPortfolioData(data); // Load data from JSON file
  }, []);

  if (!portfolioData) return <div>Loading...</div>; // Show loading state while fetching data

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
          {/* Portfolio Filters */}
          <ul className="portfolio-filters isotope-filters">
            {portfolioData.filters.map((filter, index) => (
              <li
                key={index}
                data-filter={filter.filter}
                className={filter.active ? "filter-active" : ""}
                onClick={() => setActiveFilter(filter.filter)}
              >
                {filter.label}
              </li>
            ))}
          </ul>
          {/* End Portfolio Filters */}

          <div className="row gy-4 isotope-container">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category}`}
              >
                <div className="portfolio-content h-100">
                  <img
                    src={item.image}
                    className="img-fluid"
                    alt={item.title}
                  />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a
                      href={item.image}
                      title={item.title}
                      data-gallery={item.gallery}
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
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
