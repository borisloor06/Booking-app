import MenuItem from "../../Components/MenuItem/MenuItem";
import { Pages } from "../../consts/Pages";
function Navigation() {
  return (
    <nav className="row-span-1 rounded-b-2xl flex flex-row justify-evenly bg-white">
      {Pages.map((page) => (
        <MenuItem key={page.id} to={page.path} name={page.name} />
      ))}
    </nav>
  );
}

export default Navigation;
