
import './App.css'

import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Home';
import DashboardLayout from './layout/main-layout';
import Shipment from './pages/shipment/Shipment';

function App() {
  

  return (
   <Routes>
        <Route path='/' element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="shipment" element={<Shipment />} />
        </Route>
   </Routes>
  )
}

export default App
