import React, { useEffect, useState } from "react";

const CustomerProfile = ({ id }) => {
  const [customerId, setCustomerId] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => {
        setCustomerId(data);
      });
  }, [id]);

  return (
    <div>
      <p>Customer {customerId.id} profile</p>
    </div>
  );
};

export default CustomerProfile;
