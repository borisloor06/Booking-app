import slots from "../data/slots.json";

export const getSlotsByService = async (serviceId: number) => {
  const data = slots.filter((item) => item.serviceId === serviceId);
  console.log(data);
  return data;
};
