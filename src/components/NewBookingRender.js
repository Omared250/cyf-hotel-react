import React from "react";

const NewBookingRender = props => {
  return (
    <tr>
      <th scope="row">{props.bookingInfo.id}</th>
      <td>{props.bookingInfo.title}</td>
      <td>{props.bookingInfo.firstName}</td>
      <td>{props.bookingInfo.surname}</td>
      <td>{props.bookingInfo.email}</td>
      <td>{props.bookingInfo.roomId}</td>
      <td>{props.bookingInfo.checkInDate}</td>
      <td>{props.bookingInfo.checkOutDate}</td>
    </tr>
  );
};

export default NewBookingRender;
