import { Booking } from "../../../../../Interfaces/Booking";

function ConfirmBooking({ booking: { service, slot } }: { booking: Booking }) {
  const formatedDate = slot?.date.replace(new RegExp("-", "g"), "/");
  return (
    <article className="grid grid-cols-1 gap-4 p-4 text-slate-600 font-semibold border-2 text-sm">
      <section className="grid grid-cols-1 gap-2">
        <p>Servicio: {service?.description}</p>
        <p>
          Fecha: {formatedDate} {slot?.time}
        </p>
      </section>
    </article>
  );
}

export default ConfirmBooking;
