import { useState, useEffect } from "react";
import DropdownCard from "../DropdownCard/DropdownCard";
import { Service } from "../../Interfaces/Services";

interface DropdownProps {
  loadOptions: (dropdownName: string) => Promise<Service[]>;
  dropdownName: string;
  defaultValue: number;
  onOptionSelect?: (option: number) => void;
}

const Dropdown = ({
  loadOptions,
  dropdownName,
  defaultValue,
  onOptionSelect,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number>(defaultValue);
  const [options, setOptions] = useState<Service[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      const fetchedOptions = await loadOptions(dropdownName);
      setOptions(fetchedOptions);
    };

    if (isOpen && options.length === 0) {
      fetchOptions();
    }
  }, [isOpen, loadOptions, dropdownName, options.length]);

  const toggleDropdown = async () => {
    setIsOpen(!isOpen);

    if (!isOpen && options.length === 0) {
      const fetchedOptions = await loadOptions(dropdownName);
      setOptions(fetchedOptions);
    }
  };

  const selectOption = (option: number) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onOptionSelect) {
      onOptionSelect(option);
    }
  };

  return (
    <article className="w-full my-2">
      <button className="bg-slate-50 px-4 py-2 my-1  w-full flex justify-between" onClick={toggleDropdown}>
        <span>{dropdownName}</span>
        {isOpen ? (
          <p>cerrar</p>
        ) : (
          <p>abrir</p>
        )}
      </button>
      {isOpen && (
        <section>
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
