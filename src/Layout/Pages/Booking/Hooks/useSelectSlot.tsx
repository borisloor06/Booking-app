import { useContext, useState } from "react";
import { SlotSelected } from "../../../../Interfaces/Slots";
import { BookingContext, BookingContextType } from "../../BookingProvider/BookingProvider";

export const useSelectSlot = () => {
  const [slotSelected, setSlotSelected] = useState<SlotSelected | undefined>(undefined);
  const { setBookingWithUpdater } = useContext(BookingContext) as BookingContextType;
  const onSlotSelect = (slot: SlotSelected) => {
    if (slotSelected?.time === slot.time && slotSelected?.date === slot.date) {
      setSlotSelected(undefined);
      setBookingWithUpdater((prev) => ({ ...prev, slot: undefined }));
      return;
    }
    setSlotSelected(slot);
    setBookingWithUpdater((prev) => ({ ...prev, slot }));
  };
  return { slotSelected, onSlotSelect };
};

export default useSelectSlot;
