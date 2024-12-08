import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import CarHeader from "../../components/header/CarHeader";
import axios from "axios";
import "./bookingForm.css";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const BookingFormPage = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams(); // Access the "id" parameter from the URL
  // console.log(id.price);
  const [carList, setCarList] = useState("0");
  const [picCars, setPicCars] = useState(null);
  const fetchCar = async (id) => {
    try {
      const response = await fetch(
        `https://fypbookingbea.adaptable.app/api/cars/${id}`
      );
      const data = await response.json();
      // Handle the fetched car object
      //console.log(data.price);
      //console.log(data.photos);
      setPicCars(data.photos);
      setCarList(data.price);
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };

  // Usage
  useEffect(() => {
    fetchCar(id);
  }, []);

  const [pickupHour, setPickupHour] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [returnHour, setReturnHour] = useState("");
  const [userName, setUserName] = useState("");
  const [userLicenseNo, setUserLicenseNo] = useState("");
  const [userContact, setUserContact] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const [totalHour, setTotalHour] = useState(0);
  const pricePerHour = carList; // Change this value based on your actual price per hour

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!userName.trim()) {
      alert("Please enter a valid user name");
      return;
    }

    if (userLicenseNo.trim().length !== 8) {
      alert("Please Enter a valid user license number of 8 Length");
      return;
    }

    if (!userContact.trim()) {
      alert("Please enter a valid user contact number");
      return;
    }

    if (userContact.trim().length !== 11) {
      alert("User contact number must be 11 digits");
      return;
    }
    setUserName("");
    setUserLicenseNo("");
    setUserContact("");

    const convertTo24HourFormat = (time) => {
      const [hour, minute, period] = time.split(":");
      let convertedHour = parseInt(hour);

      if (period === "PM" && convertedHour !== 12) {
        convertedHour += 12;
      } else if (period === "AM" && convertedHour === 12) {
        convertedHour = 0;
      }

      return `${convertedHour.toString().padStart(2, "0")}:${minute}`;
    };

    const pickupTime24 = convertTo24HourFormat(pickupHour);
    const returnTime24 = convertTo24HourFormat(returnHour);

    const pickupTime = new Date(`2023-06-15T${pickupTime24}`);
    let returnTime = new Date(`2023-06-15T${returnTime24}`);

    // Adjust return time if it is earlier than the pickup time (past midnight)
    if (returnTime < pickupTime) {
      returnTime = new Date(returnTime.getTime() + 24 * 60 * 60 * 1000);
    }

    const durationInHours = (returnTime - pickupTime) / 1000 / 60 / 60;

    // Handle the booking process based on the duration
    if (durationInHours <= 0) {
      // Invalid duration, show an error message or handle it accordingly
      alert("Invalid duration");
    } else {
      // Calculate the total cost
      const calculatedCost = durationInHours * pricePerHour;
      setTotalCost(calculatedCost);
      setTotalHour(durationInHours);

      // Proceed with the booking process
      console.log(`Booking for ${durationInHours} hours`);
      console.log(`Total Cost: ${calculatedCost}`);
    }

    // const postCar = async (id) => {
    console.log(pickupTime);
    console.log(returnTime);
    try {
      ///api/cars/bookings
      await axios.patch(`https://fypbookingbea.adaptable.app/api/cars/${id}`, {
        pickupTime,
        returnTime,
      });
      toast.success("Car status has been updated.");

      // console.log("roomArray", room);
      // console.log("hotelId", hotelId);
      // console.log("type", "hotel");
      // console.log("user", user._id);

      await axios
        .post("https://fypbookingbea.adaptable.app/api/reserve", {
          user: user._id,
          type: "car",
          car: id,
        })
        .then((response) => {
          if (response.status == 200) {
            toast.success("Car Reservation status has been updated.");
            // setHLoading(false);
          } else {
            toast.error("There was an error in updating Reservation status.");
            // setHLoading(false);
          }
        });
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Their was an error in updating the Car status.");
      }
    }
    // };
    // postCar(id);
    // Validate form fields
  };

  return (
    <div>
      <Navbar />
      <CarHeader />
      <div className="booking-form-container">
        <div className="form-container">
          <h1 className="form-title">Car Rental Form</h1>
          {errorMessage && <p>{errorMessage}</p>}
          <form className="form" onSubmit={handleFormSubmit}>
            <div className="form-field">
              <label className="form-label" htmlFor="userName">
                User Name:
              </label>
              <input
                type="text"
                id="userName"
                className="form-input"
                value={userName}
                onChange={(event) => {
                  const { value } = event.target;
                  const isNumeric = /^\d+$/.test(value); // Check if the value contains only numeric characters

                  if (!isNumeric) {
                    setUserName(value);
                  }
                }}
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="userLicenseNo">
                User License No:
              </label>
              <input
                type="text"
                id="userLicenseNo"
                className="form-input"
                value={userLicenseNo}
                onChange={(event) => {
                  const { value } = event.target;
                  const numericValue = value.replace(/\D/g, ""); // Remove non-numeric characters

                  setUserLicenseNo(numericValue);
                }}
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="userContact">
                User Contact:
              </label>
              <input
                type="text"
                id="userContact"
                className="form-input"
                value={userContact}
                onChange={(event) => {
                  const { value } = event.target;
                  const numericValue = value.replace(/\D/g, ""); // Remove non-numeric characters

                  setUserContact(numericValue);
                }}
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="pickupHour">
                Pickup Hour:
              </label>
              <input
                type="time"
                id="pickupHour"
                className="form-input"
                value={pickupHour}
                onChange={(e) => setPickupHour(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="returnHour">
                Return Hour:
              </label>
              <input
                type="time"
                id="returnHour"
                className="form-input"
                value={returnHour}
                onChange={(e) => setReturnHour(e.target.value)}
                required
              />
            </div>
            <button className="form-button" type="submit">
              Book Now
            </button>
          </form>
          {totalCost > 0 && (
            <div className="total-cost-container">
              <h2 className="total-cost">Booking for: {totalHour} /Hours</h2>
              <h2 className="total-cost">Total Cost: {totalCost} /RS</h2>
            </div>
          )}
        </div>
        <div className="car-details">
          {picCars && (
            <img src={picCars} alt={picCars.makeModel} className="car-image" />
          )}
          {picCars && <h2 className="car-make-model">{picCars.makeModel}</h2>}
        </div>
      </div>
    </div>
  );
};

export default BookingFormPage;
