import React from "react";
import Navbar from "../../components/navbar/Navbar";
import CarHeader from "../../components/header/CarHeader";
import CarList from "../../components/carList/CarList";
const CarRentals = () => {
  return (
    <div>
      <Navbar />
      <CarHeader />
      <CarList />
    </div>
  );
};

export default CarRentals;
