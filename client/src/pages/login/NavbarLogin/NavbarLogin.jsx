import React from "react";
import { Link } from "react-router-dom";

const NavbarLogin = () => {
  return (
    <div className="nav__parent">
      <div className="nav__container">
        <Link className="navbar__link" to="/">
          {/* <img className="navbar__logo" src={logo} alt="Logo" /> */}
          <h1 className="nav__name" style={{ color: "#fff" }}>
            BookingBea
          </h1>
        </Link>
        {/* <Link to="/signup" className="btn-small">
          Register
        </Link> */}
      </div>
    </div>
  );
};

export default NavbarLogin;
