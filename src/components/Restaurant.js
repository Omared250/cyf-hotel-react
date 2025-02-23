import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
