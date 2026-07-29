import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RoleSelection from "./pages/auth/RoleSelection";

import CustomerDashboard from "./pages/customer/CustomerDashboard";
import Restaurants from "./pages/customer/Restaurants";

function App() {
  return (
    <Routes>

      {/* Authentication */}

      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/roles" element={<RoleSelection />} />

      {/* Customer */}

      <Route path="/customer" element={<CustomerDashboard />} />

      <Route path="/restaurants" element={<Restaurants />} />

    </Routes>
  );
}

export default App;