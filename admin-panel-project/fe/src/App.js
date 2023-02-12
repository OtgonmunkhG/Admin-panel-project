import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import User from "./pages/Users";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CreateProduct from "./pages/CreateProduct";
import CreateNewUser from "./pages/CreateNewUser";
import { useState } from "react";

function App() {
  const URL = "http://localhost:8080/users";
  const [users, setUsers] = useState()
  return (
    <div className="App">
      <Navbar />
      <Box display="flex" sx={{mt: 10}}>
     <Sidebar />
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/users/add" element={<CreateNewUser />}/>
        <Route path="user/newuser" element={<CreateNewUser URL={URL} setUsers={setUsers} />} />
        <Route path="/product" element={<Product />} />
        <Route path="product/newproduct" element={<CreateProduct />} />
      </Routes>
      </Box>
 
    </div>
  );
}

export default App;
