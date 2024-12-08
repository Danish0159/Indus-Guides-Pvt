import "./newCar.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { hotelInputs, carDataInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { toast } from "react-toastify";
import AbsoluteSpinner from "../../components/AbsoluteSpinner";

const NewCar = () => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);
  const [Hloading, setHLoading] = useState(false);

  // const { data, loading, error } = useFetch("/cars");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRooms(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setHLoading(true);
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "huarluoc");
          data.append("api_key", "642495779825247");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dm1mlee94/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const newhotel = {
        ...info,
        photos: list,
      };
      const token = localStorage.getItem("x-access-token");
      console.log(newhotel);
      if (token) {
        console.log(newhotel);
        await axios
          .post("https://indus-guides-pvt-backend.vercel.app/api" + "/cars", newhotel, {
            // .post("http://localhost:1234/api/cars", newhotel, {
            headers: { "x-access-token": token },
          })
          .then((response) => {
            if (response.status == 200) {
              toast.success("Car has been Listed.");
              setHLoading(false);
            } else {
              toast.error("There was an error in listing Car.");
              setHLoading(false);
            }
          });
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (Hloading) {
    return (
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1>List New Car</h1>
          </div>
          <AbsoluteSpinner></AbsoluteSpinner>
        </div>
      </div>
    );
  }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Car</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleClick}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                  required={true}
                />
              </div>

              {carDataInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    required={true}
                  />
                </div>
              ))}

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCar;
