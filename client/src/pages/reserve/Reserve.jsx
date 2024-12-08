import { Link } from "react-router-dom";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./reserve.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Reserve = () => {
  const { user } = useContext(AuthContext);
  const [cars, setCars] = useState(null);
  const [hotels, setHotels] = useState(null);
  const [room, setRooms] = useState(null);
  const [priceCars, setPriceCars] = useState([]);
  const [priceRoom, setPriceRooms] = useState([]);
  const [pickupTime, setPickUp] = useState([]);
  const [returnTime, setReturn] = useState([]);
  useEffect(() => {
    const fetchReserveList = async () => {
      try {
        const response = await fetch(
          `https://indus-guides-pvt-backend.vercel.app/api/reserve/${user._id}`
          // "http://localhost:1234/api/reserve"
        );
        const data = await response.json();
        console.log(data);
        const filteredCars = data.filter((obj) => obj.type === "car");
        const filteredHotels = data.filter((obj) => obj.type === "hotel");
        const filteredRoom = data.filter((obj) => Boolean(obj.room));
        console.log(filteredCars[0].car.pickupTime);
        console.log(filteredHotels[0].room.price);
        //console.log(filteredRoom);

        setCars(filteredCars);
        setHotels(filteredHotels);
        setRooms(filteredRoom);
        setPriceCars(filteredCars);
        setPriceRooms(filteredRoom);
        setPickUp(filteredCars);
        setReturn(filteredCars);
      } catch (error) {
        console.error("Error fetchingReserve Details:", error);
      }
    };
    fetchReserveList();
  }, []);

  // const filteredCars = [
  //   {
  //     _id: "64875648f48d1c26a0aeb0ca",
  //     name: "Nabeel Jameel",
  //     type: "Suzuki Wagnor",
  //     city: "Lahore",
  //     description: "Air Conditioner 3 Seater",
  //     address:
  //       "https://www.google.com/maps/place/Nabeel+Medical+Store/@31.5409617,74.3024803,17z/data=!3m1!4b1!4m6!3m5!1s0x3919035eb8792341:0x9564858ddb947a3d!8m2!3d31.5409618!4d74.3073512!16s%2Fg%2F11f40z990d?entry=ttu",
  //     CNIC: 349292837465,
  //     price: 2500,
  //     maxSeats: 3,
  //     phone: 3062188622,
  //     country: "Pakistan",
  //     photos: [
  //       "http://res.cloudinary.com/dm1mlee94/image/upload/v1686591047/rt9ryiwc7rky5yt2fh4b.jpg",
  //     ],
  //     __v: 7,
  //     availability: true,
  //     bookings: [
  //       {
  //         pickupTime: "1240-01-01T00:00:00.000Z",
  //         returnTime: "1111-01-01T00:00:00.000Z",
  //         _id: "648a02303b05fc98e1497da5",
  //       },
  //       {
  //         pickupTime: "1320-01-01T00:00:00.000Z",
  //         returnTime: "1111-01-01T00:00:00.000Z",
  //         _id: "648a21fdef518c48bd9f35e8",
  //       },
  //       {
  //         pickupTime: "1320-01-01T00:00:00.000Z",
  //         returnTime: "1111-01-01T00:00:00.000Z",
  //         _id: "648a233def518c48bd9f35ec",
  //       },
  //       {
  //         pickupTime: "1320-01-01T00:00:00.000Z",
  //         returnTime: "1111-01-01T00:00:00.000Z",
  //         _id: "648a25afdda7dccde67f605b",
  //       },
  //       {
  //         pickupTime: "1320-01-01T00:00:00.000Z",
  //         returnTime: "1111-01-01T00:00:00.000Z",
  //         _id: "648a293ddda7dccde67f6063",
  //       },
  //       {
  //         pickupTime: "1320-01-01T00:00:00.000Z",
  //         returnTime: "1111-01-01T00:00:00.000Z",
  //         _id: "648a2994dda7dccde67f6066",
  //       },
  //       {
  //         pickupTime: "1620-01-01T00:00:00.000Z",
  //         returnTime: "1111-01-01T00:00:00.000Z",
  //         _id: "648a2998dda7dccde67f6069",
  //       },
  //     ],
  //   },
  // ];
  // const item = {
  //   _id: "6486799c0a5f8e60e559ceea",
  //   name: "Grand Islamabad Hotel",
  //   type: "hotel",
  //   city: "Islamabad",
  //   address: "Islamabad",
  //   distance: "500",
  //   photos: [
  //     "http://res.cloudinary.com/dm1mlee94/image/upload/v1686534554/lfcfltzux02qwsisphzs.jpg",
  //   ],
  //   title: "Islamabad",
  //   desc: "This casual hotel among shops and eateries is 8 km from Fatima Jinnah Park, 10 km from Faisal Mosque and 28 km from Islamabad International Airport. Warmly furnished rooms offer balconies, flat-screen TVs and minifridges, in addition to tea and coffeemaking facilities, and free Wi-Fi. Suites add kitchenettes and/or living areas. Room service is available 24/7.  An airport shuttle is complimentary. Breakfast is served in a rooftop restaurant that features city views. There's also a cafe and event space.",
  //   rooms: ["63a1bff4d3a9d03515a0e168", "64867b740a5f8e60e559cf13"],
  //   cheapestPrice: 100,
  //   featured: true,
  //   __v: 0,
  // };

  const convertTo24HourFormat = (time) => {
    const hourMinute = time.slice(11, 16); // Extract the hour and minute part from the time string
    const [hour, minute] = hourMinute.split(":"); // Split the hour and minute values
    return `${hour.padStart(2, "0")}:${minute}`; // Return the time in 24-hour format
  };

  const calculateRentalDuration = (returnTime, pickupTime) => {
    const returnTime24 = convertTo24HourFormat(returnTime);
    const pickupTime24 = convertTo24HourFormat(pickupTime);

    if (!returnTime24 || !pickupTime24) {
      // Invalid time format
      return null;
    }

    const returnDateTime = new Date(`2023-06-15T${returnTime24}`);
    const pickupDateTime = new Date(`2023-06-15T${pickupTime24}`);

    if (returnDateTime < pickupDateTime) {
      returnDateTime.setDate(returnDateTime.getDate() + 1);
    }

    const durationInHours =
      (returnDateTime - pickupDateTime) / (1000 * 60 * 60);
    return durationInHours;
  };

  const calculateTotalPrice = (priceCars, returnTime, pickupTime) => {
    const total = priceCars.reduce((accumulator, carObj) => {
      const { price, pickupTime, returnTime } = carObj.car;

      const rentalDuration = calculateRentalDuration(returnTime, pickupTime);

      if (rentalDuration === null) {
        // Invalid rental duration
        return accumulator;
      }

      const totalPrice = price * rentalDuration;
      console.log("Qeemat " + totalPrice);
      return accumulator + totalPrice;
    }, 0);

    return total;
  };
  // console.log(rentalDuration);
  //const rentalDuration = calculateRentalDuration(returnTime, pickupTime);
  const totalPrice = calculateTotalPrice(priceCars, pickupTime, returnTime);

  // Use totalPrice as needed
  console.log(`Total Price: ${totalPrice}`);

  const totalPriceR = priceRoom.reduce(
    (accumulator, roomObj) => accumulator + roomObj.room.price,
    0
  );

  // const carPrices = priceCars.map((carObj) => carObj.car.price);
  console.log(totalPrice);
  console.log(totalPriceR);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="receipt-header">
          <div className="receipt-title">Receipt</div>
        </div>

        <div className="receipt-item">
          <div className="receipt-label">Total Price for Cars:</div>
          <div className="receipt-value">{totalPrice}</div>
        </div>

        <div className="receipt-item">
          <div className="receipt-label">Total Price for Rooms:</div>
          <div className="receipt-value">{totalPriceR}</div>
        </div>

        <div className="total-section">
          <div className="total-label">Total:</div>
          <div className="total-value">{totalPrice + totalPriceR}</div>
        </div>
      </div>

      <div style={{ margin: "2rem 0rem" }}>
        <div className="container">
          <div className="receipt-header">
            <div className="receipt-title">User Details</div>
          </div>

          <div className="receipt-item">
            <div className="receipt-label">UserName: {user.username}</div>
          </div>

          <div className="receipt-item">
            <div className="receipt-label">Email: {user.email}</div>
          </div>
          <div className="receipt-item">
            <div className="total-label">Phone: {user.phone}</div>
          </div>
        </div>
      </div>
      <div className="hotelParent">
        <h1 className="hotelReservedTitle">Reserved Hotels</h1>
        {hotels &&
          hotels.map((item) => {
            return (
              <div className="hotelContainer">
                <div className="hotelsearchItem">
                  <img src={item.hotel.photos[0]} alt="" className="siImg" />
                  <div className="hotelsiDesc">
                    <h1 className="hotelsiTitle">{item.hotel.name}</h1>
                    <span className="hotelsiDistance">
                      {item.hotel.distance}m from center
                    </span>
                    <span className="hotelsiTaxiOp">Free airport taxi</span>
                    <span className="hotelsiSubtitle">
                      Studio Apartment with Air conditioning
                    </span>
                    {/* <span className="hotelsiCancelOp">Free cancellation </span> */}
                    <span className="hotelsiCancelOpSubtitle">
                      You can cancel later, so lock in this great price today!
                    </span>
                  </div>
                  <div className="hotelsiDetails">
                    {item.hotel.rating && (
                      <div className="hotelsiRating">
                        <span>Excellent</span>
                        <button>{item.hotel.rating}</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        <h1 className="hotelReservedTitle">Reserved Rooms</h1>
        {room &&
          room.map((item) => {
            return (
              <div className="hotelContainer">
                <div className="hotelsearchItem">
                  <img
                    src="https://res.cloudinary.com/dm1mlee94/image/upload/v1686534250/dnpp7rmn7h7rtujcbnpb.jpg"
                    alt=""
                    className="siImg"
                  />
                  <div className="hotelsiDesc">
                    <h1 className="hotelsiTitle">{item.room.title}</h1>
                    <span className="hotelsiDistance">
                      price: {item.room.price}
                    </span>
                    <span className="hotelsiSubtitle">
                      Max People: {item.room.maxPeople}
                    </span>
                    <span className="hotelsiSubtitle">
                      Description: {item.room.desc}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        <h1 className="hotelReservedTitle">Reserved Cars</h1>
        <ul className="car-list carReserve">
          {cars &&
            cars.map((item) => (
              <li key={item.car.id}>
                <a href={item.car.address}>
                  <img src={item.car.photos[0]} alt="" className="car-image" />
                </a>

                <div className="car-info">
                  <h3>{item.car.type}</h3>
                  {/* <p className="car-info">
                  Comfortable Seats with Air-Conditioning.
                </p> */}
                  <p className="car-info">Max Seats: {item.car.maxSeats}</p>
                  <p className="car-info">
                    Price Per Hour: {item.car.price}/Rs
                  </p>
                  <p className="car-info">Location: {item.car.city}</p>
                  {/* <p className="car-info">ID: {car.CNIC}</p> */}
                  <p className="car-info">Phone No: {item.car.phone}</p>
                </div>
              </li>
            ))}
        </ul>
        )
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Reserve;
