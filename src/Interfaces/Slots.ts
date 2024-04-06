export interface Slot {
  date: string;
  serviceId: number;
  availableTimeslots: string[];
}

export interface SlotSelected {
  date: string;
  time: string;
}
