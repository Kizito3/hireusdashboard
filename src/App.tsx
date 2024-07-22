import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layout/main-layout";
import * as pages from "./pages";
import { AuthLayout } from "./layout/auth-layout";
import { PersistLogin } from "./components/access-control";
import { Login } from "./pages/Auth/login";
import { Register } from "./pages/Auth/register";
import { VerifyEmail } from "./pages/Auth/verify";
import { Forgot } from "./pages/Auth/forgot";
import { RegisterLayout } from "./layout/register-layout";
// import { ROLES } from "./library/constants";

function App() {
  return (
    <Routes>
      {/* public routes */}

      <Route element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<Forgot />} />
        <Route path="/auth/verify-email" element={<VerifyEmail />} />
      </Route>

      {/* <Route
        element={
          <RequireAuth allowedRoles={["x-admin", "company", "manager"]} />
        }
      > */}
      <Route element={<RegisterLayout />}>
        <Route
          path="/dashboard/rider-registration"
          element={<pages.RiderRegistration />}
        />
        {/* <Route path="/dashboard/register" element={<pages.RiderRegister />}/> */}
      </Route>
      {/* </Route> */}
      {/* PROTECTED ROUTES */}

      <Route element={<PersistLogin />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* <Route element={<RequireAuth allowedRoles={["x-admin", "company", "manager"]} />}> */}
          <Route
            path="/dashboard/unauthorized"
            element={<pages.UnAuthorized />}
          />

          {/* <Route element={<RequireAuth allowedRoles={["admin", "x-admin"]} />}> */}
          <Route index element={<pages.Dashboard />} />
          <Route path="/dashboard/shipment" element={<pages.Shipment />} />
          <Route
            path="/dashboard/all-shipment/:id"
            element={<pages.ShipmentDetails />}
          />
          <Route path="/dashboard/agents" element={<pages.Agents />} />
          <Route path="/dashboard/riders" element={<pages.Riders />} />
          <Route path="/dashboard/vendors" element={<pages.Vendors />} />
          <Route
            path="/dashboard/vendors-profile"
            element={<pages.Profile />}
          />
          <Route path="/dashboard/all-shipment" element={<pages.Shipments />} />
          <Route path="/dashboard/settings" element={<pages.NewPassword />} />
          <Route
            path="/dashboard/edit-profile"
            element={<pages.EditProfile />}
          />
          <Route
            path="/dashboard/riders-profile"
            element={<pages.RidersProfile />}
          />
          <Route path="/dashboard/edit-rider" element={<pages.EditRider />} />
          <Route
            path="/dashboard/riders-account"
            element={<pages.RidersAccount />}
          />
          {/* </Route> */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
