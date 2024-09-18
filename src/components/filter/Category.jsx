import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../../styles/index.css';
import '../../styles/FilterCategory.css';

const FilterCategory = () => {
  useEffect(() => {
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optionally, unobserve the element once it's visible
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    // Target elements with the fade-in class
    const fadeInElements = document.querySelectorAll('.ricki-fade-in');
    fadeInElements.forEach((element) => {
      observer.observe(element);
    });

    // Clean up observer on component unmount
    return () => {
      fadeInElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
      <div className="card mb-3 ricki-glass-effect ricki-fade-in ">
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
            <Link to="/" className="text-decoration-none stretched-link">
              Clothing
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/" className="text-decoration-none stretched-link">
              Leather Bag
            </Link>
          </li>
          <li className="list-group-item rick">
            <Link to="/" className="text-decoration-none stretched-link">
              Trousers
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/" className="text-decoration-none stretched-link">
              Sweaters & Cardigans
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/" className="text-decoration-none stretched-link">
              High Heels
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/" className="text-decoration-none stretched-link">
              Coats & Jackets
            </Link>
          </li>
        </ul>
      </div>
  );
};

export default FilterCategory;
