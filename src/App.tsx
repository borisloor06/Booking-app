import "./App.css";
import { getCategories } from "./services/getCategories";
import { getServicesByCategory } from "./services/getServicesByCategory";
import { getSlotsByService } from "./services/getSlotsByService";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";

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
          <Route path="/reservar" element={<div>Reservar</div>} />
          <Route path="/turnos" element={<div>Turnos</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
