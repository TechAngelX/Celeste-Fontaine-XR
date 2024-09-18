import React from "react";
import '../../styles/index.css';

const Carousel = ({ id, className, interval = 2000, children }) => {
    return (
        <div
            id={id}
            className={`carousel slide ${className}`}
            data-bs-ride="carousel"
            data-bs-interval={interval} // This sets the interval for the slides
        >
            <div className="carousel-inner">
                {children}
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

export default Carousel;
