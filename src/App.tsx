import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layout/main-layout";
import * as pages from "./pages";
import { AuthLayout } from "./layout/auth-layout";
import { PersistLogin, RequireAuth } from "./components/access-control";
import { Login } from "./pages/Auth/login";
import { Register } from "./pages/Auth/register";
import { VerifyEmail } from "./pages/Auth/verify";
import { Forgot } from "./pages/Auth/forgot";
import { RegisterLayout } from "./layout/register-layout";
import { Company } from "./pages/company";
import { RegisterCompany } from "./pages/register-company";
import { RegisterVendor } from "./pages/register-vendor";
import { PasswordResetEmail } from "./pages/Auth/forgot/password-verify";
import { ChangePassword } from "./pages/Auth/forgot/new-password";

function App() {
  return (
    <Routes>
      {/* public routes */}
      <Route element={<PersistLogin />}>
        <Route element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/forgot-password" element={<Forgot />} />
          <Route path="/auth/verify-email" element={<VerifyEmail />} />
          <Route
            path="/auth/password-reset-email"
            element={<PasswordResetEmail />}
          />
          <Route path="/auth/password-reset" element={<ChangePassword />} />
        </Route>
      </Route>
      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth />}>
          <Route element={<RegisterLayout />}>
            <Route
              path="/dashboard/rider-registration"
              element={<pages.RiderRegistration />}
            />
            <Route
              path="/dashboard/company-registration"
              element={<RegisterCompany />}
            />
            <Route
              path="/dashboard/vendor-registration"
              element={<RegisterVendor />}
            />
          </Route>
        </Route>
      </Route>

      {/* PROTECTED ROUTES */}
      <Route element={<PersistLogin />}>
        <Route
          element={
            <RequireAuth
              allowedRoles={[
                "x-admin",
                "company",
                "vendor",
                "admin",
                "personal",
              ]}
            />
          }
        >
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route
              path="/dashboard/unauthorized"
              element={<pages.UnAuthorized />}
            />
            <Route index element={<pages.Dashboard />} />
            <Route path="/dashboard/shipment" element={<pages.Shipment />} />
            <Route
              path="/dashboard/all-shipment/:id"
              element={<pages.ShipmentDetails />}
            />
            <Route path="/dashboard/agents" element={<pages.Agents />} />
            <Route path="/dashboard/company" element={<Company />} />
            <Route path="/dashboard/riders" element={<pages.Riders />} />
            <Route path="/dashboard/vendors" element={<pages.Vendors />} />
            <Route
              path="/dashboard/vendors-profile"
              element={<pages.Profile />}
            />
            <Route
              path="/dashboard/all-shipment"
              element={<pages.Shipments />}
            />
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
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}

export default App;
