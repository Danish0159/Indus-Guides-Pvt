import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Reserve from "./pages/reserve/Reserve";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import ErrorPage from "./pages/error/ErrorPage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Attraction from "./pages/attraction/Attraction";
import CarRentals from "./pages/carRentals/CarRentals";
import BookingFormPage from "./pages/bookPage/BookingFormPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/attraction" element={<Attraction />} />
          <Route path="/carRentals" element={<CarRentals />} />
          <Route path="/carRentals/:id" element={<BookingFormPage />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;

{
  /* Old Login Page */
  /* import Login from "./pages/login/Login"; */
  /* <Route path="/login" element={<Login />} /> */
}
