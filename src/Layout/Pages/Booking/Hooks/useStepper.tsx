import { useState } from "react";

export const useStepper = () => {
  const [page, setPage] = useState<number>(0);
  const pages = [
    "Seleccionar servicio",
    "Seleccionar horario",
    "Confirmar turno",
  ];

  const handleNext = () => {
    if (page === pages.length - 1) {
      console.log("Confirmar turno");
      return;
    }
    setPage(page + 1);
  };

  const handlePreview = () => {
    setPage(page - 1);
  };

  return { page, pages, handleNext, handlePreview };
};

export default useStepper;