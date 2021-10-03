import React, { useState } from "react";

const NewBooking = props => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [title, setTitle] = useState("");
  const [room, setRoom] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    props.onSubmit([
      { firstName, surname, title, room, id, email, checkInDate, checkOutDate }
    ]);
  };

  return (
    <form
      className="container d-flex flex-column align-items-center"
      onSubmit={handleSubmit}
    >
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        value={firstName}
        placeholder="Enter your First Name"
        id="firstName"
        className="input-size"
        onChange={event => setFirstName(event.target.value)}
      />
      <label htmlFor="surname">Surname: </label>
      <input
        type="text"
        value={surname}
        placeholder="Enter your surname"
        id="surname"
        className="input-size"
        onChange={event => setSurname(event.target.value)}
      />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        value={email}
        placeholder="Enter your Email"
        id="email"
        className="input-size"
        onChange={event => setEmail(event.target.value)}
      />
      <label htmlFor="title">Title: </label>
      <input
        type="text"
        value={title}
        placeholder="Enter your Title"
        id="title"
        className="input-size"
        onChange={event => setTitle(event.target.value)}
      />
      <label htmlFor="room">Room: </label>
      <input
        type="text"
        value={room}
        placeholder="Enter your surname"
        id="room"
        className="input-size"
        onChange={event => setRoom(event.target.value)}
      />
      <label htmlFor="id">Id: </label>
      <input
        type="text"
        value={id}
        placeholder="Enter your surname"
        id="id"
        className="input-size"
        onChange={event => setId(event.target.value)}
      />
      <label htmlFor="checkindate">CheckIn Date: </label>
      <input
        type="text"
        value={checkInDate}
        placeholder="Enter your surname"
        id="checkindate"
        className="input-size"
        onChange={event => setCheckInDate(event.target.value)}
      />
      <label htmlFor="checkoutdate">CheckOut Date: </label>
      <input
        type="text"
        value={checkOutDate}
        placeholder="Enter your surname"
        id="checkoutdate"
        className="input-size"
        onChange={event => setCheckOutDate(event.target.value)}
      />
      <button className="btn btn-primary">Add your booking!</button>
    </form>
  );
};

export default NewBooking;
