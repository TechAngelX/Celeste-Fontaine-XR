import React from "react";
import "../../index.css";

const Carousel = (props) => {
    return (
        <div
            id={props.id}
            className={`carousel slide ${props.className}`}
            data-bs-ride="carousel"
            data-bs-interval={props.interval} // This sets the interval for the slides
        >
            <div className="carousel-inner">{props.children}</div>
            <a
                className="carousel-control-prev"
                href={"#" + props.id}
                role="button"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a
                className="carousel-control-next"
                href={"#" + props.id}
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
