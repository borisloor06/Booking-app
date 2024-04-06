import Navigation from "./Navigation/Navigation";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="h-screen py-10">
      <main className="border-2 rounded-2xl h-full grid grid-cols-1 grid-rows-2 md:w-1/2 lg:w-1/4 m-auto">
        <section className="bg-red-50 rounded-t-2xl row-span-full p-4 min-h-fit overflow-auto">
          {<Outlet />}
        </section>
        <Navigation />
      </main>
    </main>
  );
}

export default Layout;
