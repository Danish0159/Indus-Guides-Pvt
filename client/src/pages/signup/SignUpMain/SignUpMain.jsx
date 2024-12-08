import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import Spinner from "./Spinner";
// import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
// import signupImage from "../images/signup.png";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUserEn } from "../Features/user/userSlice";
import { styles } from "../../../Shared/Styles";
import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import "./signupmain.css";

const initialState = {
  name: "",
  email: "",
  password: "",
  role: "",
};

const SignUpMain = () => {
  const [values, setValues] = useState(initialState);
  // const {  isSuccess } = useSelector((state) => state.user);

  // const dispatch = useDispatch();
  // const history = useHistory();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, role } = values;
    if (!name || !email || !password || !role) {
      // toast.error("Please fill out all fields");
      return;
    }
    if (password.length < 8) {
      // toast.error("Password is too short - should be 8 chars minimum.");
      return;
    }
    // dispatch(registerUserEn({ name, email, password, role }));
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     history.push("/Login");
  //     // dispatch(reset());
  //   }
  //   // eslint-disable-next-line
  // }, [isSuccess]);

  // if (isLoading) {
  //   return <Spinner />;
  // }
  return (
    <section className="signup__section">
      <div className="signup__grid">
        <figure className="signup__div">
          <img
            className="signup__img"
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
            alt="SignUp"
          />
        </figure>
        <form onSubmit={onSubmit} className="signup__form">
          <h2 className="signup__title">Register</h2>
          <p className="signup__subTitle">Please register your account.</p>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <TextField
              fullWidth
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              inputProps={{
                style: styles.textField,
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <TextField
              fullWidth
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              inputProps={{
                style: styles.textField,
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <TextField
              fullWidth
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              inputProps={{
                style: styles.textField,
              }}
            />
          </div>

          <button type="submit" className="blue-btn submit-button">
            Register
          </button>

          <p className="signup__dont">
            Already have an account?
            <span className="signup__register">
              {" "}
              <Link to="/login">
                <u>Log In Now</u>
              </Link>{" "}
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUpMain;