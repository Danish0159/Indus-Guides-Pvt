import "./reservedatatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { toast } from "react-toastify";
import AbsoluteSpinner from "../AbsoluteSpinner";

const Reservedatatable = ({ columns }) => {
  const [dataTable, setDatatable] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState([]);
  const { data, loading, error } = useFetch(`/${path}`);

  useEffect(() => {
    setList(data);
  }, [data]);
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const dataWithIncrementalId = data.map((row, index) => ({
    ...row,
    incrementalId: index + 1,
  }));
  const totalCount = dataWithIncrementalId.length;
  const reserveColumns = [
    // { field: "_id", headerName: "ID", width: 120 },
    {
      field: "incrementalId",
      headerName: "ID",
      width: 100,
    },
    {
      field: "username",
      headerName: "User Name",
      width: 140,
      valueGetter: (list) => list.row.user.username,
    },
    {
      field: "type",
      headerName: "User Booked ",
      width: 140,
    },
    {
      field: "name",
      headerName: "Hotel Name",
      width: 170,
      valueGetter: (params) => {
        const { row } = params;
        const name = row?.hotel?.name;
        return name || name === "" ? name : "--";
      },
    },
    {
      field: "model",
      headerName: "Car Name",
      width: 140,

      valueGetter: (params) => {
        //list.row.car.type,
        const { row } = params;
        const model = row?.car?.model;
        return model || model === "" ? model : "--";
      },
    },
    {
      field: "title",
      headerName: "Room Status",
      width: 140,

      valueGetter: (params) => {
        //list.row.car.type,
        const { row } = params;
        const title = row?.room?.title;
        return title || title === "" ? title : "--";
      },
    },
    // {
    //   field: "createdAt",
    //   headerName: "Creation Time",
    //   width: 115,
    // },
    {
      field: "createdAt",
      headerName: "Booking Date",
      width: 170,
      renderCell: (params) => <span>{formatDate(params.value)}</span>,
    },
    // {
    //   field: "updatedAt",
    //   headerName: "Updation Time",
    //   width: 170,
    //   renderCell: (params) => <span>{formatDate(params.value)}</span>,
    // },
  ];
  if (loading) {
    return <AbsoluteSpinner></AbsoluteSpinner>;
  }
  return (
    <>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={dataWithIncrementalId}
          columns={reserveColumns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row._id}
        />
        <p
          style={{
            //marginTop: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "blue",
          }}
        >
          Total Records: {totalCount}
        </p>
      </div>
    </>
  );
};

export default Reservedatatable;
