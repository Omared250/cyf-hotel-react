import React, { useState } from "react";

const NewBooking = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [title, setTitle] = useState("");
  const [room, setRoom] = useState("");
  const [id, setId] = useState("");
  const [chechindate, setCheckindate] = useState("");
  const [checkoutdate, setCheckoutdate] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <form
      className="container d-flex flex-column align-items-center"
      onSubmit={handleSubmit}
    >
      <label for="firstName">First Name:</label>
      <input
        type="text"
        value={firstName}
        placeholder="Enter your First Name"
        id="firstName"
        className="input-size"
        onChange={event => setFirstName(event.target.value)}
      />
      <label for="surname">Surname: </label>
      <input
        type="text"
        value={surname}
        placeholder="Enter your surname"
        id="surname"
        className="input-size"
        onChange={event => setSurname(event.target.value)}
      />
      <label for="title">Title: </label>
      <input
        type="text"
        value={title}
        placeholder="Enter ypur Title"
        id="title"
        className="input-size"
        onChange={event => setTitle(event.target.value)}
      />
      <label for="room">Room: </label>
      <input
        type="text"
        value={room}
        placeholder="Enter your surname"
        id="room"
        className="input-size"
        onChange={event => setRoom(event.target.value)}
      />
      <label for="id">Id: </label>
      <input
        type="text"
        value={id}
        placeholder="Enter your surname"
        id="id"
        className="input-size"
        onChange={event => setId(event.target.value)}
      />
      <label for="checkindate">CheckIn Date: </label>
      <input
        type="text"
        value={chechindate}
        placeholder="Enter your surname"
        id="checkindate"
        className="input-size"
        onChange={event => setCheckindate(event.target.value)}
      />
      <label for="checkoutdate">CheckOut Date: </label>
      <input
        type="text"
        value={checkoutdate}
        placeholder="Enter your surname"
        id="checkoutdate"
        className="input-size"
        onChange={event => setCheckoutdate(event.target.value)}
      />
      <button>Add your booking!</button>
    </form>
  );
};

export default NewBooking;
