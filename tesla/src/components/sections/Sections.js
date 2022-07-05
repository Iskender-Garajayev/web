import React from "react";
import "./Sections.css";
import tr2 from "../../img/tr2.png";

function Sections() {
  return (
    <div className="model_s">
      {/* model s */}
      <div>
        <h2>Model S</h2>
        <p>
          Order Oline for{" "}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Touchless Delivery
          </a>
        </p>
        <img src={tr2} alt="Tesla" />
        <div className="btn">
          <button type="submit">custem order</button>
          <button type="submit">existing investory</button>
        </div>
      </div>
    </div>
  );
}

export default Sections;
