import { Service } from "./Services";
import { SlotSelected } from "./Slots";

export interface Booking {
  service: Service;
  slot: SlotSelected;
}
