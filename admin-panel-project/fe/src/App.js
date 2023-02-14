import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import User from "./pages/Users";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CreateProduct from "./pages/CreateProduct";
import CreateNewUser from "./pages/CreateNewUser";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const { users, setUsers, URL } = useContext(UserContext);

  useEffect(() => {
    fetchedData();
  }, []);

  async function fetchedData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON.data);
    setUsers(FETCHED_JSON.data);
  }

  return (
    <div className="App">
      <Navbar />
      <Box display="flex" sx={{ mt: 10 }}>
        <Sidebar />
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/users/add" element={<CreateNewUser />} />
          <Route
            path="user/newuser"
            element={<CreateNewUser URL={URL} setUsers={setUsers} />}
          />
          <Route path="/product" element={<Product />} />
          <Route path="product/newproduct" element={<CreateProduct />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
