import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { toast } from "react-toastify";
import AbsoluteSpinner from "../AbsoluteSpinner";

const Datatable = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState();
  const { data, loading, error } = useFetch(`/${path}`);

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("x-access-token");
      if (token) {
        await axios
          .delete(`https://indus-guides-pvt-backend.vercel.app/api/${path}/${id}`, {
            headers: { "x-access-token": token },
          })
          .then((response) => {
            if (response.status === 200) {
              toast.success(`${path.replace(/.$/, "")} has been deleted.`);
            } else {
              toast.error(`There was an error in creating ${path}`);
            }
          });
      }
      setList(list.filter((item) => item._id !== id));
    } catch (err) { }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/${path}/new`} style={{ textDecoration: "none" }}>
              <div className="viewButton">Add New</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  if (loading) {
    return <AbsoluteSpinner></AbsoluteSpinner>;
  }
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      {list && (
        <DataGrid
          className="datagrid"
          rows={list}
          columns={columns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          getRowId={(row) => row._id}
        />
      )}
    </div>
  );
};

export default Datatable;
