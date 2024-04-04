import Navigation from "./Navigation/Navigation";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <main>{<Outlet />}</main>
      <Navigation />
    </>
  );
}

export default Layout;
