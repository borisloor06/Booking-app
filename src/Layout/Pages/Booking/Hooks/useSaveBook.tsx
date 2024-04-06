import { useContext } from "react";
import {
  BookingContext,
  BookingContextType,
} from "../../BookingProvider/BookingProvider";
import { useNavigate } from "react-router-dom";

export const useSaveBook = () => {
  const { booking, setBookingsWithUpdater } = useContext(
    BookingContext
  ) as BookingContextType;
  const navigate = useNavigate();

  const saveBook = () => {
    setBookingsWithUpdater((prev) => [...prev, booking]);
    navigate("/turnos");
  };

  return { saveBook };
};

export default useSaveBook;