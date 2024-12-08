import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import SingleBedIcon from '@mui/icons-material/SingleBed';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
// const { id } = useParams();

const Widget = ({ type }) => {
  const [hotels, setHotels] = useState();
  const [users, setUsers] = useState();
  const { data, loading, error } = useFetch("/hotels");
  useEffect(() => {
    setHotels(data.length);
  }, [data]);

  const [rooms, setRooms] = useState(0);
  useEffect(() => {
    const fetchRoomList = async () => {
      try {
        const response = await fetch("https://fypbookingbea.adaptable.app/api/cars");
        const data = await response.json();
        setRooms(data.length);

        const responseU = await fetch("https://fypbookingbea.adaptable.app/api/users");
        const data2 = await responseU.json();
        setUsers(data2.length);
      } catch (error) {
        console.error("Error fetching car list:", error);
      }
    };

    fetchRoomList();
  }, []);
  //const { dataHotels, loading, error } = useFetch("/hotels");
  // console.log("bkj" + dataHotels);
  //useEffect(() => {
  //setList(dataHotels);
  //}, [dataHotels]);

  //console.log(list);

  let dashdata;

  switch (type) {
    case "user":
      dashdata = {
        title: "USERS",
        link: "See all Users",
        url: "/users",
        amount: users,
        diff: 30,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "hotel":
      dashdata = {
        title: "HOTELS",
        link: "View all Hotels",
        url: "/hotels",
        amount: hotels,
        diff: 15,
        icon: (
          <SingleBedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "room":
      dashdata = {
        title: "ROOMS",
        link: "View all Rooms",
        url: "/rooms",
        amount: rooms,
        diff: 20,
        icon: (
          <FireplaceIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      dashdata = {
        title: "BALANCE",
        link: "See details",
        isMoney: true,
        amount: 100000,
        diff: 17,
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{dashdata.title}</span>
        <span className="counter">
          {dashdata.isMoney && "$"}{dashdata.amount}+
        </span>
        <Link to={dashdata.url} style={{ textDecoration: "none" }}><span className="link">{dashdata.link}</span></Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {dashdata.diff} %
        </div>
        {dashdata.icon}
      </div>
    </div >
  );
};

export default Widget;
