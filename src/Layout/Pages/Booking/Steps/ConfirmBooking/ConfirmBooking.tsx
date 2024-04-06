import { Service } from "../../../../../Interfaces/Services";
import { SlotSelected } from "../../../../../Interfaces/Slots";

function ConfirmBooking({
  selectedService,
  slotSelected,
}: {
  selectedService: Service;
  slotSelected: SlotSelected;
}) {
  const formatedDate = slotSelected.date.replace(new RegExp("-", "g"), "/");
  return (
    <article className="grid grid-cols-1 gap-4 p-4 text-slate-600 font-semibold border-2 text-sm">
      <section className="grid grid-cols-1 gap-2">
        <p>Servicio: {selectedService.description}</p>
        <p>
          Fecha: {formatedDate} {slotSelected?.time}
        </p>
      </section>
    </article>
  );
}

export default ConfirmBooking;
