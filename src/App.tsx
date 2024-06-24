import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Home";
import DashboardLayout from "./layout/main-layout";
import Shipment from "./pages/shipment";
import Riders from "./pages/riders";
import Vendors from "./pages/vendor";
import Profile from "./pages/profile";
import Shipments from "./pages/each-shipment";
import NewPassword from "./pages/new-password";
import ShipmentDetails from "./pages/shipmentdetails";
function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}> 
        <Route index element={<Dashboard />} />
        <Route path="shipment" element={<Shipment />} />
        <Route path="all-shipment/:id" element={<ShipmentDetails />} /> {/* Dynamic route */}
        <Route path="riders" element={<Riders />} />
        <Route path="vendors" element={<Vendors />} />
        <Route path="vendors-profile" element={<Profile />} />
        <Route path="all-shipment" element={<Shipments />} />
        <Route path="change-password" element={<NewPassword />} />
      </Route>
    </Routes>
  );
}

export default App;
