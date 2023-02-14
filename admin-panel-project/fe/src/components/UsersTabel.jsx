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
  const URL = "http://localhost:8080/users/add";

  const { users, setUsers } = useContext(UserContext);
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  // const handleClick = () => {
  //   setOpen(!open);
  // };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
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

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstname", headerName: "First name", width: 130 },
    { field: "lastname", headerName: "Last name", width: 130 },
    {
      field: "phoneNumber",
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
      field: "role",
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
              <MenuItem onClick={handleClose}>Edit</MenuItem>
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
        rows={users}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
