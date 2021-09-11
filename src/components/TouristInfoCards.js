import React from "react";

const TouristInfoCards = props => (
  <div className="card text-center">
    <img src={props.imgSrc} className="card-img-top h-50" alt="#" />
    <div className="card-body">
      <h3>{props.cityName}</h3>
      <p>{props.cityDescription}</p>
      <a href={props.cityLink} className="btn btn-primary">
        More Information
      </a>
    </div>
  </div>
);

export default TouristInfoCards;
