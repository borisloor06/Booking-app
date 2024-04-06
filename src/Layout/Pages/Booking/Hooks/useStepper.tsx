import { useContext } from "react";
import useSaveBook from "./useSaveBook";
import {
  BookingContext,
  BookingContextType,
} from "../../BookingProvider/BookingProvider";

export const useStepper = () => {
  const pages = [
    "Seleccionar servicio",
    "Seleccionar horario",
    "Confirmar turno",
  ];
  const { saveBook } = useSaveBook();
  const {
    page,
    setPage,
  } = useContext(BookingContext) as BookingContextType;

  const handleNext = () => {
    if (page === pages.length - 1) {
      saveBook();
      return;
    }
    const newPage = page + 1;
    setPage(newPage);
  };

  const handlePreview = () => {
    const newPage = page - 1;
    setPage(newPage);
  };

  return { pages, handleNext, handlePreview, };
};

export default useStepper;
