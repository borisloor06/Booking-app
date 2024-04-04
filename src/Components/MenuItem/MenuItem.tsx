import { Link } from "react-router-dom";
import CoffeeIcon from "../../Icons/CoffeeIcon/CoffeeIcon";

function MenuItem({ to, name }: { to: string; name: string }) {
  return (
    <Link to={to} className="menu-item">
      <CoffeeIcon fill="#646cff" width={50} />
      {name}
    </Link>
  );
}

export default MenuItem;
