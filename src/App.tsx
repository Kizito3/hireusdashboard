
import './App.css'

import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Home';
import DashboardLayout from './layout/main-layout';
import Shipment from './pages/shipment';
import Riders from './pages/riders';
import Vendors from './pages/vendor';

function App() {
  

  return (
   <Routes>
        <Route path='/' element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="shipment" element={<Shipment />} />
          <Route path="riders" element={<Riders />} />
          <Route path="vendors" element={<Vendors />} />
        </Route>
   </Routes>
  )
}

export default App
