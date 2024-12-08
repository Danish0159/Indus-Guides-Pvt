export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];

export const carColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Person Name",
    width: 230,
  },
  {
    field: "model",
    headerName: "Car Name",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 230,
  },
  // {
  //   field: "price",
  //   headerName: "Price",
  //   width: 100,
  // },
  // {
  //   field: "cnic",
  //   headerName: "CNIC",
  //   width: 100,
  // },
  // {
  //   field: "city",
  //   headerName: "City",
  //   width: 100,
  // },
  // {
  //   field: "address",
  //   headerName: "Address",
  //   width: 100,
  // },
];
export const reserveColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user.name",
    headerName: "User Name",
    filterable: true,
    width: 120,
    renderCell: (params) => {
      const user = params.row.user;
      if (user) {
        return <span>{user.username}</span>;
      } else {
        return <p>No User</p>;
      }
    },
  },
  {
    field: "type",
    headerName: "User Booked ",
    width: 120,
  },
  {
    field: "hotel.name",
    headerName: "Hotel",
    width: 230,
    renderCell: (params) => {
      const hotel = params.row.hotel;
      if (hotel) {
        return <span>{hotel.name}</span>;
      } else {
        return <p>-</p>;
      }
    },
  },
  {
    field: "car.type",
    headerName: "Car",
    width: 230,
    renderCell: (params) => {
      const car = params.row.car;
      if (car) {
        return <span>{car.type}</span>;
      } else {
        return <p>No Car Booked</p>;
      }
    },
  },
  {
    field: "car.price",
    headerName: "Car Price",
    width: 230,
    renderCell: (params) => {
      const car = params.row.car;
      if (car) {
        return <span>{car.price}</span>;
      } else {
        return <p>No car information available</p>;
      }
    },
  },
  {
    field: "room.roomNumbers",
    headerName: "Rooms",
    width: 230,
    renderCell: (params) => {
      const room = params.row.room;
      if (room) {
        return <span>{room.price}</span>;
      } else {
        return <p>No car information available</p>;
      }
    },
  },
  // {
  //   field: "room",
  //   headerName: "Room",
  //   width: 230,
  // },
  {
    field: "createdAt",
    headerName: "Creation Time",
    width: 115,
  },
  {
    field: "updatedAt",
    headerName: "Updation Time",
    width: 115,
  },
  //{
  //   field: "city",
  //   headerName: "City",
  //   width: 100,
  // },
  // {
  //   field: "address",
  //   headerName: "Address",
  //   width: 100,
  // },
];
