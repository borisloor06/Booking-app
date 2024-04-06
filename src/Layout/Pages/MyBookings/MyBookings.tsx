import { useContext } from "react";
import {
  BookingContext,
  BookingContextType,
} from "../BookingProvider/BookingProvider";

function MyBookings() {
  const { bookings } = useContext(BookingContext) as BookingContextType;

  return (
    <section className="grid grid-rows-[auto_1fr_auto] h-full gap-2">
      <header className="row-start-1 px-2 ">
        <h1 className="text-2xl font-bold text-slate-600">Mis turnos</h1>
      </header>
      <main className="row-start-2 overflow-auto">
        {bookings.length === 0 ? (
          <section className="flex justify-center items-center h-full">
            <p className="m-auto font-semibold text-xl text-slate-500">
              Aún no tienes turnos agendados
            </p>
          </section>
        ) : (
          <section>
            {bookings.map((booking, index) => (
              <article key={index} className="border-b-2 p-2">
                <h2 className="text-lg font-bold text-slate-500">
                  {booking?.service?.description}
                </h2>
                <section className="flex justify-between text-slate-500">
                  <p className="font-semibold">Fecha:</p>
                  <p>
                    {booking?.slot?.date} {booking?.slot?.time}
                  </p>
                </section>
              </article>
            ))}
          </section>
        )}
      </main>
    </section>
  );
}

export default MyBookings;
