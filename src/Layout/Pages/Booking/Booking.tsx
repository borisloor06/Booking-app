import { useEffect, useState } from "react";
import SelectService from "./Steps/SelectService/SelectService";
import Stepper from "../../../Components/Stepper/Stepper";
import Button from "../../../Components/Button/Button";
import Schedules from "./Steps/Schedules/Schedules";
import { getSlotsByService } from "../../../services/getSlotsByService";
import { Slot } from "../../../Interfaces/Slots";

function Booking() {
  const [page, setPage] = useState<number>(0);
  const pages = [
    "Seleccionar servicio",
    "Seleccionar horario",
    "Confirmar turno",
  ];
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [slots, setSlots] = useState<Slot[]>([]);

  useEffect(() => {
    if (selectedService) {
      getSlotsByService(selectedService).then((slots) => {
        setSlots(slots);
      });
    }
  }, [selectedService]);

  const onOptionSelect = (option: number) => {
    if (option === selectedService) {
      setSelectedService(null);
      return;
    }
    setSelectedService(option);
  };

  return (
    <section className="grid grid-rows-[auto_1fr_auto] h-full gap-2">
      {/** Add stepper*/}

      <Stepper activeStep={page} steps={pages} />
      <main className="row-start-2 overflow-auto">
        {page === 0 && (
          <SelectService
            onOptionSelect={onOptionSelect}
            selectedOption={selectedService}
          />
        )}
        {page === 1 && <Schedules slots={slots} />}
      </main>
      {selectedService && (
        <footer className="flex justify-between row-start-3 h-16 mb-0 border-y-2 -mx-4 py-3 px-4">
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
            hidden={page === 0 && !selectedService}
            selected={true}
            className="ms-auto"
          >
            {page === 2 ? "Finalizar" : "Siguiente"}
          </Button>
        </footer>
      )}
    </section>
  );
}

export default Booking;
