import { useContext } from "react";
import {
  BookingContext,
  BookingContextType,
} from "../../BookingProvider/BookingProvider";
import { useNavigate } from "react-router-dom";

export const useSaveBook = () => {
  const { booking, setBookingsWithUpdater, setBookingWithUpdater, setPage } = useContext(
    BookingContext
  ) as BookingContextType;
  const navigate = useNavigate();

  const saveBook = () => {
    setBookingsWithUpdater((prev) => [...prev, booking]);
    setBookingWithUpdater(() => ({
      service: undefined,
      slot: undefined,
    }));
    setPage(0);
    navigate("/turnos");
  };

  return { saveBook };
};

export default useSaveBook;
