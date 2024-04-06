import { useState } from "react";
import SelectService from "./Steps/SelectService/SelectService";

function Booking() {
  const [page, setPage] = useState<number>(0);
  const pages = [
    "Seleccionar servicio",
    "Seleccionar horario",
    "Confirmar turno",
  ];
  return (
    <>
      {/** Add stepper*/}
      <section className="w-full p-2">
        <span className="text-slate-800 p-0 m-0 text-xs font-bold">{pages[page]}</span>
        <div className="w-full bg-slate-50 pt-0">
          <div
            className="h-2 bg-teal-500"
            style={{
              width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%",
            }}
          ></div>
        </div>
      </section>
      {page === 0 && <SelectService />}
      {/** Add footer and steps*/}
    </>
  );
}

export default Booking;
