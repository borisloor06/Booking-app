import { useEffect, useState } from "react";
import { getCategories } from "../../../../../services/getCategories";
import Dropdown from "../../../../../Components/DropDown/Dropdown";
import { getServicesByCategory } from "../../../../../services/getServicesByCategory";
import { Service } from "../../../../../Interfaces/Services";

function SelectService({
  onOptionSelect,
  selectedOption,
}: {
  onOptionSelect: (option: Service) => void;
  selectedOption: Service | null;
}) {
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
  }, [categorySelected, categories]);

  return (
    <section className="border-2 p-2 max-h-fit">
      <h2 className="text-sm text-slate-600 font-medium ms-1">Categorías</h2>
      {categories.length > 0 ? (
        categories.map((category) => (
          <Dropdown
            key={category}
            isOpen={categorySelected === category}
            options={options}
            dropdownName={category}
            toggleDropdown={() => handleDropdownToggle(category)}
            onOptionSelect={onOptionSelect}
            selectedOption={selectedOption}
          />
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </section>
  );
}

export default SelectService;
