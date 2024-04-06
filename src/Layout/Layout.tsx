import Navigation from "./Navigation/Navigation";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="w-1/4 h-screen m-auto py-10">
      <main className="border-2 rounded-2xl h-full grid grid-cols-1 grid-rows-2">
        <section className="bg-red-50 rounded-t-2xl  row-span-full p-4">
          {<Outlet />}
        </section>
        <Navigation />
      </main>
    </main>
  );
}

export default Layout;
