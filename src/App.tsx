import "./App.css";
import { getCategories } from "./services/getCategories";
import { getServicesByCategory } from "./services/getServicesByCategory";
import { getSlotsByService } from "./services/getSlotsByService";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import Booking from "./Layout/Pages/Booking/Booking";
import MyBookings from "./Layout/Pages/MyBookings/MyBookings";

function App() {
  getCategories().then((categories) =>
    getServicesByCategory(categories[1]).then((services) =>
      getSlotsByService(services[0].id).then((slots) => console.log(slots))
    )
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/reservar" />} />
          <Route path="/reservar" element={<Booking />} />
          <Route path="/turnos" element={<MyBookings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
