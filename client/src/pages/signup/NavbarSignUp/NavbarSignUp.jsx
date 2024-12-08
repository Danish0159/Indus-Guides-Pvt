import React from "react";
import { Link } from "react-router-dom";

const NavbarSignUp = () => {
  return (
    <div className="nav__parent">
      <div className="nav__container">
        <Link className="navbar__link" to="/">
          {/* <img className="navbar__logo" src={logo} alt="Logo" /> */}
          <h1 className="nav__name" style={{ color: "#fff" }}>
            BookingBea
          </h1>
        </Link>
        <Link to="/login" className="btn-small">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavbarSignUp;
