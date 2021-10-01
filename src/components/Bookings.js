import React, { useEffect, useState } from "react";
import CustomerProfile from "./CustomerProfile.js";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import NewBooking from "./NewBooking.js";
// import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [customerProfileId, setCustomerProfileId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        if (data.error) throw new Error(data.error);

        const searchInfo = searchVal
          ? // filter the result of the fetch with the value of the input
            data.filter(
              value =>
                value.firstName.toLowerCase() === searchVal.toLowerCase() ||
                value.surname.toLowerCase() === searchVal.toLowerCase()
            )
          : data;
        // assigning the result of the filtered values where if the input is empty it will show all the information about bookings
        setBookings(searchInfo);
        setIsLoading(false);
      })
      .catch(e => {
        setError(e.message);
        setIsLoading(false);
      });
    // keep tracking the value of the input to re-render the page with the new value
  }, [searchVal]);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={setSearchVal} />
        {error && <p>{error}</p>}
        {isLoading ? (
          <p>Loading....</p>
        ) : (
          <SearchResults
            results={bookings}
            onShowCustomerProfile={setCustomerProfileId}
          />
        )}
        {customerProfileId && <CustomerProfile id={customerProfileId} />}
      </div>
    </div>
  );
};

export default Bookings;
