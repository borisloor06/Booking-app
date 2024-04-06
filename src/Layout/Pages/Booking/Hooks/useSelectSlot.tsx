import { useState } from "react";
import { SlotSelected } from "../../../../Interfaces/Slots";

export const useSelectSlot = () => {
  const [slotSelected, setSlotSelected] = useState<SlotSelected | null>(null);
  const onSlotSelect = (time: SlotSelected) => {
    setSlotSelected(time);
  };
  return { slotSelected, onSlotSelect };
};

export default useSelectSlot;
