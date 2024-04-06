import { useState } from "react";
import SelectService from "./Steps/SelectService/SelectService";
import Stepper from "../../../Components/Stepper/Stepper";
import Button from "../../../Components/Button/Button";

function Booking() {
  const [page, setPage] = useState<number>(0);
  const pages = [
    "Seleccionar servicio",
    "Seleccionar horario",
    "Confirmar turno",
  ];
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const onOptionSelect = (option: number) => {
    if (option === selectedOption) {
      setSelectedOption(null);
      return;
    }
    setSelectedOption(option);
  };

  return (
    <section className="grid grid-rows-[auto_1fr_auto] h-full gap-2">
      {/** Add stepper*/}

      <Stepper activeStep={page} steps={pages} />
      <main className="row-start-2 overflow-auto">
        {page === 0 && (
          <SelectService
            onOptionSelect={onOptionSelect}
            selectedOption={selectedOption}
          />
        )}
      </main>
      <footer className="flex justify-between row-start-3 h-10 mb-0">
        <Button
          onClick={() => setPage(page - 1)}
          hidden={page === 0}
          selected={true}
          className={page == 2 ? "bg-slate-400" : ""}
        >
          Anterior
        </Button>
        <Button
          onClick={() => setPage(page + 1)}
          hidden={page === 0 && !selectedOption}
          selected={true}
          className="ms-auto"
        >
          {page === 2 ? "Finalizar" : "Siguiente"}
        </Button>
      </footer>
    </section>
  );
}

export default Booking;
