import MenuItem from "../../Components/MenuItem/MenuItem";
import { Pages } from "../../consts/Pages";
function Navigation() {
  return (
    <nav>
      {Pages.map((page) => (
        <MenuItem key={page.id} to={page.path} name={page.name} />
      ))}
    </nav>
  );
}

export default Navigation;
