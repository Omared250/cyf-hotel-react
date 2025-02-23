import React from "react";
import Heading from "./components/Heading";
import TouristInfoCard from "./components/TouristInfoCards";
import Footer from "./components/Footer";
import Bookings from "./components/Bookings";
import "./App.css";
import Restaurant from "./components/Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <Restaurant />
      <TouristInfoCard />
      <Footer />
    </div>
  );
};

export default App;
