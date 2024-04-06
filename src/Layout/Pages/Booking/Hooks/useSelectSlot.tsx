import { useContext, useState } from "react";
import { SlotSelected } from "../../../../Interfaces/Slots";
import { BookingContext, BookingContextType } from "../../BookingProvider/BookingProvider";

export const useSelectSlot = () => {
  const [slotSelected, setSlotSelected] = useState<SlotSelected | null>(null);
  const { setBookingWithUpdater } = useContext(BookingContext) as BookingContextType;
  const onSlotSelect = (time: SlotSelected) => {
    setSlotSelected(time);
    setBookingWithUpdater((prev) => ({ ...prev, slot: time }));
  };
  return { slotSelected, onSlotSelect };
};

export default useSelectSlot;
