import { useEffect, useState } from "react";
import { Service } from "../../../../Interfaces/Services";
import { getCategories } from "../../../../services/getCategories";
import { getServicesByCategory } from "../../../../services/getServicesByCategory";

export const useCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [categorySelected, setCategorySelected] = useState<string | null>(null);
  const [options, setOptions] = useState<Service[]>([]);

  useEffect(() => {
    if (!categories.length) {
      getCategories().then((_categories) => setCategories(_categories));
    }

    if (categorySelected) {
      getServicesByCategory(categorySelected).then((_services) =>
        setOptions(_services)
      );
    }
  }, [categorySelected, categories]);
  const handleDropdownToggle = (index: string) => {
    setCategorySelected(categorySelected === index ? null : index);
  };

  return { categories, categorySelected, handleDropdownToggle, options, setCategorySelected };
};

export default useCategories;
