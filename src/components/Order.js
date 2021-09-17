import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <li className="orders">
      {props.orderType}: {orders} <RestaurantButton handler={orderOne} />
    </li>
  );
};

export default Order;
