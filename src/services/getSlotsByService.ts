import { Slot } from "../Interfaces/Slots";
import slots from "../data/slots.json";

export const getSlotsByService = async (serviceId: number) => {
  const data = slots.filter((item) => item.serviceId === serviceId);
  return data as Slot[];
};
