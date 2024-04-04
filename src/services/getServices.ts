import { ServicesResponse } from "../Interfaces/ServicesResponse";
import servicesResponse from "../data/services.json";

export const getServices = async () => {
  const { services } = servicesResponse as ServicesResponse;
  return services;
};
