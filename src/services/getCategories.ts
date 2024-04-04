import { getServices } from "./getServices";
export const getCategories = async () => {
  const services = await getServices();
  const categories = new Set(services.map((item) => item.category));
  console.log(categories);
  return new Array(...categories);
};