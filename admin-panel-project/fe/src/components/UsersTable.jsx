import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../context/UserContext";

export default function UsersTable() {
  const DATA_URL = "http://localhost:8080/user";
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(DATA_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);

    setUsers(FETCHED_JSON);
  }
  useEffect(() => {
    fetchAllData();
  }, []);

  async function handleDelete(id) {
    toast("User is deleted!");
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }
  //  const rows = [
  //   { id: 1,  firstname: 'Hello', lastname: 'World' , phoneNumber: },
  //   { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  //   { id: 3, col1: 'MUI', col2: 'is Amazing' },
  // ];

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "first_name", headerName: "First name", width: 130 },
    { field: "last_name", headerName: "Last name", width: 130 },
    {
      field: "phone_number",
      headerName: "Phone Number",
      type: "number",
      width: 130,
    },
    {
      field: "email",
      headerName: "E-mail",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "user_role_id",
      headerName: "Role",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 100,
    },
    {
      field: "isDisable",
      headerName: "Disable",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 80,
      renderCell: (params) => {
        return (
          <Box>
            <MoreVertIcon
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
            />
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
            >
              <MenuItem>Edit</MenuItem>
              <MenuItem onClick={() => handleDelete(params.row.id)}>
                Delete
              </MenuItem>
              <ToastContainer />
            </Menu>
          </Box>
        );
      },
    },
  ];

  return (
    <div style={{ height: 800, width: "100%" }}>
      <Link to="/users/add">
        <Button variant="contained" sx={{ mx: "10px" }}>
          New
        </Button>
      </Link>

      <br />
      <br />
      <DataGrid
        columns={columns}
        rows={users}
        pageSize={6}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
