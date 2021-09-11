import React from "react";

const Footer = () => {
  const infoFooterArray = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <ul className="list-group text-center">
      {infoFooterArray.map((info, index) => (
        <li className="list-group-item" key={index}>
          {info}
        </li>
      ))}
    </ul>
  );
};

export default Footer;
