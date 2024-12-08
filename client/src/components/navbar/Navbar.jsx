import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">BookingBea</span>
        </Link>
        {user ? (
          <div>
            <Link to="/reserve">
              <button className="navButton">Reserved Status</button>
            </Link>
            <button className="navButton">{user.username}</button>
            <button
              onClick={() => {
                localStorage.removeItem("user");
                window.location.reload();
              }}
              className="navButton"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
