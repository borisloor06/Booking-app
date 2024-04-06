import Button from "../../../../Components/Button/Button";
import { Service } from "../../../../Interfaces/Services";

function BookingFooter({
  page,
  handlePreview,
  handleNext,
  selectedService,
  disableNext
}: {
  page: number;
  handlePreview: () => void;
  handleNext: () => void;
  selectedService: Service | null;
  disableNext: boolean;
}) {
  return (
    <footer className="flex justify-between row-start-3 h-16 mb-0 border-y-2 -mx-4 py-3 px-4">
      <Button
        onClick={() => handlePreview()}
        hidden={page === 0}
        selected={page !== 2}
      >
        Anterior
      </Button>
      <Button
        onClick={() => handleNext()}
        hidden={page === 0 && !selectedService}
        selected={true}
        disabled={disableNext}
        className="ms-auto"
      >
        {page === 2 ? "Confirmar" : "Siguiente"}
      </Button>
    </footer>
  );
}

export default BookingFooter;
