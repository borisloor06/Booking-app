import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import Booking from "./Layout/Pages/Booking/Booking";
import MyBookings from "./Layout/Pages/MyBookings/MyBookings";
import BookingProvider from "./Layout/Pages/BookingProvider/BookingProvider";

function App() {

  return (
    <BrowserRouter>
      <BookingProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/reservar" />} />
            <Route path="/reservar" element={<Booking />} />
            <Route path="/turnos" element={<MyBookings />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BookingProvider>
    </BrowserRouter>
  );
}

export default App;
