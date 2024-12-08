import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import Reservedatatable from "../../components/reservedatatable/Reservedatatable";
const List = ({ columns }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable columns={columns} />
        {/* <Reservedatatable columns={columns} /> */}
      </div>
    </div>
  );
};

export default List;
