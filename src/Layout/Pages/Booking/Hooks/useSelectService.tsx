import { useContext, useEffect, useState } from "react";
import { Service } from "../../../../Interfaces/Services";
import { getSlotsByService } from "../../../../services/getSlotsByService";
import { Slot } from "../../../../Interfaces/Slots";
import { BookingContext, BookingContextType } from "../../BookingProvider/BookingProvider";
import { Booking } from "../../../../Interfaces/Booking";

export const useSelectService = () => {
  const { setBookingWithUpdater } = useContext(BookingContext) as BookingContextType;
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [slots, setSlots] = useState<Slot[]>([]);

  useEffect(() => {
    if (selectedService) {
      getSlotsByService(selectedService.id).then((slots) => {
        setSlots(slots);
      });
    }
  }, [selectedService]);

  const onServiceSelect = (option: Service) => {
    if (option === selectedService) {
      setSelectedService(null);
      return;
    }
    setSelectedService(option);
    if (slots.length > 0) setSlots([]);
    setBookingWithUpdater((prev: Booking) => ({ ...prev, service: option }));
  };

  return { slots, selectedService, onServiceSelect };
};

export default useSelectService;
