import Dropdown from "../../../../../Components/DropDown/Dropdown";
import { Service } from "../../../../../Interfaces/Services";

function SelectService({
  onOptionSelect,
  selectedOption,
  categorySelected,
  handleDropdownToggle,
  options,
  categories,
}: {
  onOptionSelect: (option: Service) => void;
  selectedOption: Service | null;
  categorySelected: string;
  handleDropdownToggle: (category: string) => void;
  options: Service[];
  categories: string[];
}) {

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
