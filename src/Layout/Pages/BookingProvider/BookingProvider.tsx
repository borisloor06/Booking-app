import { ReactNode, createContext, useMemo, useState } from "react";
import { Booking } from "../../../Interfaces/Booking";

export type BookingContextType = {
  booking: Booking;
  bookings: Booking[];
  setBookingWithUpdater: (updater: (prev: Booking) => Booking) => void;
  setBookingsWithUpdater: (updater: (prev: Booking[]) => Booking[]) => void;
};
export const BookingContext = createContext<BookingContextType>({
  booking: {} as Booking,
  setBookingWithUpdater: () => {},
  bookings: [],
  setBookingsWithUpdater: () => {},
});

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [booking, setBooking] = useState({} as Booking);
  const [bookings, setBookings] = useState([] as Booking[]);
  const setBookingWithUpdater = (updater: (prev: Booking) => Booking) => {
    setBooking(updater);
  };
  const setBookingsWithUpdater = (updater: (prev: Booking[]) => Booking[]) => {
    setBookings(updater);
  };
  const contextValue = useMemo(
    () => ({
      booking,
      setBookingWithUpdater,
      bookings,
      setBookingsWithUpdater,
    }),
    [booking, bookings]
  );
  return (
    <BookingContext.Provider value={contextValue}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
