import DropdownCard from "../DropdownCard/DropdownCard";
import { Service } from "../../Interfaces/Services";

interface DropdownProps {
  options: Service[];
  dropdownName: string;
  isOpen: boolean;
  onOptionSelect?: (option: number) => void;
  toggleDropdown: () => void;
}

const Dropdown = ({
  options,
  dropdownName,
  isOpen,
  onOptionSelect,
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
        <span className="text-sm">{dropdownName}</span>
        {isOpen ? (
          <p className="font-sans font-extrabold">-</p>
        ) : (
          <p className="font-sans font-extrabold">+</p>
        )}
      </button>
      {isOpen && (
        <section className="max-h-fit">
          {options.map((option) => (
            <DropdownCard
              key={option.id}
              option={option}
              onOptionSelect={selectOption}
            />
          ))}
        </section>
      )}
    </article>
  );
};

export default Dropdown;
