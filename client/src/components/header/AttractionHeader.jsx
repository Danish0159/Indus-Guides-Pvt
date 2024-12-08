import {
  faBed,
  faCar,
  faTowerObservation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { DateRange } from "react-date-range";
import "./AttractionHeader.css";
import { useContext, useState } from "react";
//import "react-date-range/dist/styles.css"; // main css file
//import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const AttractionHeader = (props, { type }) => {
  const [destination, setDestination] = useState("");

  //const [openOptions, setOpenOptions] = useState(false);

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  //   const handleOption = (name, operation) => {
  //     setOptions((prev) => {
  //       return {
  //         ...prev,
  //         [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
  //       };
  //     });
  //   };

  //   const { dispatch } = useContext(SearchContext);

  //   const handleSearch = () => {
  //     dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
  //     navigate("/", { state: { destination, dates, options } });
  //   };
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
  const filterPlaces = () => {
    const placeName = document.getElementById("city").value;
    props.filterEvent(placeName);//passing control to Attraction component
  }

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
            <span onClick={handleClickHotel}>Stays</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} onClick={handleClickCar} />
            <span onClick={handleClickCar}>Car rentals</span>
          </div>
          <div className="headerListItem active">
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
            <h1 className="headerTitle">
              Enjoy Vacation With Attraction Places
            </h1>
            <p className="headerDesc">Look for the best place</p>
            {/* {!user && <button className="headerBtn">Sign in / Register</button>} */}
            {/* Re-1 */}
            <div className="headerSearchat">
              <div className="headerSearchItemat">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                  id="city"
                />
              </div>

              <div className="headerSearchItemat">
                <button className="headerBtn" onClick={filterPlaces}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AttractionHeader;