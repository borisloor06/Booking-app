import Button from "../../../../../Components/Button/Button";
import { Slot } from "../../../../../Interfaces/Slots";

function Schedules({ slots }: { slots: Slot[] }) {
  return (
    <section className="grid grid-cols-1 gap-2">
      {slots.map((slot) => (
        <article
          key={slot.date}
          className="grid grid-cols-1 gap-4 p-4 text-slate-600 font-semibold bg-slate-50 text-sm"
        >
          <h2 className="">{slot.date}</h2>
          <section className="grid grid-cols-2 gap-x-10 gap-y-2">
            {slot.availableTimeslots.map((timeslot) => (
              <Button key={timeslot}>{timeslot}</Button>
            ))}
          </section>
        </article>
      ))}
      {slots.length === 0 && (
        <article className="grid grid-cols-1 gap-2 p-4 bg-slate-400">
          <h2 className="text-white">No hay horarios disponibles</h2>
        </article>
      )}
    </section>
  );
}

export default Schedules;
