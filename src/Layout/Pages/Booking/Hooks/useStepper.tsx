import { useState } from "react";
import useSaveBook from "./useSaveBook";

export const useStepper = () => {
  const [page, setPage] = useState<number>(0);
  const pages = [
    "Seleccionar servicio",
    "Seleccionar horario",
    "Confirmar turno",
  ];
  const { saveBook } = useSaveBook();

  const handleNext = () => {
    if (page === pages.length - 1) {
      saveBook();
      return;
    }
    setPage(page + 1);
  };

  const handlePreview = () => {
    setPage(page - 1);
  };

  return { page, pages, handleNext, handlePreview, setPage };
};

export default useStepper;
