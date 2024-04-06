import { ReactNode, createContext, useMemo, useState } from "react";
import { Booking } from "../../../Interfaces/Booking";

export type BookingContextType = {
  booking: Booking;
  bookings: Booking[];
  page: number;
  setPage: (page: number) => void;
  setBookingWithUpdater: (updater: (prev: Booking) => Booking) => void;
  setBookingsWithUpdater: (updater: (prev: Booking[]) => Booking[]) => void;
};
export const BookingContext = createContext<BookingContextType>({
  booking: {} as Booking,
  setBookingWithUpdater: () => {},
  page: 0,
  setPage: () => {},
  bookings: [],
  setBookingsWithUpdater: () => {},
});

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [booking, setBooking] = useState({} as Booking);
  const [bookings, setBookings] = useState([] as Booking[]);
  const [page, setPage] = useState(0);
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
      page,
      setPage,
    }),
    [booking, bookings, page]
  );
  return (
    <BookingContext.Provider value={contextValue}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
