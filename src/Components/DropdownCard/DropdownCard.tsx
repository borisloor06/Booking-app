import { Service } from "../../Interfaces/Services";
import Button from "../Button/Button";

interface DropdownCardProps {
  option: Service;
  onOptionSelect: (option: number) => void;
  isSelected: boolean;
}

const DropdownCard = ({
  option,
  onOptionSelect,
  isSelected,
}: DropdownCardProps) => {
  const handleClick = () => {
    onOptionSelect(option.id);
  };
  return (
    <article className="border p-2 m-2 flex flex-col justify-around bg-white">
      <h3>{option.name}</h3>
      <p>{option.description}</p>
      <Button selected={isSelected} onClick={handleClick} className="ms-auto">
        {isSelected ? "Seleccionado" : "Seleccionar"}
      </Button>
    </article>
  );
};

export default DropdownCard;
