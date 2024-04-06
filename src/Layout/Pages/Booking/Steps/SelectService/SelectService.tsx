import { useEffect, useState } from "react";
import { getCategories } from "../../../../../services/getCategories";
import Dropdown from "../../../../../Components/DropDown/Dropdown";
import { getServicesByCategory } from "../../../../../services/getServicesByCategory";
import { Service } from "../../../../../Interfaces/Services";

function SelectService() {
  const [categories, setCategories] = useState<string[]>([]);
  const [categorySelected, setCategorySelected] = useState<string | null>(null);
  const [options, setOptions] = useState<Service[]>([]);

  const handleDropdownToggle = (index: string) => {
    setCategorySelected(categorySelected === index ? null : index);
  };

  useEffect(() => {
    if (!categories.length) {
      getCategories().then((_categories) => setCategories(_categories));
    }

    if (categorySelected) {
      getServicesByCategory(categorySelected).then((_services) =>
        setOptions(_services)
      );
    }
  }, [categorySelected]);

  return (
    <article className="border-2 p-2 max-h-full overflow-hidden scroll-auto">
      <h2>Categorías</h2>
      {categories.length > 0 ? (
        categories.map((category) => (
          <Dropdown
            key={category}
            isOpen={categorySelected === category}
            options={options}
            dropdownName={category}
            toggleDropdown={() => handleDropdownToggle(category)}
          />
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </article>
  );
}

export default SelectService;
