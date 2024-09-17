import React from "react";
import "../../index.css";

const Line = (props) => {
  return (
    <div className={`progress ${props.className} `} style={{ height: 10 }}>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: "25%" }}
        aria-valuenow={25}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};
export default Line;
