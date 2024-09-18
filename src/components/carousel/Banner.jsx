import React from "react";
import { Link } from "react-router-dom";
import '../../styles/index.css';

const Item = ({ item, index }) => (
    <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
      <Link to={item.to}>
        <img src={item.img} className="img-fluid" alt={item.title} />
        {(item.title || item.description) && (
            <div className="carousel-caption d-none d-md-block">
              {item.title && <h5>{item.title}</h5>}
              {item.description && <p>{item.description}</p>}
            </div>
        )}
      </Link>
    </div>
);

const Indicator = ({ item, index }) => (
    <li
        data-bs-target={`#${item}`}
        data-bs-slide-to={index}
        className={`${index === 0 ? "active" : ""}`}
    />
);

const Banner = ({ id, className, data, interval }) => {
  return (
      <div
          id={id}
          className={`carousel slide ${className}`}
          data-bs-ride="carousel"
          data-bs-interval={interval || 2000} // Use the interval prop or default to 5000ms
          style={{ minHeight: 100 }}
      >
        <ol className="carousel-indicators">
          {data.map((item, index) => (
              <Indicator item={id} index={index} key={index} />
          ))}
        </ol>
        <div className="carousel-inner">
          {data.map((item, index) => (
              <Item item={item} index={index} key={index} />
          ))}
        </div>
        <a
            className="carousel-control-prev"
            href={`#${id}`}
            role="button"
            data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
            className="carousel-control-next"
            href={`#${id}`}
            role="button"
            data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
  );
};

export default Banner;
