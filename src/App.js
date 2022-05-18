import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
