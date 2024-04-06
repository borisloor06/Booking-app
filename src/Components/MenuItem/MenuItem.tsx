import { NavLink } from "react-router-dom";
import CoffeeIcon from "../../Icons/CoffeeIcon/CoffeeIcon";

function MenuItem({ to, name }: { to: string; name: string }) {
  const baseStyle =
    "h-16 w-20 flex flex-col justify-center text-center text-violet-500 box-content ";
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        // agregar un border inferior del mismo color que el icono si el link está activo
        isActive ? baseStyle + "border-b-4 border-violet-500" : baseStyle
      }
    >
      <CoffeeIcon className="h-8 mx-auto" fill="#646cff" width={50} />
      {name}
    </NavLink>
  );
}

export default MenuItem;
