import React from "react";
import moment from "moment";

const nights = (a, b) => {
  const firstMoment = moment(a);
  const secondMoment = moment(b);

  return firstMoment.diff(secondMoment, "days");
};

const TableRow = props => (
  <tr>
    <th scope="row">{props.booking.id}</th>
    <td>{props.booking.title}</td>
    <td>{props.booking.firstName}</td>
    <td>{props.booking.surname}</td>
    <td>{props.booking.email}</td>
    <td>{props.booking.roomId}</td>
    <td>{props.booking.checkInDate}</td>
    <td>{props.booking.checkOutDate}</td>
    <td>{nights(props.booking.checkOutDate, props.booking.checkInDate)}</td>
  </tr>
);

const SearchResults = props => (
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
      </tr>
    </thead>
    <tbody>
      {props.results.map((booking, index) => (
        <TableRow key={index} booking={booking} />
      ))}
    </tbody>
  </table>
);

export default SearchResults;
