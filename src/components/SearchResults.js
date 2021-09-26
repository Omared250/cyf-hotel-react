import React, { useState } from "react";
import moment from "moment";

const nights = (a, b) => {
  const firstMoment = moment(a);
  const secondMoment = moment(b);

  return firstMoment.diff(secondMoment, "days");
};

const TableRow = props => {
  return (
    <tr
      className={props.isSelected ? "changeColor" : undefined}
      onClick={props.handleClick}
    >
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
        <button
          className="btn btn-primary"
          onClick={() => props.setShowProfile(props.booking.id)}
        >
          Show profile
        </button>
      </td>
    </tr>
  );
};

const SearchResults = props => {
  const [selectedRows, setSelectedRows] = useState([]);
  //removes or adds an index to the selectedRows state array variable
  const toggleSelectedAtPosition = index => {
    // check if the given index is in the selectedRow array
    if (selectedRows.includes(index)) {
      // if it is:
      // create a new array without the index
      const newArray = selectedRows.filter(i => i !== index);
      // selectedRows with this new array
      setSelectedRows(newArray);
    } else {
      // if it's NOT:
      // create a new array which includes this index
      const newArray = selectedRows.concat(index);
      // selectedRows with this new array
      setSelectedRows(newArray);
    }
  };

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
            <TableRow
              key={index}
              booking={booking}
              setShowProfile={props.onShowCustomerProfile}
              handleClick={() => toggleSelectedAtPosition(index)}
              isSelected={selectedRows.includes(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
