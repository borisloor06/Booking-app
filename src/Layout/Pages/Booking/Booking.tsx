import { useEffect, useState } from "react";
import SelectService from "./Steps/SelectService/SelectService";
import Stepper from "../../../Components/Stepper/Stepper";
import Button from "../../../Components/Button/Button";
import Schedules from "./Steps/Schedules/Schedules";
import { getSlotsByService } from "../../../services/getSlotsByService";
import { Slot, SlotSelected } from "../../../Interfaces/Slots";
import { Service } from "../../../Interfaces/Services";

function Booking() {
  const [page, setPage] = useState<number>(0);
  const pages = [
    "Seleccionar servicio",
    "Seleccionar horario",
    "Confirmar turno",
  ];
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [slotSelected, setSlotSelected] = useState<SlotSelected | null>(null);

  useEffect(() => {
    if (selectedService) {
      getSlotsByService(selectedService.id).then((slots) => {
        setSlots(slots);
      });
    }
  }, [selectedService]);

  const onServiceSelect = (option: Service) => {
    if (option === selectedService) {
      setSelectedService(null);
      return;
    }
    setSelectedService(option);
  };

  const onSlotSelect = (time: SlotSelected) => {
    setSlotSelected(time);
  };

  return (
    <section className="grid grid-rows-[auto_1fr_auto] h-full gap-2">
      <Stepper activeStep={page} steps={pages} />
      <main className="row-start-2 overflow-auto">
        {page === 0 && (
          <SelectService
            onOptionSelect={onServiceSelect}
            selectedOption={selectedService}
          />
        )}
        {page === 1 && (
          <Schedules
            onSlotSelect={onSlotSelect}
            slots={slots}
            slotSelected={slotSelected}
          />
        )}
        {page === 2 && (
          <article className="grid grid-cols-1 gap-4 p-4 text-slate-600 font-semibold bg-slate-50 text-sm">
            <h2 className="">Confirmar turno</h2>
            <section className="grid grid-cols-1 gap-2">
              <p>Servicio: {selectedService?.description}</p>
              <p>
                Horario: {slotSelected?.date} {slotSelected?.time}
              </p>
            </section>
          </article>
        )}
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
            disabled={page === 1 && (slots.length === 0 || !slotSelected)}
            className="ms-auto"
          >
            {page === 2 ? "Confirmar" : "Siguiente"}
          </Button>
        </footer>
      )}
    </section>
  );
}

export default Booking;
