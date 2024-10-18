import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../../styles/index.css';

const FilterCategory = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const fadeInElements = document.querySelectorAll('.CFXR-page2-fade-in');
    fadeInElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      fadeInElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
      <div className="card mb-3 ricki-glass-effect alt-body ">
        <div
            className="card-header fw-bold text-uppercase accordion-icon-button"
            data-bs-toggle="collapse"
            data-bs-target="#filterCategory"
            aria-expanded="true"
            aria-controls="filterCategory"
        >
          Categories
        </div>
        <ul className="list-group list-group-flush show" id="filterCategory">
          <li className="list-group-item">
            <Link to="/category/clothing" className="text-decoration-none stretched-link">
              Clothing
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/category/leather-bag" className="text-decoration-none stretched-link">
              Leather Bag
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/category/trousers" className="text-decoration-none stretched-link">
              Trousers
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/category/sweaters-cardigans" className="text-decoration-none stretched-link">
              Sweaters & Cardigans
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/category/high-heels" className="text-decoration-none stretched-link">
              High Heels
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/category/coats-jackets" className="text-decoration-none stretched-link">
              Coats & Jackets
            </Link>
          </li>
        </ul>
      </div>
  );
};

export default FilterCategory;
