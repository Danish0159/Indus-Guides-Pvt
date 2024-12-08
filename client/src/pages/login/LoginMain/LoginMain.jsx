import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../../context/AuthContext'
import { toast } from "react-toastify";
import { TextField } from "@mui/material";
import { styles } from "../../../Shared/Styles";
import "./loginmain.css";
import { Link } from "react-router-dom";
import AbsoluteSpinner from "../../../components/AbsoluteSpinner";
import { useFormik } from "formik";
import * as yup from "yup";
// import { getUserFromLocalStorage } from "../utils/localStorage";
// import { toast } from "react-toastify";
// import Spinner from "./Spinner";

const LoginMain = () => {
  // const [credentials, setCredentials] = useState({
  //   username: undefined,
  //   password: undefined,
  // });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  // const handleChange = (e) => {
  //   setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  // };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   const { username, password } = credentials;
  //   if (!username || !password) {
  //     toast.error("Please fill out all fields");
  //     return;
  //   }
  //   dispatch({ type: "LOGIN_START" });
  //   try {
  //     const res = await axios.post("https://indus-guides-pvt-backend.vercel.app/api" + "/auth/login", credentials);
  //     dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
  //     navigate("/")
  //   } catch (err) {
  //     dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
  //   }
  // };


  // initial values
  const initialValues = {
    username: "",
    password: "",
  };

  // validation schema
  const validationSchema = yup.object({
    username: yup
      .string("Enter your username")
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required("Username is required"),
    password: yup
      .string("Enter your password")
      .min(2, 'Too Short!')
      .max(40, 'Too Long!')
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      // Reset form
      resetForm();

      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post("https://indus-guides-pvt-backend.vercel.app/api" + "/auth/login", {
          username: values.username, password: values.password,
        });
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/")
      } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      }
    },
  });



  if (loading) {
    return <AbsoluteSpinner />;
  }
  return (
    <section className="login__section">
      <div className="login__grid">
        <figure className="login__div">
          <img
            className="login__img"
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
            alt="login-img"
          />
        </figure>

        <form noValidate onSubmit={formik.handleSubmit} className="login__form">
          <h2 className="login__title">Welcome</h2>
          <p className="login__subTitle">Please login to your account.</p>

          <div className="form-group">
            <label htmlFor="email">Name</label>
            <TextField
              fullWidth
              type="text"
              placeholder="username"
              id="username"
              name="username"
              // onChange={handleChange}
              required={true}
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              inputProps={{
                style: styles.textField,
              }}
            />
            <p className="error-p" style={{
              padding: "0px 0px 0px 3px",
              margin: "0px",
              fontSize: "15px",
              color: "red",
              height: "5px"
            }}>
              {formik.touched.username && formik.errors.username}
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <TextField
              fullWidth
              type="password"
              name="password"
              placeholder="password"
              id="password"
              // onChange={handleChange}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              required={true}
              inputProps={{
                style: styles.textField,
              }}
            />
            <p className="error-p" style={{
              padding: "0px 0px 0px 3px",
              margin: "0px",
              fontSize: "15px",
              color: "red",
              height: "5px"
            }}>
              {formik.touched.password && formik.errors.password}
            </p>
          </div>

          <button disabled={loading} type="submit" className="blue-btn submit-button">
            LOGIN
          </button>
          {error && <div className="error-p">{error.message}</div>}
          {/* <p className="login__dont">
            Don’t have an account?
            <span className="login__register">
              {" "}
              <Link to="/signup">
                <u>Register Now</u>
              </Link>{" "}
            </span>
          </p> */}
        </form>
      </div>
    </section>
  );
};

export default LoginMain;
