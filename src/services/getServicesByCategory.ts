import { getServices } from "./getServices";

export const getServicesByCategory = async (category: string) => {
  const services = await getServices();
  console.log(category)
  const data = services.filter((item) => item.category === category);
  console.log(data);
  return data;
};
