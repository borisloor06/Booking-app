import { Pages } from "../../consts/Pages";
function Navigation() {
  return (
    <nav>
      {Pages.map((page) => (
        <a key={page.id} href={page.path} style={{ margin: "0 10px" }}>
          {page.name}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
