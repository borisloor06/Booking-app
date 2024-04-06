import { useState } from "react";
import SelectService from "./Steps/SelectService/SelectService";
import Stepper from "../../../Components/Stepper/Stepper";

function Booking() {
  const [page, setPage] = useState<number>(0);
  const pages = [
    "Seleccionar servicio",
    "Seleccionar horario",
    "Confirmar turno",
  ];
  return (
    <section className="grid grid-rows-[auto_1fr_auto] h-full gap-2">
      {/** Add stepper*/}

      <Stepper activeStep={page} steps={pages} />
      <main className="row-start-2 overflow-auto">
        {page === 0 && <SelectService />}
      </main>
      <footer className="flex justify-between row-start-3 h-10 mb-0">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Anterior
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === 2}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          {page === 2 ? "Finalizar" : "Siguiente"}
        </button>
      </footer>
    </section>
  );
}

export default Booking;
