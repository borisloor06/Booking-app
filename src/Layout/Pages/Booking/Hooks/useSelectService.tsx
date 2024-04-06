import { useEffect, useState } from "react";
import { Service } from "../../../../Interfaces/Services";
import { getSlotsByService } from "../../../../services/getSlotsByService";
import { Slot } from "../../../../Interfaces/Slots";

export const useSelectService = () => {
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
  };

  
  return { slots, selectedService, onServiceSelect };
};

export default useSelectService;
