import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const nights = (a, b) => {
  const firstMoment = moment(a);
  const secondMoment = moment(b);

  return firstMoment.diff(secondMoment, "days");
};

const TableRow = props => {
  const [highlightColor, setHighlightColor] = useState();

  const changeHighlightColor = () => {
    if (highlightColor === undefined) {
      setHighlightColor("changeColor");
    } else {
      setHighlightColor();
    }
  };

  const handleProfile = () => {
    return props.booking.id;
  };

  return (
    <tr className={highlightColor} onClick={changeHighlightColor}>
      <th scope="row">{props.booking.id}</th>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>{nights(props.booking.checkOutDate, props.booking.checkInDate)}</td>
      <td>
        <button className="btn btn-primary" onClick={handleProfile}>
          Show profile
        </button>
      </td>
    </tr>
  );
};

const SearchResults = props => {
  return (
    <div>
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check out Date</th>
            <th scope="col">Nights</th>
            <th scope="col">Buttons</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((booking, index) => (
            <TableRow key={index} booking={booking} />
          ))}
        </tbody>
      </table>
      <CustomerProfile id={props.results.id} />
    </div>
  );
};

export default SearchResults;
