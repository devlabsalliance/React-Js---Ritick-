import React from "react";
import "../Comp/Card.css";
const Card = (props) => {
  return (
    <div className="card">
      <div className="img">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      
      <h1>{props.title}</h1>
      <p>{props.Description}</p>
      
      <button className="btn"><a href="https://www.devlabsalliance.com/">Visit Us</a></button>
    </div>
  );
};

export default Card;
