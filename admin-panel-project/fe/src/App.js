import "./App.css";
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import User from "./pages/Users";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CreateProduct from "./pages/CreateProduct";
import CreateNewUser from "./pages/CreateNewUser";
=======
import { Route, Router } from "react-router-dom";
import Users from "./pages/Users";
import Product from "./pages/Product";
import Header from "./components/Links";
import Home from "./pages/SideBar";
import SideBar from "./pages/SideBar";
>>>>>>> 681195f71ebf87f4ac391ef023eef63856744b35

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Navbar />
      <Sidebar />
      <Routes>
        {/* <Route path="/user" element={<User />} />
        <Route path="user/newuser" element={<CreateNewUser />} />
        <Route path="/product" element={<Product />} />
        <Route path="product/newproduct" element={<CreateProduct />} /> */}
      </Routes>
=======
      <h1>Admin panel project</h1>
      <SideBar />
      <Router>
        <Route path="/users" element={<Users />} />
      </Router>
>>>>>>> 681195f71ebf87f4ac391ef023eef63856744b35
    </div>
  );
}

export default App;
