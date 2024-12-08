import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import AbsoluteSpinner from "../../components/AbsoluteSpinner";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "huarluoc");
    data.append("api_key", "642495779825247");
    setLoading(true);
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dm1mlee94/image/upload",
        data
      )

      const { url } = uploadRes.data;

      const newUser = {
        ...info,
        img: url,
      };
      const token = localStorage.getItem("x-access-token");
      if (token) {
        await axios.post("https://fypbookingbea.adaptable.app/api" + "/auth/register", newUser, {
          headers: { "x-access-token": token },
        }).then((response) => {
          if (response.status == 200) {
            toast.success("User has been created.");
            setLoading(false);
          }
          else {
            toast.error("There was an error in creating User.");
            setLoading(false);
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <AbsoluteSpinner></AbsoluteSpinner>
      </div>
    </div>
  }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
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
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                  required={true}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
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

export default New;
