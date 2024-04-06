import DropdownCard from "../DropdownCard/DropdownCard";
import { Service } from "../../Interfaces/Services";

interface DropdownProps {
  options: Service[];
  dropdownName: string;
  isOpen: boolean;
  onOptionSelect?: (option: number) => void;
  selectedOption: number | null;
  toggleDropdown: () => void;
}

const Dropdown = ({
  options,
  dropdownName,
  isOpen,
  onOptionSelect,
  selectedOption,
  toggleDropdown,
}: DropdownProps) => {
  const selectOption = (option: number) => {
    if (onOptionSelect) {
      onOptionSelect(option);
    }
  };

  return (
    <article className="w-full my-2">
      <button
        className="bg-slate-50 px-4 w-full flex justify-between"
        onClick={toggleDropdown}
      >
        <span className="text-sm font-semibold text-slate-500">
          {dropdownName}
        </span>
        {isOpen ? (
          <p className="text-slate-500 font-mono font-black">-</p>
        ) : (
          <p className="text-slate-500 font-mono font-black">+</p>
        )}
      </button>
      {isOpen && (
        <section className="max-h-fit">
          {options.map((option) => (
            <DropdownCard
              key={option.id}
              option={option}
              onOptionSelect={selectOption}
              isSelected={selectedOption === option.id}
            />
          ))}
        </section>
      )}
    </article>
  );
};

export default Dropdown;
