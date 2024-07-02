import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layout/main-layout";
import * as pages from "./pages";
function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}> 
        <Route index element={<pages.Dashboard />} />
        <Route path="shipment" element={<pages.Shipment />} /> 
        <Route path="all-shipment/:id" element={<pages.ShipmentDetails />} />
        <Route path="riders" element={<pages.Riders />} />
        <Route path="vendors" element={<pages.Vendors />} />
        <Route path="vendors-profile" element={<pages.Profile />} />
        <Route path="all-shipment" element={<pages.Shipments />} />
        <Route path="change-password" element={<pages.NewPassword />} />
        <Route path="/edit-profile" element={<pages.EditProfile />} />
        <Route path="/riders-profile" element={<pages.RidersProfile />} />
        <Route path="/edit-rider" element={<pages.EditRider />}/>
      </Route>
    </Routes>
  );
}


export default App;
