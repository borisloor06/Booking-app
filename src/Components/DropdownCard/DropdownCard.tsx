import { Service } from "../../Interfaces/Services";

interface DropdownCardProps {
  option: Service;
  onOptionSelect: (option: number) => void;
}

const DropdownCard = ({ option, onOptionSelect }: DropdownCardProps) => {
  const handleClick = () => {
    onOptionSelect(option.id);
  };

  return (
    <article className="border p-2 m-2 flex flex-col justify-around bg-white">
      <h3>{option.name}</h3>
      <p>{option.description}</p>
      <button onClick={handleClick} className="ms-auto">Seleccionar</button>
    </article>
  );
};

export default DropdownCard;
