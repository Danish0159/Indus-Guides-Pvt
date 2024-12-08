import {
  faBed,
  faCalendarDays,
  faCar,
  faTowerObservation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./carHeader.css";
import { DateRange } from "react-date-range";

import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const CarHeader = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };
  const handleClickHotel = () => {
    //dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/");
  };
  const handleClickCar = () => {
    //dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/carRentals");
  };
  const handleClickAttraction = () => {
    //dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/Attraction");
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} onClick={handleClickHotel} />
            <span onClick={handleClickHotel}>Hotels</span>
          </div>

          <div className="headerListItem active">
            <FontAwesomeIcon icon={faCar} onClick={handleClickCar} />
            <span onClick={handleClickCar}>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon
              icon={faTowerObservation}
              onClick={handleClickAttraction}
            />
            <span onClick={handleClickAttraction}>Attractions</span>
          </div>
        </div>
        {/* Display for Home Page */}
        {type !== "list" && (
          <>
            <h1 className="headerTitle">Car rentals for any kind of trip</h1>
            <p className="headerDesc">Compare deals for the lowest fare</p>
            {!user && <Link to="/login" className="headerBtn">Sign in / Register</Link>}
            {/* Re-1 */}
          </>
        )}
      </div>
    </div>
  );
};

export default CarHeader;
