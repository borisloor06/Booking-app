import Dropdown from "../../../../../Components/DropDown/Dropdown";
import { Service } from "../../../../../Interfaces/Services";
import useCategories from "../../Hooks/useCategories";

function SelectService({
  onOptionSelect,
  selectedOption,
}: {
  onOptionSelect: (option: Service) => void;
  selectedOption: Service | null;
}) {
  const { categories, categorySelected, handleDropdownToggle, options } =
    useCategories();

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
