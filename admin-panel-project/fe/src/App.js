import "./App.css";
import { Route, Router } from "react-router-dom";
import Users from "./pages/Users";
import Product from "./pages/Product";
import Header from "./components/Links";
import Home from "./pages/SideBar";
import SideBar from "./pages/SideBar";

function App() {
  return (
    <div className="App">
      <h1>Admin panel project</h1>
      <SideBar />
      <Router>
        <Route path="/users" element={<Users />} />
      </Router>
    </div>
  );
}

export default App;
