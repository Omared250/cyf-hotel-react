import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [customerProfileData, setCustomerProfileData] = useState();

  useEffect(() => {
    //fetch customer profile using props.id
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => setCustomerProfileData(data));
  }, [props.id]);

  if (!customerProfileData) return <p>Loading....</p>;

  return (
    <ul className="list-group text-center">
      <li className="list-group-item">ID: {customerProfileData.id}</li>
      <li className="list-group-item">Email: {customerProfileData.email}</li>
      {customerProfileData.vip && (
        <li className="list-group-item">
          PhoneNumber: {customerProfileData.phoneNumber}
        </li>
      )}
    </ul>
  );
};

export default CustomerProfile;
