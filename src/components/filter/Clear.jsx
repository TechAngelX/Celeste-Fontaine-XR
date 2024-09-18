import React from "react";
import '../../styles/index.css';


const FilterClear = (props) => {
  return (
      <div className="card mb-3 ricki-glass-effect ricki-fade-in ">
          <div className="card-body fw-bold text-uppercase">
          Filter by{" "}
              <button type="reset" className="btn btn-sm btn-light">
          <span aria-hidden="true">&times;</span> Clear All
        </button>
      </div>
    </div>
  );
};

export default FilterClear;
