import React, { useEffect, useState } from "react";
import "./carList.css";
import BookingFormPage from "../../pages/bookPage/BookingFormPage";
//import { Navigate, redirect } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
const CarList = () => {
  const navigate = useNavigate();
  const [carList, setCarList] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [locationFilter, setLocationFilter] = useState("");
  const [selectedCarId, setSelectedCarId] = useState(null);
  useEffect(() => {
    const fetchCarList = async () => {
      try {
        const response = await fetch(
          "https://indus-guides-pvt-backend.vercel.app/api/cars"
        );
        const data = await response.json();
        setCarList(data);
        console.log(filteredCars);
        setFilteredCars(data);
      } catch (error) {
        console.error("Error fetching car list:", error);
      }
    };

    fetchCarList();
  }, []);
  // const handleCarSelect = (carId) => {
  //   setSelectedCarId(carId);
  //   handleBookClick();
  // };

  const handleLocationFilterChange = (e) => {
    const city = e.target.value;
    setLocationFilter(city);

    const filtered = carList.filter((car) =>
      car.city.toLowerCase().includes(city.toLowerCase())
    );
    setFilteredCars(filtered);
  };
  // const handleBookClick = () => {
  //   // Redirect to the booking form page
  //   navigate("/bookingform");
  // };
  const handleBookClick = (car) => {
    // Redirect to the booking form page and pass the car object as a parameter
    console.log(car);
    console.log("ID     " + car._id);
    var id = car._id;
    setSelectedCarId(car._id);
    navigate({
      pathname: `/carRentals/${id}`,
      state: { car },
    });
  };
  return (
    <div className="container">
      <h1 className="heading-car">Car List Available For Rent</h1>
      <div className="filter-input">
        <span className="icon">
          <i className="fas fa-city"></i>
        </span>
        <input
          type="text"
          id="locationFilter"
          placeholder="Search By City"
          value={locationFilter}
          onChange={handleLocationFilterChange}
          className="locat-filter"
        />
      </div>
      {filteredCars.length > 0 ? (
        <ul className="car-list">
          {filteredCars.map((car) => (
            <li key={car.id}>
              <a href={car.address}>
                <img src={car.photos} alt="" className="car-image" />
              </a>

              <div className="car-info">
                <h3>{car.model}</h3>
                {/* <p className="car-info">
                  Comfortable Seats with Air-Conditioning.
                </p> */}
                <p className="car-info">Max Seats: {car.maxSeats}</p>
                <p className="car-info">Price Per Hour: {car.price}/Rs</p>
                <p className="car-info">Location: {car.city}</p>
                {/* <p className="car-info">ID: {car.CNIC}</p> */}
                <p className="car-info">Phone No: {car.phone}</p>
                <div className="button-container">
                  <button onClick={() => handleBookClick(car)}>Book Now</button>
                </div>
              </div>
            </li>
          ))}
          {/* {selectedCarId && <BookingFormPage carId={selectedCarId} />} */}
        </ul>
      ) : (
        <p>No cars available for the selected location.</p>
      )}
    </div>
  );
};

export default CarList;
