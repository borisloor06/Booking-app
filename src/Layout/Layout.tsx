import Navigation from "./Navigation/Navigation";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="h-screen py-5 md:py-10">
      <main className="border-2 rounded-2xl h-full grid grid-rows-[1fr_auto] md:w-1/2 lg:w-1/4 m-auto">
        <section className="rounded-t-2xl pt-2 px-4 min-h-fit overflow-auto">
          {<Outlet />}
        </section>
        <Navigation />
      </main>
    </main>
  );
}

export default Layout;
