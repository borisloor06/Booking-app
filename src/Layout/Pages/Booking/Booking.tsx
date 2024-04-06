import SelectService from "./Steps/SelectService/SelectService";
import Stepper from "../../../Components/Stepper/Stepper";
import Schedules from "./Steps/Schedules/Schedules";
import ConfirmBooking from "./Steps/ConfirmBooking/ConfirmBooking";
import useSelectService from "./Hooks/useSelectService";
import BookingFooter from "./Footer/BookingFooter";
import useStepper from "./Hooks/useStepper";
import useSelectSlot from "./Hooks/useSelectSlot";
import {
  BookingContext,
  BookingContextType,
} from "../BookingProvider/BookingProvider";
import { useContext } from "react";

function Booking() {
  const { slots, selectedService, onServiceSelect } = useSelectService();
  const { pages, handleNext, handlePreview } = useStepper();
  const { slotSelected, onSlotSelect } = useSelectSlot();
  const { booking, page, setPage } = useContext(BookingContext) as BookingContextType;

  if (booking.service && booking.slot && !slotSelected && !selectedService) {
    onServiceSelect(booking.service);
    onSlotSelect(booking.slot);
  }

  if (booking.service && !booking.slot && !slotSelected && !selectedService) {
    onServiceSelect(booking.service);
  }

  if (page) {
    setPage(page);
  }

  return (
    <section className="grid grid-rows-[auto_1fr_auto] h-full gap-2">
      <Stepper activeStep={page} steps={pages} />
      <main className="row-start-2 overflow-auto">
        {page === 0 && (
          <SelectService
            onOptionSelect={onServiceSelect}
            selectedOption={selectedService}
          />
        )}
        {page === 1 && (
          <Schedules
            onSlotSelect={onSlotSelect}
            slots={slots}
            slotSelected={slotSelected}
          />
        )}
        {page === 2 && booking.slot && booking.service && (
          <ConfirmBooking booking={booking} />
        )}
      </main>
      {selectedService && (
        <BookingFooter
          page={page}
          handlePreview={handlePreview}
          handleNext={handleNext}
          selectedService={selectedService}
          disableNext={page === 1 && (slots.length === 0 || !slotSelected)}
        />
      )}
    </section>
  );
}

export default Booking;
