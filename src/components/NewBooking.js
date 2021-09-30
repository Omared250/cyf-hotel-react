import React, { useState } from "react";

const NewBooking = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [title, setTitle] = useState("");
  const [room, setRoom] = useState("");
  const [id, setId] = useState("");
  const [chechindate, setCheckindate] = useState("");
  const [checkoutdate, setCheckoutdate] = useState("");

  const newBookingHandle = event => {};

  return (
    <form className="container d-flex flex-column align-items-center">
      <label for="firstName">First Name:</label>
      <input
        type="text"
        placeholder="Enter your First Name"
        id="firstName"
        className="input-size"
      />
      <label for="surname">Surname: </label>
      <input
        type="text"
        placeholder="Enter your surname"
        id="surname"
        className="input-size"
      />
      <label for="title">Title: </label>
      <input
        type="text"
        placeholder="Enter ypur Title"
        id="title"
        className="input-size"
      />
      <label for="room">Room: </label>
      <input
        type="text"
        placeholder="Enter your surname"
        id="room"
        className="input-size"
      />
      <label for="id">Id: </label>
      <input
        type="text"
        placeholder="Enter your surname"
        id="id"
        className="input-size"
      />
      <label for="checkindate">CheckIn Date: </label>
      <input
        type="text"
        placeholder="Enter your surname"
        id="checkindate"
        className="input-size"
      />
      <label for="checkoutdate">CheckOut Date: </label>
      <input
        type="text"
        placeholder="Enter your surname"
        id="checkoutdate"
        className="input-size"
      />
    </form>
  );
};

export default NewBooking;
