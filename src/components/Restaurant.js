import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <RestaurantButton handler={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
